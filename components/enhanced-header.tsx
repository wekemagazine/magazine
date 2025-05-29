"use client"
import Link from "next/link"
import { ShoppingCart, Calendar, Menu, X } from "lucide-react"
import { useState } from "react"

const EnhancedHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const categories = [
    { name: "Games", path: "/games" },
    { name: "Eletrodomésticos", path: "/eletrodomesticos" },
    { name: "Ferramentas", path: "/ferramentas" },
    { name: "Celulares", path: "/celulares" },
    { name: "Informática", path: "/informatica" },
    { name: "Moda", path: "/moda" },
    { name: "Casa", path: "/casa" },
    { name: "Beleza", path: "/beleza" },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-yellow-400 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3">
        {/* Top row with logo and date */}
        <div className="flex items-center justify-between mb-2">
          <Link href="/" className="flex items-center text-gray-800 text-xl font-bold">
            <ShoppingCart className="mr-2 text-blue-500" size={24} />
            MelhoresOfertas
          </Link>

          <div className="hidden md:flex items-center">
            <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
              <Calendar className="mr-2" size={16} />
              <span>28/05/2025</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button onClick={toggleMenu} className="md:hidden text-gray-800 hover:text-blue-600" aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation menu */}
        <div className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col md:flex-row md:flex-wrap gap-2 md:gap-4">
            <li>
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-yellow-300 rounded font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
            </li>
            {categories.map((category) => (
              <li key={category.path}>
                <Link
                  href={category.path}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-yellow-300 rounded font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default EnhancedHeader
