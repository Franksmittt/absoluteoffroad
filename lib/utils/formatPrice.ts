/**
 * Formats a price as South African Rand with consistent formatting
 * to avoid hydration mismatches between server and client
 */
export function formatPrice(price: number): string {
  // Convert to string and add thousand separators
  const formatted = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `R ${formatted}`;
}

