import React from 'react';

interface RegistrationProps {
  className?: string;
}

const Registration: React.FC<RegistrationProps> = ({ className = '' }) => {
  return (
    <section className={`py-16 bg-gradient-to-br from-blue-600 to-green-600 text-white ${className}`}>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Faça sua Inscrição
          </h2>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Garante sua vaga no CODEC 2025 e contribua com a responsabilidade social
          </p>
        </div>
        
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Informações da Inscrição</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">💳 Como se Inscrever</h4>
              <ul className="space-y-2 opacity-90">
                <li>• Inscrição gratuita online</li>
                <li>• Traga 1 brinquedo como ingresso</li>
                <li>• Certificado digital incluso</li>
                <li>• 4 horas de conteúdo especializado</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4">🎯 Público-Alvo</h4>
              <ul className="space-y-2 opacity-90">
                <li>• Atletas de artes marciais</li>
                <li>• Educadores físicos</li>
                <li>• Professores de esportes de contato</li>
                <li>• Amantes das artes marciais</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Plataformas Oficiais</h3>
            <p className="opacity-90 mb-6">
              As inscrições serão realizadas através das seguintes plataformas:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-md mx-auto">
              <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Sympla
              </button>
              <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Even3
              </button>
            </div>
          </div>
          
          <div className="bg-yellow-400 bg-opacity-20 rounded-lg p-6 mb-8">
            <h4 className="text-xl font-bold mb-2">🎓 Certificação</h4>
            <p className="opacity-90">
              Certificado digital contendo a programação, carga horária e selo oficial 
              das unidades parceiras emitido pela página oficial do evento.
            </p>
          </div>
          
          <button className="bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-lg text-xl hover:bg-yellow-300 transition-colors duration-300 shadow-lg">
            Inscrever-se Agora
          </button>
          
          <p className="mt-4 text-sm opacity-75">
            * As inscrições serão abertas em breve
          </p>
        </div>
      </div>
    </section>
  );
};

export default Registration;