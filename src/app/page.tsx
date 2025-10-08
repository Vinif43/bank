'use client'

import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import { BalanceCard } from '@/components/balance-card'
import { TransactionForm } from '@/components/transaction-form'
import { RecentTransactions } from '@/components/recent-transactions'
import { useTransactions } from '@/contexts/transactions-context'
import { mockAccount } from '@/lib/mock-data'
import { Toaster } from '@/components/ui/sonner'

export default function HomePage() {
  const { getBalance } = useTransactions()
  const currentBalance = getBalance()

  const getGreeting = () => {
    const date = new Date()
    const dayOfWeek = date.toLocaleDateString('pt-BR', { weekday: 'long' })
    const formattedDate = date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
    return `${dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1)}, ${formattedDate}`
  }

  return (
    <div className="w-full">
      <div className="">
        <div className="flex-1 p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-1">
                Olá, {mockAccount.userName.split(' ')[0]}!
              </h1>
              <p className="text-sm text-muted-foreground">{getGreeting()}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <BalanceCard balance={currentBalance} />
                <TransactionForm />
              </div>
              <div>
                <RecentTransactions />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  )
}
