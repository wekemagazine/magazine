"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProductsSection } from "@/components/products-section"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AnalyticsStatus } from "@/components/analytics-status"
import { trackPageView } from "@/lib/analytics"

export default function HomePage() {
  useEffect(() => {
    // Rastrear visualização da página inicial
    trackPageView("home")
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <ProductsSection />
      <Newsletter />
      <Footer />
      <WhatsAppButton />
      <AnalyticsStatus />
    </div>
  )
}
