'use client'

import { useState } from 'react'
import { TransactionList } from '@/components/transaction-list'
import { TransactionDetailDialog } from '@/components/transaction-detail-dialog'
import { EditTransactionDialog } from '@/components/edit-transaction-dialog'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import type { Transaction } from '@/lib/types'
import { useTransactions } from '@/contexts/transactions-context'
import { toast } from 'sonner'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { CreateTransactionDialog } from '@/components/create-transaction-dialog'

export default function TransacoesPage() {
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null)
  const [viewDialogOpen, setViewDialogOpen] = useState(false)
  const [createDialogOpen, setCreateDialogOpen] = useState(false)
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [transactionToDelete, setTransactionToDelete] = useState<string | null>(
    null,
  )
  const { deleteTransaction } = useTransactions()

  const handleView = (transaction: Transaction) => {
    setSelectedTransaction(transaction)
    setViewDialogOpen(true)
  }

  const handleEdit = (transaction: Transaction) => {
    setSelectedTransaction(transaction)
    setEditDialogOpen(true)
  }

  const handleDeleteClick = (id: string) => {
    setTransactionToDelete(id)
    setDeleteDialogOpen(true)
  }

  const confirmDelete = () => {
    if (transactionToDelete) {
      deleteTransaction(transactionToDelete)
      toast.success('Transação deletada com sucesso')
      setTransactionToDelete(null)
      setDeleteDialogOpen(false)
    }
  }

  return (
    <div className=" w-full ">
      <div className="">
        <div className="flex-1 p-8">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-1">Transações</h1>
                <p className="text-sm text-muted-foreground">
                  Gerencie todas as suas transações financeiras
                </p>
              </div>
              <Button onClick={() => setCreateDialogOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Nova transação
              </Button>
            </div>

            <TransactionList
              onEdit={handleEdit}
              onDelete={handleDeleteClick}
              onView={handleView}
            />
          </div>
        </div>
      </div>

      <TransactionDetailDialog
        transaction={selectedTransaction}
        open={viewDialogOpen}
        onOpenChange={setViewDialogOpen}
      />

      <CreateTransactionDialog
        open={createDialogOpen}
        onOpenChange={setCreateDialogOpen}
      />

      <EditTransactionDialog
        transaction={selectedTransaction}
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
      />

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja deletar esta transação? Esta ação não pode
              ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <Button variant="destructive" onClick={confirmDelete}>
              Deletar
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
