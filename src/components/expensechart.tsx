'use client';

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { transactions, Transaction } from '@/components/transactiontable';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ExpenseChart() {
  // Filter only expenses (negative amounts)
  const expenseTransactions: Transaction[] = transactions.filter(
    (t) => t.amount < 0,
  );

  // Aggregate by category
  const categoryMap: Record<string, number> = {};
  expenseTransactions.forEach((t) => {
    if (categoryMap[t.category]) {
      categoryMap[t.category] += Math.abs(t.amount);
    } else {
      categoryMap[t.category] = Math.abs(t.amount);
    }
  });

  const data = {
    labels: Object.keys(categoryMap),
    datasets: [
      {
        label: 'Expenses',
        data: Object.values(categoryMap),
        backgroundColor: [
          '#F87171', // red
          '#60A5FA', // blue
          '#34D399', // green
          '#FBBF24', // yellow
          '#A78BFA', // purple
        ],
        borderColor: ['#ffffff'],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            const dataValue = tooltipItem.raw;
            const total = Object.values(categoryMap).reduce((a, b) => a + b, 0);
            const percentage = ((dataValue / total) * 100).toFixed(1);
            return `${tooltipItem.label}: R${dataValue} (${percentage}%)`;
          },
        },
      },
      legend: {
        position: 'bottom' as const,
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full h-64 flex items-center justify-center">
      <Pie data={data} options={options} />
    </div>
  );
}
