import { TransactionCard } from '@/components/transaction-card'

import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { fn } from 'storybook/test'

const meta = {
  title: 'TransactionCard',
  component: TransactionCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onView: fn(), onDelete: fn(), onEdit: fn() },
} satisfies Meta<typeof TransactionCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    transaction: {
      id: '1',
      type: 'deposito',
      amount: 50.0,
      date: '2022-11-21',
      description: 'Depósito em conta',
    },
  },
}
