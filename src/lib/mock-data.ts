import type { Transaction, Account } from './types'

export const mockAccount: Account = {
  balance: 2500.0,
  accountNumber: '1234-5',
  userName: 'Vinicius Ferreira Marinho',
}

export const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'deposito',
    amount: 150.0,
    date: '2022-11-18',
    description: 'Depósito em conta',
  },
  {
    id: '2',
    type: 'deposito',
    amount: 100.0,
    date: '2022-11-21',
    description: 'Depósito em conta',
  },
  {
    id: '3',
    type: 'deposito',
    amount: 50.0,
    date: '2022-11-21',
    description: 'Depósito em conta',
  },
  {
    id: '4',
    type: 'transferencia',
    amount: -500.0,
    date: '2022-11-21',
    description: 'Transferência enviada',
  },
  {
    id: '5',
    type: 'pagamento',
    amount: -250.0,
    date: '2022-11-22',
    description: 'Pagamento de conta',
  },
  {
    id: '6',
    type: 'deposito',
    amount: 300.0,
    date: '2022-11-23',
    description: 'Depósito em conta',
  },
  {
    id: '7',
    type: 'saque',
    amount: -100.0,
    date: '2022-11-24',
    description: 'Saque em caixa eletrônico',
  },
  {
    id: '8',
    type: 'transferencia',
    amount: -75.0,
    date: '2022-11-25',
    description: 'Transferência enviada',
  },
]
