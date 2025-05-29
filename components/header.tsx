"use client"

import { ShoppingCart, Calendar } from "lucide-react"

export function Header() {
  // Formato simples para evitar problemas de hidratação
  const formattedDate = "28/05/2025"

  return (
    <header className="bg-yellow-400 py-5 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-5 flex justify-between items-center">
        <a href="#" className="flex items-center text-gray-800 text-2xl font-bold no-underline">
          <ShoppingCart className="mr-3 text-blue-500" size={28} />
          <span>MelhoresOfertas</span>
        </a>
        <div className="flex items-center">
          <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
            <Calendar className="mr-2" size={16} />
            <span>{formattedDate}</span>
          </div>
        </div>
      </div>
    </header>
  )
}
