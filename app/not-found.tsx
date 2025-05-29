import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">404</h2>
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Página não encontrada</h3>
        <p className="text-gray-600 mb-6">A página que você está procurando não existe ou foi movida.</p>
        <Link
          href="/"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors inline-block"
        >
          Voltar ao Início
        </Link>
      </div>
    </div>
  )
}
