import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Transaction } from '@/types/finance';
import { formatCurrency } from '@/lib/formatters';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { categories } from '@/data/mockData';

interface RecentTransactionsProps {
  transactions: Transaction[];
}

export function RecentTransactions({ transactions }: RecentTransactionsProps) {
  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find((c) => c.id === categoryId);
    if (!category) return Icons.DollarSign;
    const IconComponent = Icons[category.icon as keyof typeof Icons] as any;
    return IconComponent || Icons.DollarSign;
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle>Recent Transactions</CardTitle>
        <Button variant="ghost" size="sm" asChild>
          <Link to="/transactions">View All</Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => {
            const Icon = getCategoryIcon(transaction.category);
            const isIncome = transaction.type === 'income';

            return (
              <div key={transaction.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-muted p-2">
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <p className="text-sm text-muted-foreground">
                      {format(transaction.date, 'MMM dd, yyyy')}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {isIncome ? (
                    <ArrowUpRight className="h-4 w-4 text-[hsl(var(--income))]" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span
                    className={cn(
                      'tabular-nums font-semibold',
                      isIncome ? 'text-[hsl(var(--income))]' : 'text-foreground'
                    )}
                  >
                    {formatCurrency(Math.abs(transaction.amount))}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
