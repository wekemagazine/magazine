export function AnalyticsInfo() {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
      <h3 className="text-lg font-semibold text-blue-800 mb-2">📊 Analytics Configurados</h3>
      <div className="text-sm text-blue-700 space-y-2">
        <p>
          <span className="text-green-600">✅</span> <strong>Speed Insights:</strong> Monitoramento de performance em
          tempo real
        </p>
        <p>
          <span className="text-blue-600">📈</span> <strong>Core Web Vitals:</strong> LCP, FID, CLS e outras métricas
        </p>
        <p>
          <span className="text-purple-600">🌍</span> <strong>Global Monitoring:</strong> Performance por região
        </p>
        <p>
          <span className="text-orange-600">🚀</span> <strong>Otimização:</strong> Sugestões automáticas de melhoria
        </p>
      </div>
      <div className="mt-3 text-xs text-blue-600">
        <strong>Comando para instalação local:</strong>{" "}
        <code className="bg-blue-100 px-2 py-1 rounded">npm i @vercel/speed-insights</code>
      </div>
    </div>
  )
}
