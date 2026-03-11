import TransactionTable from '@/components/transactiontable';

export default function TransactionsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Transactions</h1>
      <TransactionTable />
    </div>
  );
}
