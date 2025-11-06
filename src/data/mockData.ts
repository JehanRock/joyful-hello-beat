import { Transaction, Category, Subscription } from '@/types/finance';

export const categories: Category[] = [
  { id: 'groceries', name: 'Groceries', icon: 'ShoppingCart', color: '142 71% 45%' },
  { id: 'dining', name: 'Dining Out', icon: 'UtensilsCrossed', color: '38 92% 50%' },
  { id: 'transportation', name: 'Transportation', icon: 'Car', color: '217 91% 60%' },
  { id: 'entertainment', name: 'Entertainment', icon: 'Tv', color: '280 81% 60%' },
  { id: 'utilities', name: 'Utilities', icon: 'Zap', color: '25 95% 53%' },
  { id: 'healthcare', name: 'Healthcare', icon: 'Heart', color: '0 84% 60%' },
  { id: 'shopping', name: 'Shopping', icon: 'ShoppingBag', color: '330 81% 60%' },
  { id: 'salary', name: 'Salary', icon: 'Briefcase', color: '142 71% 45%' },
  { id: 'freelance', name: 'Freelance', icon: 'Laptop', color: '174 85% 29%' },
  { id: 'subscriptions', name: 'Subscriptions', icon: 'CreditCard', color: '262 83% 58%' },
];

export const recentTransactions: Transaction[] = [
  {
    id: '1',
    description: 'Monthly Salary',
    amount: 450000, // $4,500.00
    category: 'salary',
    date: new Date('2024-11-01'),
    type: 'income',
  },
  {
    id: '2',
    description: 'Whole Foods Market',
    amount: -8750, // $87.50
    category: 'groceries',
    date: new Date('2024-11-05'),
    type: 'expense',
  },
  {
    id: '3',
    description: 'Uber Ride',
    amount: -2340, // $23.40
    category: 'transportation',
    date: new Date('2024-11-04'),
    type: 'expense',
  },
  {
    id: '4',
    description: 'Netflix Subscription',
    amount: -1599, // $15.99
    category: 'subscriptions',
    date: new Date('2024-11-03'),
    type: 'expense',
  },
  {
    id: '5',
    description: 'Freelance Project',
    amount: 125000, // $1,250.00
    category: 'freelance',
    date: new Date('2024-11-02'),
    type: 'income',
  },
];

export const categorySpending = [
  { name: 'Groceries', value: 42500, color: 'hsl(142 71% 45%)', icon: 'ShoppingCart' },
  { name: 'Dining Out', value: 35600, color: 'hsl(38 92% 50%)', icon: 'UtensilsCrossed' },
  { name: 'Transportation', value: 28900, color: 'hsl(217 91% 60%)', icon: 'Car' },
  { name: 'Entertainment', value: 21500, color: 'hsl(280 81% 60%)', icon: 'Tv' },
  { name: 'Utilities', value: 18200, color: 'hsl(25 95% 53%)', icon: 'Zap' },
];

export const subscriptions: Subscription[] = [
  {
    id: '1',
    name: 'Netflix',
    amount: 1599,
    frequency: 'monthly',
    nextBilling: new Date('2024-12-03'),
    category: 'subscriptions',
  },
  {
    id: '2',
    name: 'Spotify',
    amount: 999,
    frequency: 'monthly',
    nextBilling: new Date('2024-12-05'),
    category: 'subscriptions',
  },
  {
    id: '3',
    name: 'Adobe Creative Cloud',
    amount: 5499,
    frequency: 'monthly',
    nextBilling: new Date('2024-12-10'),
    category: 'subscriptions',
  },
];

// Calculated totals
export const totalBalance = 1254350; // $12,543.50
export const monthlyIncome = 575000; // $5,750.00
export const monthlyExpenses = 428750; // $4,287.50
export const netCashFlow = monthlyIncome - monthlyExpenses; // $1,462.50
export const activeSubscriptions = subscriptions.length;
