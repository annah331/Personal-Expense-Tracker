'use client';

import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { useTransactions } from '@/context/transactionContext';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ExpenseChart() {
  const { transactions } = useTransactions();

  const expenseTransactions = transactions.filter((t) => t.amount < 0);

  const categoryMap: Record<string, number> = {};

  expenseTransactions.forEach((t) => {
    categoryMap[t.category] =
      (categoryMap[t.category] || 0) + Math.abs(t.amount);
  });

  const data = {
    labels: Object.keys(categoryMap),

    datasets: [
      {
        data: Object.values(categoryMap),
        backgroundColor: [
          'rgba(251, 113, 133, 0.7)', // rose
          'rgba(96, 165, 250, 0.7)', // blue
          'rgba(52, 211, 153, 0.7)', // emerald
          'rgba(250, 204, 21, 0.7)', // yellow
          'rgba(167, 139, 250, 0.7)', // violet
        ],

        borderColor: '#fff',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 h-[320px]">
      {/* HEADER */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Expense Breakdown
        </h3>

        <p className="text-sm text-gray-500">
          See where most of your spending goes
        </p>
      </div>

      {/* CHART */}
      <div className="flex items-center justify-center">
        <div className="w-full max-w-[220px]">
          <Pie
            data={data}
            options={{
              responsive: true,
              maintainAspectRatio: true,

              plugins: {
                legend: {
                  position: 'bottom',

                  labels: {
                    boxWidth: 12,

                    font: {
                      size: 11,
                    },
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
