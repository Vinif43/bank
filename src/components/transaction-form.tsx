'use client'

import type React from 'react'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useTransactions } from '@/contexts/transactions-context'
import type { TransactionType } from '@/lib/types'
import { toast } from 'sonner'

const transactionTypes: { value: TransactionType; label: string }[] = [
  { value: 'deposito', label: 'Depósito' },
  { value: 'transferencia', label: 'Transferência' },
  { value: 'pagamento', label: 'Pagamento' },
  { value: 'saque', label: 'Saque' },
]

export function TransactionForm() {
  // poderia usar react query com zod
  const [type, setType] = useState<TransactionType>('deposito')
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')
  const { addTransaction } = useTransactions()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const numAmount = Number.parseFloat(amount)
    if (isNaN(numAmount) || numAmount <= 0) {
      toast.error('Por favor, insira um valor válido')
      return
    }

    const finalAmount = type === 'deposito' ? numAmount : -Math.abs(numAmount)

    addTransaction({
      type,
      amount: finalAmount,
      date: new Date().toISOString().split('T')[0],
      description:
        description ||
        `${transactionTypes.find((t) => t.value === type)?.label}`,
    })

    toast.success('Transação adicionada com sucesso')

    setAmount('')
    setDescription('')
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Nova transação</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="type">Tipo de transação</Label>
            <Select
              value={type}
              onValueChange={(value) => setType(value as TransactionType)}
            >
              <SelectTrigger id="type">
                <SelectValue placeholder="Selecione o tipo de transação" />
              </SelectTrigger>
              <SelectContent>
                {transactionTypes.map((t) => (
                  <SelectItem key={t.value} value={t.value}>
                    {t.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount">Valor</Label>
            <Input
              id="amount"
              type="number"
              step="0.01"
              placeholder="0,00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descrição (opcional)</Label>
            <Input
              id="description"
              type="text"
              placeholder="Descrição da transação"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <Button type="submit" className="w-full" size="lg">
            Concluir transação
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
