'use client'

import type React from 'react'
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react'
import type { Transaction } from '@/lib/types'
import { useAccount } from '@/contexts/account-context'

interface TransactionsContextType {
  transactions: Transaction[]
  addTransaction: (transaction: Omit<Transaction, 'id'>) => void
  updateTransaction: (id: string, transaction: Partial<Transaction>) => void
  deleteTransaction: (id: string) => void
}

const TransactionsContext = createContext<TransactionsContextType | undefined>(
  undefined,
)

export function TransactionsProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const { debit, credit, account } = useAccount()

  useEffect(() => {
    if (account) {
      setTransactions(account.transactions || [])
    } else {
      setTransactions([])
    }
  }, [account])

  const addTransaction = useCallback(
    (transaction: Omit<Transaction, 'id'>) => {
      if (!account) return

      const newTransaction: Transaction = {
        ...transaction,
        id: Date.now().toString(),
      }
      setTransactions((prev) => [newTransaction, ...prev])

      if (newTransaction.type === 'deposito') {
        credit(newTransaction.amount)
      } else {
        debit(Math.abs(newTransaction.amount))
      }
    },
    [account, credit, debit],
  )

  const updateTransaction = useCallback(
    (id: string, updatedData: Partial<Transaction>) => {
      // implementar recalculo do saldo
      setTransactions((prev) =>
        prev.map((t) => (t.id === id ? { ...t, ...updatedData } : t)),
      )
    },
    [],
  )

  const deleteTransaction = useCallback((id: string) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        addTransaction,
        updateTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)
  if (!context) {
    throw new Error('useTransactions must be used within TransactionsProvider')
  }
  return context
}
