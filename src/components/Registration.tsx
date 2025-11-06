import React from 'react';

interface RegistrationProps {
  className?: string;
}

const Registration: React.FC<RegistrationProps> = ({ className = '' }) => {
  return (
    <section 
      className={`py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-green-600 text-white relative ${className}`}
      aria-labelledby="registration-title"
    >
      <div className="absolute inset-0 bg-black/20" aria-hidden="true"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 
            id="registration-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
          >
            Faça sua Inscrição
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto text-gray-100 leading-relaxed">
            Garante sua vaga no CODEC 2025 e contribua com a responsabilidade social
          </p>
        </div>
        
        <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-10 mb-8 lg:mb-12 border border-white/20">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 lg:mb-8 text-center text-yellow-100">
            Informações da Inscrição
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-4 flex items-center text-yellow-100">
                <span className="text-2xl mr-3" aria-hidden="true">💳</span>
                Como se Inscrever
              </h4>
              <ul className="space-y-3 text-gray-200" role="list">
                <li className="flex items-center text-sm sm:text-base">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0" aria-hidden="true"></span>
                  Inscrição <strong>gratuita</strong> online
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0" aria-hidden="true"></span>
                  Traga <strong>1 brinquedo</strong> como ingresso
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0" aria-hidden="true"></span>
                  Certificado digital <strong>incluso</strong>
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0" aria-hidden="true"></span>
                  <strong>4 horas</strong> de conteúdo especializado
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-4 flex items-center text-yellow-100">
                <span className="text-2xl mr-3" aria-hidden="true">🎯</span>
                Público-Alvo
              </h4>
              <ul className="space-y-3 text-gray-200" role="list">
                <li className="flex items-center text-sm sm:text-base">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0" aria-hidden="true"></span>
                  Atletas de artes marciais
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0" aria-hidden="true"></span>
                  Educadores físicos
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0" aria-hidden="true"></span>
                  Professores de esportes de contato
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0" aria-hidden="true"></span>
                  Amantes das artes marciais
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          
          <div className="bg-yellow-400/25 backdrop-blur-sm rounded-xl p-6 sm:p-8 mb-8 lg:mb-12 border border-yellow-400/30">
            <h4 className="text-lg sm:text-xl font-bold mb-3 flex items-center justify-center text-yellow-100">
              <span className="text-2xl mr-3" aria-hidden="true">🎓</span>
              Certificação
            </h4>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
              Certificado digital contendo a programação completa, carga horária de 4 horas e selo oficial 
              das unidades parceiras, emitido pela página oficial do evento.
            </p>
          </div>
          
          <div className="space-y-4">
            <a 
              href="https://www.even3.com.br/codec-652594"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto bg-yellow-400 text-blue-900 font-bold py-4 px-8 lg:px-12 rounded-lg text-lg sm:text-xl hover:bg-yellow-300 focus-visible:bg-yellow-300 transition-colors duration-300 shadow-xl focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
              aria-label="Inscrever-se agora no CODEC 2025 através do Even3"
            >
              <span className="text-2xl mr-2" aria-hidden="true">🚀</span>
              Inscrever-se Agora no Even3
            </a>
            
            <p className="text-sm text-gray-300 mt-4">
              <span aria-hidden="true">🎫</span> Inscrições através da plataforma Even3
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;