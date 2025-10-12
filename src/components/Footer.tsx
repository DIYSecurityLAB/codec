import React from 'react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer 
      id="contato" 
      className={`bg-gray-900 text-white py-12 lg:py-16 ${className}`}
      role="contentinfo"
      aria-labelledby="footer-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div 
                className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div>
                <h3 
                  id="footer-title"
                  className="text-xl font-bold text-gray-100"
                >
                  CODEC 2025
                </h3>
                <p className="text-sm text-gray-400">Congresso de Desenvolvimento nos Esportes de Contato</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
              Artes Marciais: Tradição, Corpo e Mente em Harmonia
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Realizado por <strong>OPAM</strong> - Organização Paulista de Artes Marciais
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-100">
              Informações do Evento
            </h4>
            <div className="space-y-3 text-gray-300 text-sm sm:text-base">
              <div className="flex items-center">
                <span className="text-lg mr-2" aria-hidden="true">📅</span>
                <span>20 de Setembro de 2025</span>
              </div>
              <div className="flex items-center">
                <span className="text-lg mr-2" aria-hidden="true">🕘</span>
                <span>09h00 às 13h00</span>
              </div>
              <div className="flex items-center">
                <span className="text-lg mr-2" aria-hidden="true">📍</span>
                <span>ETEC Itaquera II</span>
              </div>
              <div className="flex items-center">
                <span className="text-lg mr-2" aria-hidden="true">🎯</span>
                <span>Auditório</span>
              </div>
              <div className="flex items-center">
                <span className="text-lg mr-2" aria-hidden="true">🚇</span>
                <span>Próximo ao Metrô Itaquera</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-100">
              Contato
            </h4>
            <div className="space-y-3 text-gray-300 text-sm sm:text-base mb-6">
              <div className="flex items-center">
                <span className="text-lg mr-2" aria-hidden="true">📧</span>
                <span>Informações em breve</span>
              </div>
              <div className="flex items-center">
                <span className="text-lg mr-2" aria-hidden="true">📱</span>
                <span>Redes sociais em breve</span>
              </div>
              <div className="flex items-center">
                <span className="text-lg mr-2" aria-hidden="true">🌐</span>
                <span>Site oficial em desenvolvimento</span>
              </div>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
              <h5 className="font-semibold mb-3 text-gray-100 text-sm sm:text-base">
                ETEC Itaquera II
              </h5>
              <div className="text-sm text-gray-300 space-y-2">
                <div className="flex items-center">
                  <span className="mr-2" aria-hidden="true">📞</span>
                  <a 
                    href="tel:+551120565142" 
                    className="hover:text-green-400 focus-visible:text-green-400 transition-colors focus-visible:underline"
                    aria-label="Ligar para ETEC Itaquera II"
                  >
                    (11) 2056-5142
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="mr-2" aria-hidden="true">📞</span>
                  <a 
                    href="tel:+551120565148" 
                    className="hover:text-green-400 focus-visible:text-green-400 transition-colors focus-visible:underline"
                    aria-label="Ligar para ETEC Itaquera II (linha alternativa)"
                  >
                    (11) 2056-5148
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="mr-2" aria-hidden="true">✉️</span>
                  <a 
                    href="mailto:e285acad@cps.sp.gov.br" 
                    className="hover:text-green-400 focus-visible:text-green-400 transition-colors focus-visible:underline break-all"
                    aria-label="Enviar email para ETEC Itaquera II"
                  >
                    e285acad@cps.sp.gov.br
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6 sm:p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20" aria-hidden="true"></div>
            <div className="relative z-10">
              <h4 className="text-lg sm:text-xl font-bold mb-3 flex items-center justify-center text-yellow-100">
                <span className="text-2xl mr-2" aria-hidden="true">🧸</span>
                Responsabilidade Social
              </h4>
              <p className="text-sm sm:text-base text-gray-100 leading-relaxed max-w-3xl mx-auto">
                Traga um brinquedo como forma de ingresso e ajude a construir um futuro mais inclusivo e solidário
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm sm:text-base mb-2">
            © 2025 CODEC - Congresso de Desenvolvimento nos Esportes de Contato
          </p>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
            <span aria-hidden="true">❤️</span> Desenvolvido com amor para promover inclusão e responsabilidade social através das artes marciais
          </p>
          <div className="mt-4 text-xs text-gray-600">
            <p>
              Problemas de acessibilidade? Entre em contato conosco para melhorar sua experiência.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;