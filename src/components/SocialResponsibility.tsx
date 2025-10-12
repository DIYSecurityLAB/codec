import React from 'react';

interface SocialResponsibilityProps {
  className?: string;
}

const SocialResponsibility: React.FC<SocialResponsibilityProps> = ({ className = '' }) => {
  return (
    <section className={`py-16 bg-gradient-to-br from-green-600 via-green-700 to-blue-700 text-white ${className}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Responsabilidade Social
          </h2>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Esporte e solidariedade caminhando juntos
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">🧸 Brinquedos como Ingresso</h3>
            <p className="text-lg mb-6 leading-relaxed opacity-90">
              O Congresso Regional de Artes Marciais une esporte e responsabilidade social ao trocar 
              a entrada por brinquedos para doação.
            </p>
            <p className="text-lg mb-6 leading-relaxed opacity-90">
              Com foco na inclusão, o evento destaca como pessoas com e sem deficiência aprendem 
              artes marciais e enfrentam desafios da vida, promovendo valores como respeito, 
              superação e empatia.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Como Participar</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-2xl mr-4">1️⃣</span>
                <div>
                  <h4 className="font-semibold text-lg">Traga um Brinquedo</h4>
                  <p className="opacity-90">Novo ou em bom estado de conservação</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-4">2️⃣</span>
                <div>
                  <h4 className="font-semibold text-lg">Faça sua Inscrição</h4>
                  <p className="opacity-90">Online através da plataforma oficial</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-4">3️⃣</span>
                <div>
                  <h4 className="font-semibold text-lg">Participe e Doe</h4>
                  <p className="opacity-90">Entregue o brinquedo na entrada do evento</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button className="bg-white text-green-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Quero Participar
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg opacity-90">
            💝 Todos os brinquedos arrecadados serão doados para crianças em situação de vulnerabilidade social
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialResponsibility;