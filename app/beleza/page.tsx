"use client"

import { useEffect } from "react"
import EnhancedLayout from "@/components/enhanced-layout"
import { ProductCard } from "@/components/product-card"
import { trackCategoryView } from "@/lib/analytics"
import type { Product } from "@/lib/types"

const beleza: Product[] = [
  {
    title: "Secador de Cabelo Profissional 2200W Taiff",
    category: "BELEZA",
    currentPrice: "623,91",
    originalPrice: "899,00",
    discount: 30,
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_873488-MLU72846616026_112023-F.webp",
    rating: 4.7,
    link: "https://mercadolivre.com/sec/1Mx5G9P",
  },
  {
    title: "Perfume Importado La Vie Est Belle Lancôme 100ml",
    category: "BELEZA",
    currentPrice: "638,10",
    originalPrice: "979,00",
    discount: 34,
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_859847-MLA83336468739_032025-F.webp",
    rating: 4.9,
    link: "https://mercadolivre.com/sec/2SyynNC",
  },
]

export default function BelezaPage() {
  useEffect(() => {
    trackCategoryView("beleza")
  }, [])

  return (
    <EnhancedLayout>
      <section className="py-12 px-4 md:px-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Beleza e Cuidados Pessoais Mais Vendidos
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {beleza.map((product, index) => (
              <ProductCard key={index} product={product} rank={index + 1} />
            ))}
          </div>
        </div>
      </section>
    </EnhancedLayout>
  )
}
