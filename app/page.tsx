import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProductsSection } from "@/components/products-section"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <ProductsSection />
      <Newsletter />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
