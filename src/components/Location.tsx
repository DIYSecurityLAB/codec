"use client";

import React from 'react';

interface LocationProps {
  className?: string;
}

const Location: React.FC<LocationProps> = ({ className = '' }) => {
  return (
    <section 
      id="local" 
      className={`py-16 lg:py-20 bg-white ${className}`}
      aria-labelledby="location-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 lg:mb-16">
          <h2 
            id="location-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
          >
            Local do Evento
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Conheça onde acontecerá o CODEC 2025
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 lg:mb-8">
              ETEC Itaquera II
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <span className="text-2xl sm:text-3xl mr-4 mt-1" aria-hidden="true">📍</span>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg sm:text-xl text-gray-800 mb-2">Endereço</h4>
                  <address className="not-italic text-gray-600 text-sm sm:text-base leading-relaxed">
                    Avenida Miguel Ignácio Curi, s/nº<br />
                    Vila Carmosina - São Paulo/SP<br />
                    CEP: 08595-005
                  </address>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-2xl sm:text-3xl mr-4 mt-1" aria-hidden="true">🏢</span>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg sm:text-xl text-gray-800 mb-2">Local Específico</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Auditório da ETEC Itaquera II</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-2xl sm:text-3xl mr-4 mt-1" aria-hidden="true">🚇</span>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg sm:text-xl text-gray-800 mb-2">Transporte Público</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Próximo ao Metrô Itaquera</p>
                  <p className="text-gray-500 text-xs sm:text-sm">Linha Vermelha do Metrô</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-2xl sm:text-3xl mr-4 mt-1" aria-hidden="true">🅿️</span>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg sm:text-xl text-gray-800 mb-2">Estacionamento</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Disponível no local</p>
                  <p className="text-gray-500 text-xs sm:text-sm">Vagas limitadas - recomendamos transporte público</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-200">
              <h4 className="font-semibold text-lg sm:text-xl text-gray-800 mb-4 flex items-center">
                <span className="text-2xl mr-3" aria-hidden="true">📞</span>
                Contatos da ETEC
              </h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-lg mr-3" aria-hidden="true">📞</span>
                  <a 
                    href="tel:+551120565142" 
                    className="text-gray-600 hover:text-green-600 focus-visible:text-green-600 transition-colors text-sm sm:text-base focus-visible:underline"
                    aria-label="Ligar para ETEC Itaquera II"
                  >
                    (11) 2056-5142
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="text-lg mr-3" aria-hidden="true">📞</span>
                  <a 
                    href="tel:+551120565148" 
                    className="text-gray-600 hover:text-green-600 focus-visible:text-green-600 transition-colors text-sm sm:text-base focus-visible:underline"
                    aria-label="Ligar para ETEC Itaquera II (linha alternativa)"
                  >
                    (11) 2056-5148
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="text-lg mr-3" aria-hidden="true">✉️</span>
                  <a 
                    href="mailto:e285acad@cps.sp.gov.br" 
                    className="text-gray-600 hover:text-green-600 focus-visible:text-green-600 transition-colors text-sm sm:text-base focus-visible:underline break-all"
                    aria-label="Enviar email para ETEC Itaquera II"
                  >
                    e285acad@cps.sp.gov.br
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-300">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.6693826419787!2d-46.46950802467037!3d-23.544390878811562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce66dd33aa04c9%3A0xa03c85089d8c95dd!2sEtec%20Itaquera%20II!5e0!3m2!1spt-BR!2sbr!4v1760302512273!5m2!1spt-BR!2sbr"
                width="100%" 
                height="450" 
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da ETEC Itaquera II"
                aria-label="Mapa mostrando a localização da ETEC Itaquera II"
                className="w-full h-96 lg:h-[500px]"
              />
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 sm:p-8 lg:p-10 border border-blue-100">
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6 lg:mb-8 text-center">
            Como Chegar
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
              <div className="text-4xl sm:text-5xl mb-4" aria-hidden="true">🚇</div>
              <h4 className="font-semibold text-blue-800 text-lg mb-2">Metrô</h4>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Estação Itaquera<br />
                (Linha Vermelha)
              </p>
              <p className="text-xs text-gray-500 mt-2">Mais recomendado</p>
            </div>
            
            <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
              <div className="text-4xl sm:text-5xl mb-4" aria-hidden="true">🚌</div>
              <h4 className="font-semibold text-blue-800 text-lg mb-2">Ônibus</h4>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Diversas linhas<br />
                atendem a região
              </p>
              <p className="text-xs text-gray-500 mt-2">Consulte SPTrans</p>
            </div>
            
            <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-blue-100 hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
              <div className="text-4xl sm:text-5xl mb-4" aria-hidden="true">🚗</div>
              <h4 className="font-semibold text-blue-800 text-lg mb-2">Carro</h4>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Estacionamento<br />
                disponível no local
              </p>
              <p className="text-xs text-gray-500 mt-2">Vagas limitadas</p>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-blue-100 rounded-lg border border-blue-200">
            <div className="flex items-center justify-center mb-2">
              <span className="text-xl mr-2" aria-hidden="true">💡</span>
              <h5 className="font-semibold text-blue-800">Dica de Transporte</h5>
            </div>
            <p className="text-sm sm:text-base text-blue-700 text-center leading-relaxed">
              Recomendamos o uso do transporte público. A estação Itaquera fica a poucos minutos de caminhada da ETEC.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;