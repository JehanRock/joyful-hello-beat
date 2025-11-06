import { BalanceCard } from '@/components/dashboard/BalanceCard';
import { MetricCards } from '@/components/dashboard/MetricCards';
import { CategoryChart } from '@/components/dashboard/CategoryChart';
import { RecentTransactions } from '@/components/dashboard/RecentTransactions';
import { AIInsightCards } from '@/components/dashboard/AIInsightCards';
import {
  totalBalance,
  monthlyIncome,
  monthlyExpenses,
  netCashFlow,
  activeSubscriptions,
  categorySpending,
  recentTransactions,
} from '@/data/mockData';

const Dashboard = () => {
  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Balance Card */}
      <BalanceCard balance={totalBalance} />

      {/* Metric Cards */}
      <MetricCards
        income={monthlyIncome}
        expenses={monthlyExpenses}
        cashFlow={netCashFlow}
        subscriptions={activeSubscriptions}
      />

      {/* Charts and Transactions */}
      <div className="grid gap-6 lg:grid-cols-2">
        <CategoryChart data={categorySpending} />
        <RecentTransactions transactions={recentTransactions} />
      </div>

      {/* AI Insights */}
      <AIInsightCards />
    </div>
  );
};

export default Dashboard;
