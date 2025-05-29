import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TOP 20 Produtos Mais Vendidos no Mercado Livre | MelhoresOfertas",
  description:
    "Descubra os produtos que estão fazendo sucesso e aproveite as melhores ofertas com descontos de até 55%! Games, eletrodomésticos, ferramentas e muito mais.",
  keywords: "ofertas Mercado Livre, produtos mais vendidos, descontos, melhores ofertas, compras online",
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
        {children}
        <Toaster />
      </body>
    </html>
  )
}
