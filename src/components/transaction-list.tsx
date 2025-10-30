'use client'

import { Card, CardContent } from '@/components/ui/card'
import { useTransactions } from '@/contexts/transactions-context'
import type { Transaction } from '@/lib/types'
import { TransactionCard } from './transaction-card'

interface TransactionListProps {
  onEdit: (transaction: Transaction) => void
  onDelete: (id: string) => void
  onView: (transaction: Transaction) => void
}

export function TransactionList({
  onEdit,
  onDelete,
  onView,
}: TransactionListProps) {
  const { transactions } = useTransactions()

  if (!transactions || (transactions && transactions.length === 0)) {
    return (
      <Card>
        <CardContent className="py-12 text-center">
          <p className="text-muted-foreground">Nenhuma transação encontrada</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-3">
      {transactions.map((transaction) => (
        <TransactionCard
          key={transaction.id}
          transaction={transaction}
          onView={onView}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}
