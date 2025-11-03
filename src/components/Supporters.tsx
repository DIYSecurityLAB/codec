import React from 'react';
import Image from 'next/image';

interface SupportersProps {
  className?: string;
}

const Supporters: React.FC<SupportersProps> = ({ className = '' }) => {
  const supporters = [
    {
      name: 'Sublita Personalizados',
      logo: '/sublita.jpeg',
    },
    {
      name: 'Centro Olímpico de Treinamento e Pesquisa',
      logo: '/centro-olimpico.jpeg',
    },
    {
      name: 'Fato Paulista',
      logo: '/fato-paulista.jpeg',
    },
    {
      name: 'ETEC Itaquera II',
      logo: '/etec.webp',
    },
    {
      name: 'Gabriel Abreu',
      logo: '/gabriel-abreu.jpeg',
    },
    {
      name: 'Renata Abreu',
      logo: '/renata-abreu.jpeg',
    },
    {
      name: 'Action Figure Collection',
      logo: '/action-figure.jpeg',
    },
    {
      name: 'Ita Chaves',
      logo: '/itachaves.jpeg',
    },
    {
      name: 'GIacco Becas',
      logo: '/giacco-becas.jpeg',
    }
  ];

  return (
    <section 
      id="apoiadores" 
      className={`py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50 ${className}`}
      aria-labelledby="supporters-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 lg:mb-16">
          <h2 
            id="supporters-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
          >
            Apoiadores Culturais
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Instituições e organizações que acreditam no desenvolvimento das artes marciais como ferramenta de transformação social
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {supporters.map((supporter, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl p-6 text-center transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              role="article"
              aria-label={`Apoiador ${supporter.name}`}
            >
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200">
                  <Image
                    src={supporter.logo}
                    alt={`Logo ${supporter.name}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                {supporter.name}
              </h3>
            </div>
          ))}
        </div>
        
        <div className="text-center bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Seja um Apoiador Cultural
          </h3>
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
              Junte-se a nós na missão de promover o desenvolvimento das artes marciais como ferramenta de educação, 
              inclusão social e formação de cidadãos mais conscientes e preparados.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="text-2xl mb-2" aria-hidden="true">🤝</div>
                <h4 className="font-semibold text-blue-800 text-sm sm:text-base">Parcerias</h4>
                <p className="text-xs sm:text-sm text-blue-600">Estabeleça vínculos duradouros</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg border border-green-100">
                <div className="text-2xl mb-2" aria-hidden="true">📈</div>
                <h4 className="font-semibold text-green-800 text-sm sm:text-base">Visibilidade</h4>
                <p className="text-xs sm:text-sm text-green-600">Amplie o alcance da sua marca</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-100">
                <div className="text-2xl mb-2" aria-hidden="true">🎯</div>
                <h4 className="font-semibold text-purple-800 text-sm sm:text-base">Impacto Social</h4>
                <p className="text-xs sm:text-sm text-purple-600">Contribua para a sociedade</p>
              </div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 focus-visible:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
              Entre em Contato
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Supporters;