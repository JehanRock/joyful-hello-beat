import { TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { formatCurrency } from '@/lib/formatters';

interface BalanceCardProps {
  balance: number;
}

export function BalanceCard({ balance }: BalanceCardProps) {
  return (
    <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-primary to-secondary p-6 text-primary-foreground shadow-lg">
      <div className="relative z-10">
        <div className="mb-2 flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          <p className="text-sm font-medium opacity-90">Total Balance</p>
        </div>
        <p className="tabular-nums text-4xl font-bold tracking-tight lg:text-5xl">
          {formatCurrency(balance)}
        </p>
        <p className="mt-2 text-sm opacity-75">
          All accounts combined
        </p>
      </div>
      {/* Decorative background pattern */}
      <div className="absolute right-0 top-0 h-32 w-32 -translate-y-8 translate-x-8 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute bottom-0 left-0 h-24 w-24 -translate-x-6 translate-y-6 rounded-full bg-white/10 blur-xl" />
    </Card>
  );
}
