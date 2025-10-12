import React from 'react';

interface SocialResponsibilityProps {
  className?: string;
}

const SocialResponsibility: React.FC<SocialResponsibilityProps> = ({ className = '' }) => {
  return (
    <section 
      className={`py-16 lg:py-20 bg-gradient-to-br from-green-600 via-green-700 to-blue-700 text-white relative ${className}`}
      aria-labelledby="social-title"
    >
      <div className="absolute inset-0 bg-black/20" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 
            id="social-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
          >
            Responsabilidade Social
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto text-gray-100 leading-relaxed">
            Esporte e solidariedade caminhando juntos
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center">
              <span className="text-3xl mr-3" aria-hidden="true">🧸</span>
              Brinquedos como Ingresso
            </h3>
            <div className="space-y-6 text-gray-100">
              <p className="text-base sm:text-lg leading-relaxed">
                O <strong>Congresso Regional de Artes Marciais</strong> une esporte e responsabilidade social ao trocar 
                a entrada por brinquedos para doação.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                Com foco na inclusão, o evento destaca como pessoas com e sem deficiência aprendem 
                artes marciais e enfrentam desafios da vida, promovendo valores como <strong>respeito</strong>, 
                <strong>superação</strong> e <strong>empatia</strong>.
              </p>
            </div>
            
            <div className="mt-8 p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3" aria-hidden="true">💝</span>
                <h4 className="text-lg sm:text-xl font-semibold text-yellow-100">Impacto Social</h4>
              </div>
              <p className="text-gray-100 text-sm sm:text-base leading-relaxed">
                Todos os brinquedos arrecadados serão doados para crianças em situação de vulnerabilidade social,
                multiplicando o impacto positivo do evento na comunidade.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/20">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-yellow-100">
                Como Participar
              </h3>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <span className="text-2xl mr-4 group-hover:scale-110 transition-transform" aria-hidden="true">1️⃣</span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-yellow-100 mb-1">Traga um Brinquedo</h4>
                    <p className="text-gray-200 text-sm sm:text-base">Novo ou em bom estado de conservação</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <span className="text-2xl mr-4 group-hover:scale-110 transition-transform" aria-hidden="true">2️⃣</span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-yellow-100 mb-1">Faça sua Inscrição</h4>
                    <p className="text-gray-200 text-sm sm:text-base">Online através da plataforma oficial</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <span className="text-2xl mr-4 group-hover:scale-110 transition-transform" aria-hidden="true">3️⃣</span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-yellow-100 mb-1">Participe e Doe</h4>
                    <p className="text-gray-200 text-sm sm:text-base">Entregue o brinquedo na entrada do evento</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <button 
                  className="w-full sm:w-auto bg-white text-green-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 focus-visible:bg-gray-100 transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-700"
                  aria-label="Quero participar da campanha de responsabilidade social"
                  type="button"
                >
                  Quero Participar
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 lg:mt-16">
          <div className="bg-yellow-400/20 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-yellow-400/30 text-center">
            <div className="flex items-center justify-center mb-4">
              <span className="text-3xl mr-3" aria-hidden="true">🎯</span>
              <h4 className="text-xl sm:text-2xl font-bold text-yellow-100">Nosso Compromisso</h4>
            </div>
            <p className="text-base sm:text-lg text-gray-100 leading-relaxed max-w-4xl mx-auto">
              Cada brinquedo doado representa não apenas um gesto de solidariedade, mas também o compromisso 
              coletivo em construir uma sociedade mais justa, inclusiva e empática através do esporte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialResponsibility;