export interface Product {
  title: string
  category: string
  currentPrice: string
  originalPrice?: string
  discount?: number
  image: string
  rating: number
  link: string
}

export interface ProductCategory {
  title: string
  products: Product[]
}
