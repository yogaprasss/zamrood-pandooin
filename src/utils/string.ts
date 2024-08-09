export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'IDR',
    maximumSignificantDigits: 1
  }).format(value);
};