"use client"

import { useEffect } from "react"
import EnhancedLayout from "@/components/enhanced-layout"
import { ProductCard } from "@/components/product-card"
import { trackCategoryView } from "@/lib/analytics"
import type { Product } from "@/lib/types"

const ferramentas: Product[] = [
  {
    title: "Parafusadeira Furadeira De Impacto Profissional 21v Modelo TB-21PX",
    category: "FERRAMENTAS",
    currentPrice: "246,05",
    originalPrice: "413,05",
    discount: 40,
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_690892-MLU79387089509_092024-F.webp",
    rating: 4.7,
    link: "https://mercadolivre.com/sec/2ebKh4J",
  },
  {
    title: "Mini Compressor Digital Rezzet Bomba De Encher Pneus Portátil",
    category: "FERRAMENTAS",
    currentPrice: "76,00",
    originalPrice: "91,05",
    discount: 17,
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_943347-MLA79599484022_102024-F.webp",
    rating: 4.7,
    link: "https://mercadolivre.com/sec/1XgL5zi",
  },
  {
    title: "Lavadora De Alta Pressão Kärcher Compacta 1500psi 1400w",
    category: "FERRAMENTAS",
    currentPrice: "349,90",
    originalPrice: "445,00",
    discount: 21,
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_777504-MLU72700073101_112023-F.webp",
    rating: 4.7,
    link: "https://mercadolivre.com/sec/11YMw4T",
  },
]

export default function FerramentasPage() {
  useEffect(() => {
    trackCategoryView("ferramentas")
  }, [])

  return (
    <EnhancedLayout>
      <section className="py-12 px-4 md:px-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Ferramentas Mais Vendidas</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {ferramentas.map((product, index) => (
              <ProductCard key={index} product={product} rank={index + 1} />
            ))}
          </div>
        </div>
      </section>
    </EnhancedLayout>
  )
}
