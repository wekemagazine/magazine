"use client"

import { useEffect } from "react"
import EnhancedLayout from "@/components/enhanced-layout"
import { ProductCard } from "@/components/product-card"
import { trackCategoryView } from "@/lib/analytics"
import type { Product } from "@/lib/types"

const games: Product[] = [
  {
    title: "Console Sony PlayStation 5 Digital Slim 1TB – Branco + 2 jogos",
    category: "GAMES",
    currentPrice: "3599.00",
    originalPrice: "4525.62",
    discount: 20,
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_797624-MLU77183763308_072024-F.webp",
    rating: 4.9,
    link: "https://mercadolivre.com/sec/1xM3gjr",
  },
  {
    title: "Controle Playstation 5 sem fio Dualsense PS5 cor branco",
    category: "GAMES",
    currentPrice: "442.00",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_852060-MLA84850736189_052025-F.webp",
    rating: 4.9,
    link: "https://mercadolivre.com/sec/1JAMF4t",
  },
  {
    title: "Ssd M.2 2280 Nvme Kingston 1tb Nv3 Snv3s/1000g Pci-e Gen 4.0",
    category: "GAMES",
    currentPrice: "410.00",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_942555-MLA81697379479_122024-F.webp",
    rating: 4.9,
    link: "https://mercadolivre.com/sec/1PMFVDX",
  },
]

export default function GamesPage() {
  useEffect(() => {
    trackCategoryView("games")
  }, [])

  return (
    <EnhancedLayout>
      <section className="py-12 px-4 md:px-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Games Mais Vendidos</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {games.map((product, index) => (
              <ProductCard key={index} product={product} rank={index + 1} />
            ))}
          </div>
        </div>
      </section>
    </EnhancedLayout>
  )
}
