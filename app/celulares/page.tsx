"use client"

import { useEffect } from "react"
import EnhancedLayout from "@/components/enhanced-layout"
import { ProductCard } from "@/components/product-card"
import { trackCategoryView } from "@/lib/analytics"
import type { Product } from "@/lib/types"

const celulares: Product[] = [
  {
    title: "Smartphone Samsung Galaxy A06 4G 128GB 4GB RAM Dual Chip",
    category: "CELULARES",
    currentPrice: "699,00",
    originalPrice: "899,00",
    discount: 22,
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_798448-MLU78740857142_092024-F.webp",
    rating: 4.7,
    link: "https://mercadolivre.com/sec/2QpzMwM",
  },
  {
    title: "Smartphone Motorola Moto g24 - 128GB 8GB (4GB RAM+4GB Ram Boost)",
    category: "CELULARES",
    currentPrice: "668,10",
    originalPrice: "899,00",
    discount: 25,
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_919798-MLU74622536256_022024-F.webp",
    rating: 4.8,
    link: "https://mercadolivre.com/sec/2Pwjjja",
  },
]

export default function CelularesPage() {
  useEffect(() => {
    trackCategoryView("celulares")
  }, [])

  return (
    <EnhancedLayout>
      <section className="py-12 px-4 md:px-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Celulares e Telefones Mais Vendidos</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {celulares.map((product, index) => (
              <ProductCard key={index} product={product} rank={index + 1} />
            ))}
          </div>
        </div>
      </section>
    </EnhancedLayout>
  )
}
