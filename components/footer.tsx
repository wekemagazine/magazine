export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 text-center">
      <div className="container mx-auto px-5">
        <div className="max-w-4xl mx-auto">
          <p className="mb-5 text-sm opacity-80">
            Este site recebe comissão por compras através dos links acima. Os preços e disponibilidade dos produtos
            estão sujeitos a alterações.
          </p>

          <div className="mb-5">
            <a href="#" className="text-white mx-3 opacity-80 hover:opacity-100 transition-opacity">
              Política de Privacidade
            </a>
            <a href="#" className="text-white mx-3 opacity-80 hover:opacity-100 transition-opacity">
              Termos de Uso
            </a>
            <a href="tel:+5521972231553" className="text-white mx-3 opacity-80 hover:opacity-100 transition-opacity">
              Contato
            </a>
          </div>
          <p className="text-sm opacity-60">© 2025 MelhoresOfertas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
