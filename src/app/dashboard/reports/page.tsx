import ExpenseChart from '@/components/expensechart';
import IncomeExpenseChart from '@/components/IncomeExpenseChart';

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold mb-4">Reports</h1>
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
