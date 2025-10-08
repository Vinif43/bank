'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Pencil } from 'lucide-react'
import { useTransactions } from '@/contexts/transactions-context'
import Link from 'next/link'

const transactionLabels: Record<string, string> = {
  deposito: 'Depósito',
  transferencia: 'Transferência',
  pagamento: 'Pagamento',
  saque: 'Saque',
}

export function RecentTransactions() {
  const { transactions } = useTransactions()
  const recentTransactions = transactions.slice(0, 5)

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(Math.abs(value))
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString + 'T00:00:00')
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
  }

  const getMonthLabel = (dateString: string) => {
    const date = new Date(dateString + 'T00:00:00')
    return date.toLocaleDateString('pt-BR', { month: 'long' })
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl">Extrato</CardTitle>
        <div className="flex gap-2">
          <Link href="/transacoes">
            <Button variant="ghost" size="icon">
              <Pencil className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between py-3 border-b last:border-0"
            >
              <div className="flex-1">
                <p className="text-xs text-success font-medium uppercase mb-1">
                  {getMonthLabel(transaction.date)}
                </p>
                <p className="font-medium text-sm">
                  {transactionLabels[transaction.type]}
                </p>
                <p
                  className={`text-lg font-bold ${transaction.amount >= 0 ? 'text-success' : 'text-foreground'}`}
                >
                  {transaction.amount >= 0 ? '' : '-'}
                  {formatCurrency(transaction.amount)}
                </p>
              </div>
              <div className="text-right text-sm text-muted-foreground">
                {formatDate(transaction.date)}
              </div>
            </div>
          ))}
        </div>
        <Link href="/transacoes">
          <Button variant="link" className="w-full mt-4">
            Ver todas as transações
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
