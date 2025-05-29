"use client"

import { useEffect } from "react"
import EnhancedLayout from "@/components/enhanced-layout"
import { ProductCard } from "@/components/product-card"
import { trackCategoryView } from "@/lib/analytics"
import type { Product } from "@/lib/types"

const informatica: Product[] = [
  {
    title: "Papel Fotográfico Adesivo A4 Glossy 130g 50 Folhas Masterprint",
    category: "INFORMÁTICA",
    currentPrice: "9,90",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_959401-MLA84179623830_052025-F.webp",
    rating: 4.9,
    link: "https://mercadolivre.com/sec/1inqZd8",
  },
  {
    title: "Fone De Ouvido Headphone Dapon H02d Bluetooth 5.1 Microfone",
    category: "INFORMÁTICA",
    currentPrice: "99,98",
    originalPrice: "144,90",
    discount: 31,
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_938873-MLA80623081909_112024-F.webp",
    rating: 4.8,
    link: "https://mercadolivre.com/sec/1jEkcfw",
  },
]

export default function InformaticaPage() {
  useEffect(() => {
    trackCategoryView("informatica")
  }, [])

  return (
    <EnhancedLayout>
      <section className="py-12 px-4 md:px-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Informática Mais Vendidos</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {informatica.map((product, index) => (
              <ProductCard key={index} product={product} rank={index + 1} />
            ))}
          </div>
        </div>
      </section>
    </EnhancedLayout>
  )
}
