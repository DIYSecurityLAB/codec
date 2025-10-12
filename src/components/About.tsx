import React from 'react';

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className = '' }) => {
  return (
    <section 
      id="sobre" 
      className={`py-16 lg:py-20 bg-gray-50 ${className}`}
      aria-labelledby="about-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 lg:mb-16">
          <h2 
            id="about-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
          >
            Sobre o CODEC
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Desenvolvimento e aprendizagem dos esportes de contato
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              O Evento
            </h3>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="mb-6 leading-relaxed text-base sm:text-lg">
                O <strong>CODEC – Congresso de Desenvolvimento nos Esportes de Contato</strong> será um evento de aperfeiçoamento 
                e atualização acadêmica, propondo diversos momentos, reflexões e dinâmicas de ensino através da 
                práxis de profissionais da área educacional.
              </p>
              <p className="mb-6 leading-relaxed text-base sm:text-lg">
                Juntos poderemos entender melhor sobre o processo da aprendizagem dos esportes de combate, 
                promovendo discussões enriquecedoras sobre métodos de ensino e práticas inovadoras.
              </p>
            </div>
            
            <div className="mt-8 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
              <p className="text-green-800 font-medium text-sm sm:text-base">
                💡 <strong>Tema 2025:</strong> Desenvolvimento e aprendizagem dos esportes de contato
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">
                Informações do Evento
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="text-2xl mr-4 mt-1" aria-hidden="true">📅</span>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 text-base sm:text-lg">Data</p>
                    <p className="text-gray-600 text-sm sm:text-base">20 de Setembro de 2025 (Sábado)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-2xl mr-4 mt-1" aria-hidden="true">🕘</span>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 text-base sm:text-lg">Horário</p>
                    <p className="text-gray-600 text-sm sm:text-base">09h00 às 13h00 (4 horas)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-2xl mr-4 mt-1" aria-hidden="true">📍</span>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 text-base sm:text-lg">Local</p>
                    <p className="text-gray-600 text-sm sm:text-base">ETEC Itaquera II - Auditório</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-2xl mr-4 mt-1" aria-hidden="true">🎯</span>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 text-base sm:text-lg">Público-Alvo</p>
                    <p className="text-gray-600 text-sm sm:text-base">Atletas, educadores e amantes das artes marciais</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-2xl mr-4 mt-1" aria-hidden="true">🎓</span>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 text-base sm:text-lg">Certificação</p>
                    <p className="text-gray-600 text-sm sm:text-base">Certificado digital de 4 horas</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-2xl mr-4 mt-1" aria-hidden="true">🧸</span>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 text-base sm:text-lg">Ingresso</p>
                    <p className="text-gray-600 text-sm sm:text-base">1 brinquedo para doação</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;