'use client';

import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

import { transactions } from '@/components/transactiontable';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function IncomeExpenseChart() {
  // Calculate total income and expenses
  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);
  const expenses = transactions
    .filter((t) => t.amount < 0)
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);

  const data = {
    labels: ['Income', 'Expenses'],
    datasets: [
      {
        label: 'Amount (R)',
        data: [income, expenses],
        backgroundColor: ['#34D399', '#F87171'], // green for income, red for expenses
      },
    ],
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full h-64 flex items-center justify-center">
      <Bar
        data={data}
        options={{
          responsive: true,
          plugins: { legend: { position: 'bottom' } },
        }}
      />
    </div>
  );
}
