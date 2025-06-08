import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"
import { Suspense } from "react"
import { GoogleTagManager } from '@next/third-parties/google';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleTagManager gtmId="GTM-KM6P7TJN" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TOP 20 Produtos Mais Vendidos no Mercado Livre | MelhoresOfertas",
  description:
    "Descubra os produtos que estão fazendo sucesso e aproveite as melhores ofertas com descontos de até 55%! Games, eletrodomésticos, ferramentas e muito mais.",
  keywords: "ofertas Mercado Livre, produtos mais vendidos, descontos, melhores ofertas, compras online",
  authors: [{ name: "MelhoresOfertas" }],
  openGraph: {
    title: "TOP 20 Produtos Mais Vendidos no Mercado Livre",
    description:
      "Descubra os produtos que estão fazendo sucesso e aproveite as melhores ofertas com descontos de até 55%!",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
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
