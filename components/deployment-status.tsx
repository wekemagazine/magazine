"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, Clock, ExternalLink } from "lucide-react"

interface DeploymentInfo {
  url: string
  status: "success" | "building" | "error"
  timestamp: string
  analytics: boolean
  speedInsights: boolean
  categories: string[]
}

export function DeploymentStatus() {
  const [deploymentInfo, setDeploymentInfo] = useState<DeploymentInfo>({
    url: "",
    status: "building",
    timestamp: new Date().toISOString(),
    analytics: true,
    speedInsights: true,
    categories: ["games", "eletrodomesticos", "ferramentas", "celulares", "informatica", "moda", "casa", "beleza"],
  })

  useEffect(() => {
    // Simular verificação de deployment
    const checkDeployment = () => {
      setTimeout(() => {
        setDeploymentInfo((prev) => ({
          ...prev,
          status: "success",
          url: window.location.origin,
        }))
      }, 2000)
    }

    checkDeployment()
  }, [])

  const StatusIcon = ({ status }: { status: string }) => {
    switch (status) {
      case "success":
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case "building":
        return <Clock className="w-5 h-5 text-yellow-500 animate-spin" />
      case "error":
        return <XCircle className="w-5 h-5 text-red-500" />
      default:
        return <Clock className="w-5 h-5 text-gray-500" />
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Status do Deployment</span>
          <StatusIcon status={deploymentInfo.status} />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-gray-600">Status</p>
            <Badge variant={deploymentInfo.status === "success" ? "default" : "secondary"}>
              {deploymentInfo.status === "success" ? "Ativo" : "Construindo..."}
            </Badge>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Timestamp</p>
            <p className="text-sm text-gray-800">{new Date(deploymentInfo.timestamp).toLocaleString("pt-BR")}</p>
          </div>
        </div>

        {deploymentInfo.url && (
          <div>
            <p className="text-sm font-medium text-gray-600 mb-2">URL de Produção</p>
            <a
              href={deploymentInfo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
            >
              {deploymentInfo.url}
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        )}

        <div>
          <p className="text-sm font-medium text-gray-600 mb-2">Funcionalidades Ativas</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-green-700 border-green-200">
              ✅ Analytics
            </Badge>
            <Badge variant="outline" className="text-green-700 border-green-200">
              ⚡ Speed Insights
            </Badge>
            <Badge variant="outline" className="text-green-700 border-green-200">
              📱 Responsivo
            </Badge>
            <Badge variant="outline" className="text-green-700 border-green-200">
              🔗 WhatsApp
            </Badge>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-600 mb-2">Páginas de Categoria</p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {deploymentInfo.categories.map((category) => (
              <div key={category} className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span className="capitalize">{category}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
