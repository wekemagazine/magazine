"use client"

import { useEffect } from "react"
import EnhancedLayout from "@/components/enhanced-layout"
import { ProductCard } from "@/components/product-card"
import { trackCategoryView } from "@/lib/analytics"
import type { Product } from "@/lib/types"

const casa: Product[] = [
  {
    title: "Água sanitária Super Candida 1L",
    category: "CASA",
    currentPrice: "11,94",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_679431-MLU73673865025_122023-F.webp",
    rating: 4.9,
    link: "https://mercadolivre.com/sec/2kUma3S",
  },
  {
    title: "Cortina 3,00x2,80 Metros Blackout Blecaute Avelã Corta Luz",
    category: "CASA",
    currentPrice: "77,70",
    originalPrice: "143,90",
    discount: 46,
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_727309-MLU73823042502_012024-F.webp",
    rating: 4.6,
    link: "https://mercadolivre.com/sec/2pCrNPX",
  },
]

export default function CasaPage() {
  useEffect(() => {
    trackCategoryView("casa")
  }, [])

  return (
    <EnhancedLayout>
      <section className="py-12 px-4 md:px-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Casa e Decoração Mais Vendidos</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {casa.map((product, index) => (
              <ProductCard key={index} product={product} rank={index + 1} />
            ))}
          </div>
        </div>
      </section>
    </EnhancedLayout>
  )
}
