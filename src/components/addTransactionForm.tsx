'use client';

import { useState } from 'react';
import { useTransactions } from '@/context/transactionContext';

type TransactionType = 'income' | 'expense' | 'savings';

const categories: Record<TransactionType, string[]> = {
  income: ['Salary', 'Freelance', 'Bonus', 'Investment'],
  expense: ['Food', 'Transport', 'Rent', 'Bills', 'Shopping'],
  savings: ['Emergency Fund', 'Goals', 'Investments'],
};

const typeStyles = {
  income: 'bg-green-100 text-green-700',
  expense: 'bg-red-100 text-red-700',
  savings: 'bg-blue-100 text-blue-700',
};

export default function AddTransactionForm() {
  const { add } = useTransactions();

  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState<TransactionType>('expense');

  const numericAmount = Number(amount || 0);

  let finalAmount = numericAmount;
  if (type === 'expense') finalAmount = -Math.abs(numericAmount);
  if (type === 'income') finalAmount = Math.abs(numericAmount);
  if (type === 'savings') finalAmount = Math.abs(numericAmount);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!date || !category || !amount) return;

    add({
      id: crypto.randomUUID(),
      date,
      category,
      amount: finalAmount,
    });

    setDate('');
    setCategory('');
    setAmount('');
    setType('expense');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-md p-6 space-y-4"
    >
      <h2 className="text-lg font-semibold">Add Transaction</h2>

      {/* TYPE */}
      <div className="flex gap-2">
        {(['income', 'expense', 'savings'] as TransactionType[]).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => {
              setType(t);
              setCategory('');
            }}
            className={`px-3 py-1 rounded-full text-sm ${
              type === t ? typeStyles[t] : 'bg-gray-100 text-gray-600'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* DATE */}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full border p-2 rounded-lg"
      />

      {/* CATEGORY */}
      <input
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder={`e.g. ${categories[type][0]}`}
        className="w-full border p-2 rounded-lg"
      />

      <div className="flex flex-wrap gap-2">
        {categories[type].map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            className="text-xs px-2 py-1 bg-gray-100 rounded-full"
          >
            {c}
          </button>
        ))}
      </div>

      {/* AMOUNT */}
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount (R)"
        className="w-full border p-2 rounded-lg"
      />

      {/* PREVIEW */}
      <div className="text-sm p-3 bg-gray-50 rounded-lg">
        Preview: <b>{type.toUpperCase()}</b> • R{Math.abs(finalAmount || 0)} •{' '}
        {category || 'No category'}
      </div>

      {/* SUBMIT */}
      <button className="w-full bg-black text-white py-2 rounded-lg">
        Add Transaction
      </button>
    </form>
  );
}
