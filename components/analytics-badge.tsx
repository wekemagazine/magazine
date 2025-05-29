export function AnalyticsBadge() {
  return (
    <div className="fixed bottom-20 left-6 bg-blue-500 text-white px-3 py-2 rounded-lg shadow-lg text-xs font-medium z-40">
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span>Speed Insights Ativo</span>
      </div>
    </div>
  )
}
