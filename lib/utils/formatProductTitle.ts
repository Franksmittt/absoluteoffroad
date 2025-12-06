/**
 * Cleans and simplifies product titles for better readability
 * Removes redundant information and makes titles more concise
 */
export function formatProductTitle(fullTitle: string, brand?: string): string {
  let title = fullTitle;

  // Remove brand name if it's at the start (e.g., "EFS Suspension EFS XTR..." -> "EFS XTR...")
  if (brand) {
    const brandPattern = new RegExp(`^${brand}\\s+`, 'i');
    title = title.replace(brandPattern, '');
  }

  // Remove common redundant phrases
  title = title
    .replace(/\s*for\s+Land\s+Cruiser\s+/gi, ' - LC')
    .replace(/\s*for\s+/gi, ' - ')
    .replace(/\s*\(Exclude\s+[^)]+\)/gi, '')
    .replace(/\s*\([^)]*Exclude[^)]*\)/gi, '')
    .replace(/\s*\([^)]*Excludes[^)]*\)/gi, '')
    .replace(/\s*Kit\s+for\s+/gi, ' Kit - ')
    .replace(/\s*Suspension\s+Kit\s+/gi, ' Kit ')
    .replace(/\s*Suspension\s+Upgrade\s+/gi, ' ')
    .replace(/\s*Suspension\s+System\s+/gi, ' ')
    .replace(/\s*Heavy\s+Duty\s+/gi, 'HD ')
    .replace(/\s*Constant\s+Load\s+/gi, 'Constant Load ')
    .replace(/\s*\(Single\/Double\s+Cab\)/gi, '')
    .replace(/\s*\([^)]*Cab[^)]*\)/gi, '')
    .replace(/\s*\([^)]*Wagon[^)]*\)/gi, '')
    .replace(/\s*\([^)]*Pickup[^)]*\)/gi, '');

  // Clean up multiple spaces
  title = title.replace(/\s+/g, ' ').trim();

  // Capitalize first letter
  if (title.length > 0) {
    title = title.charAt(0).toUpperCase() + title.slice(1);
  }

  return title;
}

/**
 * Gets a short, display-friendly title for product cards
 * Limits length and removes technical details
 */
export function getShortProductTitle(fullTitle: string, brand?: string, maxLength: number = 60): string {
  let title = formatProductTitle(fullTitle, brand);
  
  // If still too long, truncate at word boundary
  if (title.length > maxLength) {
    title = title.substring(0, maxLength);
    const lastSpace = title.lastIndexOf(' ');
    if (lastSpace > 0) {
      title = title.substring(0, lastSpace) + '...';
    } else {
      title = title + '...';
    }
  }
  
  return title;
}

