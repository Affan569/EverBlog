/**
 * ADVERTISEMENT SLOT - SIDEBAR
 * 
 * This is a placeholder for sidebar advertisements.
 * To use with real ads, replace this component with your ad provider's code.
 * 
 * Recommended sizes:
 * - Medium Rectangle: 300x250
 * - Half Page: 300x600
 * - Wide Skyscraper: 160x600
 */

export default function AdSlotSidebar() {
  return (
    <div className="w-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center py-8 text-center">
      <div className="text-xs text-zinc-400 dark:text-zinc-500">
        <span className="block font-medium mb-1">Advertisement Space</span>
        <span className="block">Sidebar (300x250)</span>
      </div>
    </div>
  )
}