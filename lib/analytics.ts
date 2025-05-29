import { track } from "@vercel/analytics"

// Função para rastrear cliques em produtos
export const trackProductClick = (productName: string, category: string, price: string) => {
  track("product_click", {
    product_name: productName,
    category: category,
    price: price,
  })
}

// Função para rastrear cliques no WhatsApp
export const trackWhatsAppClick = () => {
  track("whatsapp_click", {
    contact_method: "whatsapp",
  })
}

// Função para rastrear cadastro na newsletter
export const trackNewsletterSignup = (email: string) => {
  track("newsletter_signup", {
    email_domain: email.split("@")[1] || "unknown",
  })
}

// Função para rastrear visualização de categoria
export const trackCategoryView = (category: string) => {
  track("category_view", {
    category: category,
  })
}

// Função para rastrear tempo na página
export const trackPageView = (page: string) => {
  track("page_view", {
    page: page,
  })
}
