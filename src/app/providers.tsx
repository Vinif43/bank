'use client'

import type React from 'react'
import { TransactionsProvider } from '@/contexts/transactions-context'
import { Toaster } from 'sonner'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TransactionsProvider>
      {children}
      <Toaster richColors position="top-right" />
    </TransactionsProvider>
  )
}
