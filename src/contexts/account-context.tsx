'use client'

import React, { createContext, useContext, useState } from 'react'
import { Account } from '@/lib/types'

interface AccountContextType {
  account: Account | null
  login: (accountData: Account) => void
  logout: () => void
  updateBalance: (newBalance: number) => void
  credit: (amount: number) => void
  debit: (amount: number) => void
}

const AccountContext = createContext<AccountContextType | undefined>(undefined)

export function AccountProvider({ children }: { children: React.ReactNode }) {
  const [account, setAccount] = useState<Account | null>(null)

  const login = (accountData: Account) => {
    setAccount(accountData)
  }

  const logout = () => {
    setAccount(null)
  }

  const updateBalance = (newBalance: number) => {
    if (account) {
      setAccount({ ...account, balance: newBalance })
    }
  }

  const credit = (amount: number) => {
    setAccount((prevAccount) => {
      if (prevAccount === null) {
        return null
      }

      return {
        ...prevAccount,
        balance: prevAccount.balance + amount,
      }
    })
  }

  const debit = (amount: number) => {
    setAccount((prevAccount) => {
      if (prevAccount === null) {
        return null
      }

      return {
        ...prevAccount,
        balance: prevAccount.balance - amount,
      }
    })
  }

  const value = {
    account,
    login,
    logout,
    updateBalance,
    credit,
    debit,
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
