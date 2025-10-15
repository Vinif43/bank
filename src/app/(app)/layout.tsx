import { Sidebar } from '@/components/sidebar'
import { Header } from '@/components/header'
import { mockAccount } from '@/lib/mock-data'
import { TransactionsProvider } from '@/contexts/transactions-context'
import { Toaster } from 'sonner'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <TransactionsProvider>
      <div className="flex min-h-screen flex-col">
        <Header userName={mockAccount.userName} />
        <div className="flex flex-1">
          <Sidebar />
          {children}
        </div>
      </div>
      <Toaster richColors position="top-right" />
    </TransactionsProvider>
  )
}
