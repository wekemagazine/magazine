import { ProductGrid } from "./product-grid"
import { productsData } from "@/lib/products-data"

export function ProductsSection() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-5">
        {productsData.map((category, index) => (
          <div key={index} className="mb-16">
            <div className="text-center mb-10 relative">
              <h2 className="text-3xl font-bold inline-block bg-gray-50 px-5 relative z-10">{category.title}</h2>
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 -z-10"></div>
            </div>
            <ProductGrid products={category.products} />
          </div>
        ))}
      </div>
    </section>
  )
}
