'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import type { Transaction } from '@/lib/types'

const transactionLabels: Record<string, string> = {
  deposito: 'Depósito',
  transferencia: 'Transferência',
  pagamento: 'Pagamento',
  saque: 'Saque',
}

const transactionColors: Record<string, string> = {
  deposito: 'bg-success/10 text-success border-success/20',
  transferencia: 'bg-accent/10 text-accent border-accent/20',
  pagamento: 'bg-chart-4/10 text-chart-4 border-chart-4/20',
  saque: 'bg-destructive/10 text-destructive border-destructive/20',
}

interface TransactionDetailDialogProps {
  transaction: Transaction | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function TransactionDetailDialog({
  transaction,
  open,
  onOpenChange,
}: TransactionDetailDialogProps) {
  if (!transaction) return null

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
      month: 'long',
      year: 'numeric',
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Detalhes da Transação</DialogTitle>
          <DialogDescription>
            Informações completas sobre esta transação
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Tipo</p>
            <Badge
              variant="outline"
              className={transactionColors[transaction.type]}
            >
              {transactionLabels[transaction.type]}
            </Badge>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Valor</p>
            <p
              className={`text-3xl font-bold ${transaction.amount >= 0 ? 'text-success' : 'text-foreground'}`}
            >
              {transaction.amount >= 0 ? '+' : '-'}
              {formatCurrency(transaction.amount)}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Data</p>
            <p className="text-base font-medium">
              {formatDate(transaction.date)}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Descrição</p>
            <p className="text-base">
              {transaction.description || 'Sem descrição'}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              ID da Transação
            </p>
            <p className="text-xs font-mono text-muted-foreground">
              {transaction.id}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
