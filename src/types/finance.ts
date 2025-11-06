/**
 * Type definitions for FinanceAI
 */

export type TransactionType = 'income' | 'expense';

export interface Transaction {
  id: string;
  description: string;
  amount: number; // Stored as cents (integer)
  category: string;
  date: Date;
  type: TransactionType;
}

export interface Category {
  id: string;
  name: string;
  icon: string; // Lucide icon name
  color: string; // HSL color
}

export interface Budget {
  id: string;
  categoryId: string;
  limit: number; // Stored as cents
  spent: number; // Stored as cents
}

export interface Subscription {
  id: string;
  name: string;
  amount: number; // Stored as cents
  frequency: 'monthly' | 'yearly';
  nextBilling: Date;
  category: string;
}

export interface MetricCard {
  label: string;
  value: number; // Stored as cents
  change?: number; // Percentage
  icon: string; // Lucide icon name
}
