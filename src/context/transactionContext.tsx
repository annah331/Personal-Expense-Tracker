'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export type Transaction = {
  id: string;
  date: string;
  category: string;
  amount: number;
};

type TransactionContextType = {
  transactions: Transaction[];
  add: (t: Transaction) => void;
  remove: (id: string) => void;
  update: (updated: Transaction) => void;
};

const TransactionContext = createContext<TransactionContextType | undefined>(
  undefined,
);

export function TransactionProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: '1', date: '2026-05-01', category: 'Salary', amount: 8000 },
    { id: '2', date: '2026-05-02', category: 'Food', amount: -500 },
    { id: '3', date: '2026-05-03', category: 'Transport', amount: -200 },
  ]);

  function add(transaction: Transaction) {
    setTransactions((prev) => [transaction, ...prev]);
  }

  function remove(id: string) {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  }

  function update(updated: Transaction) {
    setTransactions((prev) =>
      prev.map((t) => (t.id === updated.id ? updated : t)),
    );
  }

  return (
    <TransactionContext.Provider value={{ transactions, add, remove, update }}>
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionContext);

  if (!context) {
    throw new Error('useTransactions must be used inside TransactionProvider');
  }

  return context;
}
