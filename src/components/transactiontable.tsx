'use client';

import { useTransactions } from '@/context/transactionContext';

export default function TransactionTable() {
  const { transactions, remove } = useTransactions();

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
            <th className="pb-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((t) => (
            <tr
              key={t.id}
              className="border-b border-gray-100 hover:bg-gray-50"
            >
              <td className="py-2">{t.date}</td>
              <td className="py-2">{t.category}</td>

              <td className={t.amount < 0 ? 'text-red-500' : 'text-green-500'}>
                R{Math.abs(t.amount)}
              </td>

              <td>
                <button
                  onClick={() => remove(t.id)}
                  className="text-xs text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
