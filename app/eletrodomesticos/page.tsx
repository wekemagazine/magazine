"use client"

import { useEffect } from "react"
import EnhancedLayout from "@/components/enhanced-layout"
import { ProductCard } from "@/components/product-card"
import { trackCategoryView } from "@/lib/analytics"
import type { Product } from "@/lib/types"

const eletrodomesticos: Product[] = [
  {
    title: "Liquidificador L-99-fb Turbo Power 2,2 L Potência De 550w",
    category: "ELETRODOMÉSTICOS",
    currentPrice: "122,99",
    originalPrice: "177,99",
    discount: 30,
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_666414-MLU72748565515_112023-F.webp",
    rating: 4.7,
    link: "https://mercadolivre.com/sec/2U3iVjH",
  },
  {
    title: "Liquidificador PH900 Com 12 Velocidades 1200W Cor Preto",
    category: "ELETRODOMÉSTICOS",
    currentPrice: "119,00",
    originalPrice: "265,00",
    discount: 55,
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_601586-MLA78076031678_082024-F.webp",
    rating: 4.7,
    link: "https://mercadolivre.com/sec/1rzQ7bM",
  },
  {
    title: "Fritadeira sem óleo air fryer 4L Mondial preto 1500W AFN-40-BFT",
    category: "ELETRODOMÉSTICOS",
    currentPrice: "279,00",
    originalPrice: "479,90",
    discount: 41,
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_808340-MLU76375530160_052024-F.webp",
    rating: 4.8,
    link: "https://mercadolivre.com/sec/1sK1R5y",
  },
]

export default function EletrodomesticosPage() {
  useEffect(() => {
    trackCategoryView("eletrodomesticos")
  }, [])

  return (
    <EnhancedLayout>
      <section className="py-12 px-4 md:px-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Eletrodomésticos Mais Vendidos</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {eletrodomesticos.map((product, index) => (
              <ProductCard key={index} product={product} rank={index + 1} />
            ))}
          </div>
        </div>
      </section>
    </EnhancedLayout>
  )
}
