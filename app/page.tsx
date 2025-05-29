import { Layout } from "@/components/layout"
import { MessageCircle } from "lucide-react"

export default function HomePage() {
  return (
    <Layout>
      <div className="py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            TOP 20 Produtos Mais Vendidos no Mercado Livre
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Descubra os produtos que estão fazendo sucesso e aproveite as melhores ofertas com descontos de até 55%!
          </p>
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg inline-block">
            <span className="font-medium">Atualizado em: 28/05/2025</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Games */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <img
                src="https://http2.mlstatic.com/D_NQ_NP_2X_797624-MLU77183763308_072024-F.webp"
                alt="PlayStation 5"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-4">
              <div className="text-xs text-blue-600 font-semibold mb-2">GAMES</div>
              <h3 className="text-sm font-medium mb-3 line-clamp-2">
                Console Sony PlayStation 5 Digital Slim 1TB – Branco + 2 jogos
              </h3>
              <div className="flex items-center mb-3">
                <span className="text-2xl font-bold text-gray-800">R$ 3.599,00</span>
                <span className="text-sm text-gray-500 line-through ml-2">R$ 4.525,62</span>
                <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded ml-2">20% OFF</span>
              </div>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-sm">★★★★★</div>
                <span className="text-sm text-gray-600 ml-2">4.9</span>
              </div>
              <a
                href="https://mercadolivre.com/sec/1xM3gjr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-center block transition-colors"
              >
                Ver Oferta
              </a>
            </div>
          </div>

          {/* Controle PS5 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <img
                src="https://http2.mlstatic.com/D_NQ_NP_2X_852060-MLA84850736189_052025-F.webp"
                alt="Controle PS5"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-4">
              <div className="text-xs text-blue-600 font-semibold mb-2">GAMES</div>
              <h3 className="text-sm font-medium mb-3 line-clamp-2">
                Controle Playstation 5 sem fio Dualsense PS5 cor branco
              </h3>
              <div className="flex items-center mb-3">
                <span className="text-2xl font-bold text-gray-800">R$ 442,00</span>
              </div>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-sm">★★★★★</div>
                <span className="text-sm text-gray-600 ml-2">4.9</span>
              </div>
              <a
                href="https://mercadolivre.com/sec/1JAMF4t"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-center block transition-colors"
              >
                Ver Oferta
              </a>
            </div>
          </div>

          {/* SSD Kingston */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <img
                src="https://http2.mlstatic.com/D_NQ_NP_2X_942555-MLA81697379479_122024-F.webp"
                alt="SSD Kingston"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-4">
              <div className="text-xs text-blue-600 font-semibold mb-2">GAMES</div>
              <h3 className="text-sm font-medium mb-3 line-clamp-2">SSD M.2 2280 Nvme Kingston 1tb Nv3 Snv3s/1000g</h3>
              <div className="flex items-center mb-3">
                <span className="text-2xl font-bold text-gray-800">R$ 410,00</span>
              </div>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-sm">★★★★★</div>
                <span className="text-sm text-gray-600 ml-2">4.9</span>
              </div>
              <a
                href="https://mercadolivre.com/sec/1PMFVDX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-center block transition-colors"
              >
                Ver Oferta
              </a>
            </div>
          </div>

          {/* Liquidificador */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <img
                src="https://http2.mlstatic.com/D_NQ_NP_2X_666414-MLU72748565515_112023-F.webp"
                alt="Liquidificador"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-4">
              <div className="text-xs text-green-600 font-semibold mb-2">ELETRODOMÉSTICOS</div>
              <h3 className="text-sm font-medium mb-3 line-clamp-2">
                Liquidificador L-99-fb Turbo Power 2,2 L Potência De 550w
              </h3>
              <div className="flex items-center mb-3">
                <span className="text-2xl font-bold text-gray-800">R$ 122,99</span>
                <span className="text-sm text-gray-500 line-through ml-2">R$ 177,99</span>
                <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded ml-2">30% OFF</span>
              </div>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-sm">★★★★☆</div>
                <span className="text-sm text-gray-600 ml-2">4.7</span>
              </div>
              <a
                href="https://mercadolivre.com/sec/2U3iVjH"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-center block transition-colors"
              >
                Ver Oferta
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-white py-16 mt-16 rounded-lg shadow-sm">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-5">Receba Atualizações de Ofertas</h3>
            <p className="max-w-2xl mx-auto mb-8 text-gray-600">
              Cadastre-se para receber as melhores ofertas e novidades diretamente no seu e-mail.
            </p>
            <div className="max-w-lg mx-auto flex gap-0">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-r-lg transition-colors">
                Cadastrar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5521972231553?text=Olá! Vi seus produtos no site e gostaria de mais informações sobre as ofertas."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </Layout>
  )
}
