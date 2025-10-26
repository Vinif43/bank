'use client'

import { Sidebar } from '@/components/sidebar'
import { Header } from '@/components/header'
import { TransactionsProvider } from '@/contexts/transactions-context'
import { Toaster } from 'sonner'

import { useAccount } from '@/contexts/account-context'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Loader2 } from 'lucide-react'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { account } = useAccount()
  const router = useRouter()
  useEffect(() => {
    if (account === null) {
      router.replace('/')
    }
  }, [account, router])

  if (account === null) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-[16px]">
        <span className="text-[25px] font-bold">Aguarde...</span>
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  return (
    <TransactionsProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          {children}
        </div>
      </div>
      <Toaster richColors position="top-right" />
    </TransactionsProvider>
  )
}
