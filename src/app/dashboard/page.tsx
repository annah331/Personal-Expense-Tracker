'use client';

import { useTransactions } from '@/context/transactionContext';
import SummaryCard from '@/components/summarycard';
import AddTransactionForm from '@/components/addTransactionForm';
import TransactionTable from '@/components/transactiontable';
import ExpenseChart from '@/components/expensechart';
import IncomeExpenseChart from '@/components/IncomeExpenseChart';

export default function DashboardPage() {
  const { transactions } = useTransactions();

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((a, b) => a + b.amount, 0);

  const expenses = transactions
    .filter((t) => t.amount < 0)
    .reduce((a, b) => a + Math.abs(b.amount), 0);

  const balance = income - expenses;

  const savings = balance * 0.2;

  return (
    <div className="space-y-8">
      {/* PAGE HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>

        <p className="text-gray-500 text-sm mt-1">
          Track your balance, spending, and savings overview
        </p>
      </div>
      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <SummaryCard
          title="Balance"
          amount={`${balance}`}
          color="bg-gradient-to-br from-sky-200 to-sky-100 text-sky-900"
        />

        <SummaryCard
          title="Income"
          amount={`${income}`}
          color="bg-gradient-to-br from-emerald-200 to-emerald-100 text-emerald-900"
        />

        <SummaryCard
          title="Expenses"
          amount={`${expenses}`}
          color="bg-gradient-to-br from-rose-200 to-pink-100 text-rose-900"
        />

        <SummaryCard
          title="Savings"
          amount={`${savings}`}
          color="bg-gradient-to-br from-violet-200 to-purple-100 text-purple-900"
        />
      </div>

      {/* ADD TRANSACTION FORM (USES CONTEXT INTERNALLY) */}
      <AddTransactionForm />

      {/* TRANSACTION TABLE (USES CONTEXT INTERNALLY) */}
      <TransactionTable />

      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ExpenseChart />

        <div className="lg:col-span-2">
          <IncomeExpenseChart />
        </div>
      </div>
    </div>
  );
}
