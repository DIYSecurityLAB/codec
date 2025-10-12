import React from 'react';

interface LocationProps {
  className?: string;
}

const Location: React.FC<LocationProps> = ({ className = '' }) => {
  return (
    <section id="local" className={`py-16 bg-white ${className}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Local do Evento
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça onde acontecerá o CODEC 2025
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">ETEC Itaquera II</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <span className="text-2xl mr-4">📍</span>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">Endereço</h4>
                  <p className="text-gray-600">Avenida Miguel Ignácio Curi, s/nº</p>
                  <p className="text-gray-600">Vila Carmosina - São Paulo/SP</p>
                  <p className="text-gray-600">CEP: 08595-005</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-2xl mr-4">🏢</span>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">Local Específico</h4>
                  <p className="text-gray-600">Auditório da ETEC Itaquera II</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-2xl mr-4">🚇</span>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">Transporte</h4>
                  <p className="text-gray-600">Próximo ao Metrô Itaquera</p>
                  <p className="text-gray-600 text-sm">Linha Vermelha do Metrô</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-lg text-gray-800 mb-4">Contatos da ETEC</h4>
              <div className="space-y-2">
                <p className="text-gray-600">
                  📞 (11) 2056-5142
                </p>
                <p className="text-gray-600">
                  📞 (11) 2056-5148
                </p>
                <p className="text-gray-600">
                  ✉️ e285acad@cps.sp.gov.br
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-lg p-8 h-96 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-lg font-semibold">Mapa do Local</p>
              <p className="text-sm mt-2">
                Integração com Google Maps será<br />
                implementada em breve
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">
            Como Chegar
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🚇</div>
              <h4 className="font-semibold text-blue-800">Metrô</h4>
              <p className="text-gray-700 text-sm">
                Estação Itaquera (Linha Vermelha)
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🚌</div>
              <h4 className="font-semibold text-blue-800">Ônibus</h4>
              <p className="text-gray-700 text-sm">
                Diversas linhas atendem a região
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🚗</div>
              <h4 className="font-semibold text-blue-800">Carro</h4>
              <p className="text-gray-700 text-sm">
                Estacionamento disponível no local
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;