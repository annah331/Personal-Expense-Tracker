'use client';

import TransactionTable from '@/components/transactiontable';
import SummaryCard from '@/components/summarycard';

import { useTransactions } from '@/context/transactionContext';

export default function TransactionsPage() {
  const { transactions } = useTransactions();

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((a, b) => a + b.amount, 0);

  const expenses = transactions
    .filter((t) => t.amount < 0)
    .reduce((a, b) => a + Math.abs(b.amount), 0);

  return (
    <div className="space-y-8">
      {/* PAGE HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Transactions</h1>

        <p className="text-gray-500 text-sm mt-1">
          View and manage your financial activity
        </p>
      </div>

      {/* TRANSACTIONS TABLE */}
      <TransactionTable />
    </div>
  );
}
