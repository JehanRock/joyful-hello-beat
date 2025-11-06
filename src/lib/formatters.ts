/**
 * Currency and number formatting utilities for FinanceAI
 * CRITICAL: All amounts are stored as integers (cents) to avoid floating-point errors
 */

/**
 * Format cents to currency string
 * @param amount Amount in cents (e.g., 1523 = $15.23)
 * @param currency Currency code (default: USD)
 */
export const formatCurrency = (amount: number, currency: string = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount / 100);
};

/**
 * Format large numbers in compact notation
 * @param num Number to format (e.g., 1500 -> "1.5K")
 */
export const formatCompact = (num: number): string => {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(num);
};

/**
 * Format percentage with + prefix for positive values
 * @param value Percentage value (e.g., 15.5)
 */
export const formatPercent = (value: number): string => {
  const prefix = value > 0 ? '+' : '';
  return `${prefix}${value.toFixed(1)}%`;
};
