import React from 'react';

interface SummaryCardProps {
  title: string;
  amount: string;
  color?: string;
}

export default function SummaryCard({
  title,
  amount,
  color = 'bg-white',
}: SummaryCardProps) {
  return (
    <div
      className={`${color} rounded-xl shadow-md p-6 w-64 hover:scale-105 transition-transform duration-200`}
    >
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">{amount}</p>
    </div>
  );
}
