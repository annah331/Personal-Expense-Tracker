import SummaryCard from '@/components/summarycard';
import TransactionTable from '@/components/transactiontable';
import ExpenseChart from '@/components/expensechart';
import IncomeExpenseChart from '@/components/IncomeExpenseChart';

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      {/* Summary Cards */}
      <div className="flex flex-wrap gap-6">
        <SummaryCard title="Balance" amount="R5,700" />
        <SummaryCard title="Income" amount="R8,000" color="bg-green-100" />
        <SummaryCard title="Expenses" amount="R3,500" color="bg-red-100" />
        <SummaryCard title="Savings" amount="R1,200" color="bg-blue-100" />
      </div>

      {/* Transaction Table */}
      <TransactionTable />

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1">
          <ExpenseChart />
        </div>
        <div className="col-span-2">
          <IncomeExpenseChart />
        </div>
      </div>
    </div>
  );
}
