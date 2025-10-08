'use client'

import type React from 'react'
import { createContext, useContext, useState, useCallback } from 'react'
import type { Transaction } from '@/lib/types'
import { mockTransactions } from '@/lib/mock-data'

interface TransactionsContextType {
  transactions: Transaction[]
  addTransaction: (transaction: Omit<Transaction, 'id'>) => void
  updateTransaction: (id: string, transaction: Partial<Transaction>) => void
  deleteTransaction: (id: string) => void
  getBalance: () => number
}

const TransactionsContext = createContext<TransactionsContextType | undefined>(
  undefined,
)

export function TransactionsProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [transactions, setTransactions] =
    useState<Transaction[]>(mockTransactions)

  const addTransaction = useCallback((transaction: Omit<Transaction, 'id'>) => {
    const newTransaction: Transaction = {
      ...transaction,
      id: Date.now().toString(),
    }
    setTransactions((prev) => [newTransaction, ...prev])
  }, [])

  const updateTransaction = useCallback(
    (id: string, updatedData: Partial<Transaction>) => {
      setTransactions((prev) =>
        prev.map((t) => (t.id === id ? { ...t, ...updatedData } : t)),
      )
    },
    [],
  )

  const deleteTransaction = useCallback((id: string) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const getBalance = useCallback(() => {
    return transactions.reduce((acc, t) => acc + t.amount, 2500)
  }, [transactions])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        addTransaction,
        updateTransaction,
        deleteTransaction,
        getBalance,
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
