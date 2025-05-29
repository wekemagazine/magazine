"use client"

import { useEffect } from "react"
import EnhancedLayout from "@/components/enhanced-layout"
import { ProductCard } from "@/components/product-card"
import { trackCategoryView } from "@/lib/analytics"
import type { Product } from "@/lib/types"

const moda: Product[] = [
  {
    title: "Kit 10 Cuecas Masculinas Boxer Microfibra Polo Wear Sortido",
    category: "MODA",
    currentPrice: "109,99",
    originalPrice: "199,99",
    discount: 45,
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_799186-MLB72510752627_102023-F.webp",
    rating: 4.5,
    link: "https://mercadolivre.com/sec/2UxVJ1m",
  },
  {
    title: "Camiseta Basica Tech Insider Masculina",
    category: "MODA",
    currentPrice: "127,30",
    originalPrice: "175,00",
    discount: 27,
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_966467-MLB83677651286_042025-F.webp",
    rating: 4.7,
    link: "https://mercadolivre.com/sec/2fLTyLJ",
  },
  {
    title: "Camisetas Raglan Proteção Uv Térmica Camisas Dry Fit Voker",
    category: "MODA",
    currentPrice: "36,86",
    originalPrice: "52,90",
    discount: 30,
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_681521-MLB84736641796_052025-F.webp",
    rating: 4.6,
    link: "https://mercadolivre.com/sec/2YVNjyZ",
  },
]

export default function ModaPage() {
  useEffect(() => {
    trackCategoryView("moda")
  }, [])

  return (
    <EnhancedLayout>
      <section className="py-12 px-4 md:px-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Moda Mais Vendidos</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {moda.map((product, index) => (
              <ProductCard key={index} product={product} rank={index + 1} />
            ))}
          </div>
        </div>
      </section>
    </EnhancedLayout>
  )
}
