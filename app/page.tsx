"use client"

import { useEffect } from "react"
import EnhancedLayout from "@/components/enhanced-layout"
import { Hero } from "@/components/hero"
import { ProductsSection } from "@/components/products-section"
import { Newsletter } from "@/components/newsletter"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AnalyticsStatus } from "@/components/analytics-status"
import { trackPageView } from "@/lib/analytics"

export default function HomePage() {
  useEffect(() => {
    // Rastrear visualização da página inicial
    trackPageView("home")
  }, [])

  return (
    <EnhancedLayout>
      <Hero />
      <ProductsSection />
      <Newsletter />
      <WhatsAppButton />
      <AnalyticsStatus />
    </EnhancedLayout>
  )
}
