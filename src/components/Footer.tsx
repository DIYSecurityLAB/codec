import React from 'react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer id="contato" className={`bg-gray-900 text-white py-12 ${className}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">CODEC 2025</h3>
                <p className="text-sm text-gray-400">Congresso de Desenvolvimento nos Esportes de Contato</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Artes Marciais: Tradição, Corpo e Mente em Harmonia
            </p>
            <p className="text-sm text-gray-500">
              Realizado por OPAM - Organização Paulista de Artes Marciais
            </p>
          </div>
          
          {/* Event Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Informações do Evento</h4>
            <div className="space-y-2 text-gray-400">
              <p>📅 20 de Setembro de 2025</p>
              <p>🕘 09h00 às 13h00</p>
              <p>📍 ETEC Itaquera II</p>
              <p>🎯 Auditório</p>
              <p>🚇 Próximo ao Metrô Itaquera</p>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-gray-400">
              <p>📧 Informações em breve</p>
              <p>📱 Redes sociais em breve</p>
              <p>🌐 Site oficial em desenvolvimento</p>
            </div>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-2">ETEC Itaquera II</h5>
              <div className="text-sm text-gray-400 space-y-1">
                <p>📞 (11) 2056-5142</p>
                <p>📞 (11) 2056-5148</p>
                <p>✉️ e285acad@cps.sp.gov.br</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Responsibility Message */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-6 text-center">
            <h4 className="text-lg font-bold mb-2">🧸 Responsabilidade Social</h4>
            <p className="text-sm opacity-90">
              Traga um brinquedo como forma de ingresso e ajude a construir um futuro mais inclusivo e solidário
            </p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© 2025 CODEC - Congresso de Desenvolvimento nos Esportes de Contato</p>
          <p className="text-sm mt-2">
            Desenvolvido com ❤️ para promover inclusão e responsabilidade social através das artes marciais
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;