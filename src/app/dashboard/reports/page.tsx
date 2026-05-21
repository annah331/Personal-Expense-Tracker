'use client';

import { useTransactions } from '@/context/transactionContext';
import ExpenseChart from '@/components/expensechart';
import IncomeExpenseChart from '@/components/IncomeExpenseChart';

export default function ReportsPage() {
  const { transactions } = useTransactions();

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((a, b) => a + b.amount, 0);

  const expenses = transactions
    .filter((t) => t.amount < 0)
    .reduce((a, b) => a + Math.abs(b.amount), 0);

  const net = income - expenses;

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <h1 className="text-2xl font-bold">Reports</h1>
      <p className="text-gray-500 text-sm mt-1">
        Analyze your spending patterns and financial trends
      </p>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl shadow-sm bg-gradient-to-br from-emerald-200 to-emerald-100 text-emerald-900">
          <p className="text-sm opacity-70">Income</p>
          <p className="text-2xl font-bold">R{income}</p>
        </div>

        <div className="p-5 rounded-2xl shadow-sm bg-gradient-to-br from-red-200 to-pink-100 text-red-900">
          <p className="text-sm opacity-70">Expenses</p>
          <p className="text-2xl font-bold">R{expenses}</p>
        </div>

        <div className="p-5 rounded-2xl shadow-sm bg-gradient-to-br from-sky-200 to-sky-100 text-sky-900">
          <p className="text-sm opacity-70">Net</p>
          <p className="text-2xl font-bold">R{net}</p>
        </div>
      </div>

      {/* CHARTS SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* PIE CHART */}
        <ExpenseChart />

        {/* BAR CHART */}
        <IncomeExpenseChart />
      </div>
    </div>
  );
}
