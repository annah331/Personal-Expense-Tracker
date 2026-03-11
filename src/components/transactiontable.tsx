// src/components/TransactionTable.tsx
import React from 'react';

export interface Transaction {
  date: string;
  category: string;
  amount: number; // store as number for calculations
}

export const transactions: Transaction[] = [
  { date: 'Mar 6', category: 'Salary', amount: 8000 },
  { date: 'Mar 7', category: 'Groceries', amount: -1000 },
  { date: 'Mar 8', category: 'Transport', amount: -340 },
  { date: 'Mar 9', category: 'Netflix', amount: -160 },
  { date: 'Mar 10', category: 'Rent', amount: -2000 },
  { date: 'Mar 11', category: 'Savings', amount: 1200 },
];

export default function TransactionTable() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full overflow-x-auto">
      <h3 className="text-gray-700 text-lg font-semibold mb-4">
        Recent Transactions
      </h3>
      <table className="w-full text-left border-collapse min-w-[500px]">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="pb-2">Date</th>
            <th className="pb-2">Category</th>
            <th className="pb-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t, i) => (
            <tr
              key={i}
              className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150"
            >
              <td className="py-2">{t.date}</td>
              <td className="py-2">{t.category}</td>
              <td
                className={`py-2 font-semibold ${
                  t.amount < 0 ? 'text-red-500' : 'text-green-500'
                }`}
              >
                {t.amount < 0 ? '-' : '+'}R{Math.abs(t.amount)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
