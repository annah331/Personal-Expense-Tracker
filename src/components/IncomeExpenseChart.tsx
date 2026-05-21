'use client';

import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

import { useTransactions } from '@/context/transactionContext';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function IncomeExpenseChart() {
  const { transactions } = useTransactions();

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((a, b) => a + b.amount, 0);

  const expenses = transactions
    .filter((t) => t.amount < 0)
    .reduce((a, b) => a + Math.abs(b.amount), 0);

  const data = {
    labels: ['Income', 'Expenses'],

    datasets: [
      {
        label: 'Amount (R)',

        data: [income, expenses],

        backgroundColor: [
          'rgba(52, 211, 153, 0.7)', // emerald
          'rgba(251, 113, 133, 0.7)', // rose
        ],

        borderRadius: 14,
        borderSkipped: false,
        barThickness: 55,
      },
    ],
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 h-[320px]">
      {/* HEADER */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Income vs Expenses
        </h3>

        <p className="text-sm text-gray-500">
          Compare money earned against money spent
        </p>
      </div>

      {/* CHART */}
      <div className="flex items-center justify-center">
        <div className="w-full max-w-[340px]">
          <Bar
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

              scales: {
                y: {
                  grid: {
                    color: 'rgba(0,0,0,0.05)',
                  },

                  ticks: {
                    font: {
                      size: 10,
                    },
                  },
                },

                x: {
                  grid: {
                    display: false,
                  },

                  ticks: {
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
