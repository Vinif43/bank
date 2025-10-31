import { TransactionDetailDialog } from '@/components/transaction-detail-dialog'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { fn } from 'storybook/test'

const meta = {
  title: 'transaction/TransactionDetailDialog',
  component: TransactionDetailDialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Card usado para mostra informações de uma transação.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    open: { control: false },
  },
} satisfies Meta<typeof TransactionDetailDialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    transaction: {
      id: '3',
      type: 'transferencia',
      amount: -500.0,
      date: '2022-11-21',
      description: 'Transferência enviada',
    },
    open: false,
    onOpenChange: fn(),
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <>
        <div style={{ marginBottom: 12 }}>
          <Button
            onClick={() => {
              setIsOpen(true)
              args.onOpenChange?.(true)
            }}
          >
            Abrir Dialog
          </Button>
        </div>

        <TransactionDetailDialog
          transaction={args.transaction}
          open={isOpen}
          onOpenChange={(value) => {
            setIsOpen(value)
            args.onOpenChange?.(value)
          }}
        />
      </>
    )
  },
}
