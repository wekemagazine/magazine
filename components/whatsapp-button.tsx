import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const phoneNumber = "5521972231553" // Número sem símbolos
  const message = "Olá! Vi seus produtos no site e gostaria de mais informações sobre as ofertas."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale conosco no WhatsApp
      </span>
    </a>
  )
}
