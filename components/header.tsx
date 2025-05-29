import Link from "next/link"
import { ShoppingCart } from "lucide-react"

export function Header() {
  const categories = [
    { name: "Games", path: "/games" },
    { name: "Eletrodomésticos", path: "/eletrodomesticos" },
    { name: "Ferramentas", path: "/ferramentas" },
    { name: "Celulares", path: "/celulares" },
    { name: "Informática", path: "/informatica" },
    { name: "Moda", path: "/moda" },
  ]

  return (
    <header className="bg-yellow-400 shadow-md">
      <nav className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-gray-800 mr-6 flex items-center">
            <ShoppingCart className="mr-2 text-blue-500" size={24} />
            MelhoresOfertas
          </Link>
        </div>
        <ul className="flex flex-wrap space-x-4">
          <li>
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Início
            </Link>
          </li>
          {categories.map((category) => (
            <li key={category.path}>
              <Link href={category.path} className="text-gray-700 hover:text-blue-600 font-medium">
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
