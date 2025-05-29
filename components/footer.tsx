export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <a href="tel:+5521972231553" className="text-yellow-400 hover:text-yellow-300 mx-2">
            Contato: +55 21 97223-1553
          </a>
          <span className="mx-2 text-gray-400">|</span>
          <a href="#" className="text-gray-300 hover:text-white mx-2">
            Política de Privacidade
          </a>
          <span className="mx-2 text-gray-400">|</span>
          <a href="#" className="text-gray-300 hover:text-white mx-2">
            Termos de Uso
          </a>
        </div>
        <p className="text-sm text-gray-400">© 2025 MelhoresOfertas. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
