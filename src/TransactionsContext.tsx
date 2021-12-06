import { createContext, useEffect, useState, ReactNode } from 'react'
import { api } from './Services/Api';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface TransactionsProviderProps {
  children: ReactNode
}

// interface TransactionInput {
//   title: string;
//   amount: number:
//   type: string;
//   category: string;
// }

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

// type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>

interface transactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void;
}


export const TransactionsContext = createContext<transactionsContextData>(
  {} as transactionsContextData
)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []);

  function createTransaction(transaction: TransactionInput) {
    api.post('/transactions', transaction)
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}