import {
  Home,
  ArrowLeftRight,
  PiggyBank,
  Target,
  BarChart3,
} from 'lucide-react';
import { NavLink } from '@/components/NavLink';

const navItems = [
  { name: 'Dashboard', icon: Home, path: '/' },
  { name: 'Transactions', icon: ArrowLeftRight, path: '/transactions' },
  { name: 'Budgets', icon: PiggyBank, path: '/budgets' },
  { name: 'Goals', icon: Target, path: '/goals' },
  { name: 'Reports', icon: BarChart3, path: '/reports' },
];

export function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background lg:hidden">
      <div className="flex items-center justify-around">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === '/'}
            className="flex min-w-0 flex-1 flex-col items-center gap-1 px-2 py-3 text-xs text-muted-foreground transition-colors"
            activeClassName="text-primary font-semibold"
          >
            <item.icon className="h-5 w-5" />
            <span className="truncate">{item.name}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
