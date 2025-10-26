'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Account, Transaction } from '@/lib/types'
import { mockAccounts } from '@/lib/mock-data'

interface AccountContextType {
  account: Account | null
  login: (accountData: Account) => void
  logout: () => void
  addTransaction: (transactionData: Omit<Transaction, 'id'>) => void
  updateTransaction: (
    id: string,
    updatedData: Partial<Omit<Transaction, 'id'>>,
  ) => void
  deleteTransaction: (id: string) => void
}

const AccountContext = createContext<AccountContextType | undefined>(undefined)

export function AccountProvider({ children }: { children: React.ReactNode }) {
  const [account, setAccount] = useState<Account | null>(null)

  useEffect(() => {
    if (account === null) {
      return
    }

    let list: Account[] = []
    try {
      const storedList = localStorage.getItem('accountsList')
      list = JSON.parse(storedList || '[]')
      if (!Array.isArray(list) || list.length === 0) {
        list = mockAccounts
      }
    } catch {
      list = mockAccounts
    }

    const updatedList = list.map((acc) => {
      if (acc.accountNumber === account.accountNumber) {
        return account
      }
      return acc
    })

    localStorage.setItem('accountsList', JSON.stringify(updatedList))
  }, [account])

  const login = (accountData: Account) => {
    setAccount(accountData)
  }

  const logout = () => {
    setAccount(null)
  }

  const addTransaction = (transactionData: Omit<Transaction, 'id'>) => {
    const newTransaction: Transaction = {
      ...transactionData,
      id: Date.now().toString(),
    }
    setAccount((prevAccount) => {
      if (!prevAccount) return null
      return {
        ...prevAccount,
        balance: prevAccount.balance + newTransaction.amount,
        transactions: [newTransaction, ...prevAccount.transactions],
      }
    })
  }

  const updateTransaction = (
    id: string,
    updatedData: Partial<Omit<Transaction, 'id'>>,
  ) => {
    setAccount((prevAccount) => {
      if (!prevAccount) return null
      let balanceDifference = 0
      const newTransactions = prevAccount.transactions.map((t) => {
        if (t.id === id) {
          const oldAmount = t.amount
          const newAmount = updatedData.amount ?? oldAmount
          balanceDifference = newAmount - oldAmount
          return { ...t, ...updatedData, id }
        }
        return t
      })
      return {
        ...prevAccount,
        balance: prevAccount.balance + balanceDifference,
        transactions: newTransactions,
      }
    })
  }

  const deleteTransaction = (id: string) => {
    setAccount((prevAccount) => {
      if (!prevAccount) return null
      const transactionToDelete = prevAccount.transactions.find(
        (t) => t.id === id,
      )
      if (!transactionToDelete) return prevAccount
      const newTransactions = prevAccount.transactions.filter(
        (t) => t.id !== id,
      )
      const newBalance = prevAccount.balance - transactionToDelete.amount
      return {
        ...prevAccount,
        balance: newBalance,
        transactions: newTransactions,
      }
    })
  }

  const value = {
    account,
    login,
    logout,
    addTransaction,
    updateTransaction,
    deleteTransaction,
  }

  return (
    <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
  )
}

export function useAccount() {
  const context = useContext(AccountContext)
  if (context === undefined) {
    throw new Error('useAccount deve ser usado dentro de um AccountProvider')
  }
  return context
}
