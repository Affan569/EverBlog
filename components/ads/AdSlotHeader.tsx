/**
 * ADVERTISEMENT SLOT - HEADER
 * 
 * This is a placeholder for header banner advertisements.
 * To use with real ads, replace this component with your ad provider's code.
 * 
 * Recommended sizes:
 * - Leaderboard: 728x90
 * - Mobile Banner: 320x50
 * - Large Banner: 970x90
 */

export default function AdSlotHeader() {
  return (
    <div className="w-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center py-4 text-center">
      <div className="text-xs text-zinc-400 dark:text-zinc-500">
        <span className="block font-medium mb-1">Advertisement Space</span>
        <span className="block">Header Banner (728x90)</span>
      </div>
    </div>
  )
}