"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"

export function AnalyticsStatus() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Esconder o badge após 5 segundos
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-20 left-6 z-40">
      <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-medium">Analytics Ativo</span>
        </div>
      </Badge>
    </div>
  )
}
