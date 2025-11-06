import { TrendingUp, TrendingDown, DollarSign, CreditCard } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { formatCurrency, formatPercent } from '@/lib/formatters';
import { cn } from '@/lib/utils';

interface MetricCardData {
  label: string;
  value: number;
  change?: number;
  icon: 'income' | 'expense' | 'cashflow' | 'subscriptions';
  type?: 'positive' | 'negative' | 'neutral';
}

const iconMap = {
  income: TrendingUp,
  expense: TrendingDown,
  cashflow: DollarSign,
  subscriptions: CreditCard,
};

interface MetricCardsProps {
  income: number;
  expenses: number;
  cashFlow: number;
  subscriptions: number;
}

export function MetricCards({ income, expenses, cashFlow, subscriptions }: MetricCardsProps) {
  const metrics: MetricCardData[] = [
    {
      label: 'Monthly Income',
      value: income,
      change: 12.5,
      icon: 'income',
      type: 'positive',
    },
    {
      label: 'Monthly Expenses',
      value: expenses,
      change: -8.2,
      icon: 'expense',
      type: 'neutral',
    },
    {
      label: 'Net Cash Flow',
      value: cashFlow,
      change: 15.3,
      icon: 'cashflow',
      type: 'positive',
    },
    {
      label: 'Active Subscriptions',
      value: subscriptions,
      icon: 'subscriptions',
      type: 'neutral',
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = iconMap[metric.icon];
        const isCount = metric.icon === 'subscriptions';
        
        return (
          <Card key={metric.label}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-muted-foreground">
                  {metric.label}
                </p>
                <Icon className={cn(
                  "h-4 w-4",
                  metric.type === 'positive' && "text-[hsl(var(--success))]",
                  metric.type === 'neutral' && "text-muted-foreground"
                )} />
              </div>
              <div className="mt-3">
                <p className={cn(
                  "tabular-nums text-2xl font-bold",
                  metric.type === 'positive' && metric.label === 'Monthly Income' && "text-[hsl(var(--income))]"
                )}>
                  {isCount ? metric.value : formatCurrency(metric.value)}
                </p>
                {metric.change !== undefined && (
                  <p className={cn(
                    "mt-1 text-xs",
                    metric.change > 0 ? "text-[hsl(var(--success))]" : "text-muted-foreground"
                  )}>
                    {formatPercent(metric.change)} from last month
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
