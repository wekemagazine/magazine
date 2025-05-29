import { Star, StarHalf, Truck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
  rank: number
}

export function ProductCard({ product, rank }: ProductCardProps) {
  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400" />)
    }

    return stars
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative">
      <Badge className="absolute top-4 left-0 bg-blue-500 text-white px-3 py-1 text-xs font-bold rounded-r z-10">
        #{rank} MAIS VENDIDO
      </Badge>

      <div className="h-48 flex items-center justify-center p-5 bg-white">
        <img
          src={product.image || "/placeholder.svg?height=200&width=200"}
          alt={product.title}
          className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      <CardContent className="p-5">
        <div className="text-xs text-gray-600 uppercase tracking-wide mb-2">{product.category}</div>

        <h3 className="text-base font-medium mb-4 line-clamp-2 h-12 overflow-hidden">{product.title}</h3>

        <div className="flex items-baseline mb-4">
          <span className="text-2xl font-bold text-gray-800">R$ {product.currentPrice}</span>
          {product.originalPrice && (
            <>
              <span className="text-sm text-gray-500 line-through ml-3">R$ {product.originalPrice}</span>
              <Badge variant="destructive" className="ml-3 text-xs">
                {product.discount}% OFF
              </Badge>
            </>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
            <Truck className="w-3 h-3 mr-1" />
            Frete grátis
          </Badge>
        </div>

        <div className="flex items-center mb-5">
          <div className="flex mr-2">{renderStars(product.rating)}</div>
          <span className="text-sm text-gray-600">{product.rating}</span>
        </div>

        <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white" asChild>
          <a href={product.link} target="_blank" rel="noopener noreferrer">
            Ver Oferta
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}
