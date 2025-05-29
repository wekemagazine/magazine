import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TOP 20 Produtos Mais Vendidos no Mercado Livre | MelhoresOfertas",
  description:
    "Descubra os produtos que estão fazendo sucesso e aproveite as melhores ofertas com descontos de até 55%!",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Suspense>{children}</Suspense>
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
