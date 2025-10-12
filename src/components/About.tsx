import React from 'react';

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className = '' }) => {
  return (
    <section id="sobre" className={`py-16 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Sobre o CODEC
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desenvolvimento e aprendizagem dos esportes de contato
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">O Evento</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              O CODEC – Congresso de Desenvolvimento nos Esportes de Contato será um evento de aperfeiçoamento 
              e atualização acadêmica, propondo diversos momentos, reflexões e dinâmicas de ensino através da 
              práxis de profissionais da área educacional.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Juntos poderemos entender melhor sobre o processo da aprendizagem dos esportes de combate, 
              promovendo discussões enriquecedoras sobre métodos de ensino e práticas inovadoras.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Informações do Evento</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-2xl mr-4">📅</span>
                <div>
                  <p className="font-semibold">Data</p>
                  <p className="text-gray-600">20 de Setembro de 2025 (Sábado)</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">🕘</span>
                <div>
                  <p className="font-semibold">Horário</p>
                  <p className="text-gray-600">09h00 às 13h00 (4 horas)</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">📍</span>
                <div>
                  <p className="font-semibold">Local</p>
                  <p className="text-gray-600">ETEC Itaquera II - Auditório</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">🎯</span>
                <div>
                  <p className="font-semibold">Público-Alvo</p>
                  <p className="text-gray-600">Atletas, educadores e amantes das artes marciais</p>
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