export default function SummaryCard({ title, amount, color = '' }: any) {
  return (
    <div
      className={`
        p-5 rounded-2xl shadow-sm
        ${color}
      `}
    >
      <p className="text-sm opacity-80">{title}</p>
      <p className="text-2xl font-bold">R{amount.toLocaleString()}</p>
    </div>
  );
}
