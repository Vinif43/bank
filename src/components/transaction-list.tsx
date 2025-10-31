'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Pencil, Trash2, Eye } from 'lucide-react'
import { useTransactions } from '@/contexts/transactions-context'
import type { Transaction } from '@/lib/types'

const transactionLabels: Record<string, string> = {
  deposito: 'Depósito',
  transferencia: 'Transferência',
  pagamento: 'Pagamento',
  saque: 'Saque',
}

const transactionColors: Record<string, string> = {
  deposito:
    'bg-transaction-success/10 text-transaction-success border-transaction-success',
  transferencia:
    'bg-transaction-transfer/20 text-transaction-transfer-info border-transaction-transfer-info',
  pagamento:
    'bg-transaction-payment/10 text-transaction-payment border-transaction-payment',
  saque:
    'bg-transaction-withdraw/10 text-transaction-withdraw border-transaction-withdraw',
}

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
        <Card
          key={transaction.id}
          className="hover:shadow-md transition-shadow"
        >
          <CardContent className="pl-[15px] pr-[10px] md:pl-6 md:pr-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <Badge
                    variant="outline"
                    className={transactionColors[transaction.type]}
                  >
                    {transactionLabels[transaction.type]}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {formatDate(transaction.date)}
                  </span>
                </div>
                <p
                  className={`text-2xl font-bold ${transaction.amount >= 0 ? 'text-success' : 'text-foreground'}`}
                >
                  {transaction.amount >= 0 ? '+' : '-'}
                  {formatCurrency(transaction.amount)}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onView(transaction)}
                  title="Ver detalhes"
                >
                  <Eye className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onEdit(transaction)}
                  title="Editar"
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onDelete(transaction.id)}
                  className="text-destructive hover:text-destructive hover:bg-destructive/10"
                  title="Deletar"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
