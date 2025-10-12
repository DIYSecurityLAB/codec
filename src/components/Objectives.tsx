import React from 'react';

interface ObjectivesProps {
  className?: string;
}

const Objectives: React.FC<ObjectivesProps> = ({ className = '' }) => {
  const objectives = [
    {
      icon: '🎓',
      title: 'Métodos de Ensino',
      description: 'Promover a discussão sobre métodos de ensino e aprendizagem nos esportes de contato.',
      ariaLabel: 'Objetivo sobre métodos de ensino'
    },
    {
      icon: '🤝',
      title: 'Inclusão Social',
      description: 'Estimular a inclusão social por meio das artes marciais.',
      ariaLabel: 'Objetivo sobre inclusão social'
    },
    {
      icon: '🚀',
      title: 'Práticas Inovadoras',
      description: 'Divulgar projetos e práticas inovadoras relacionadas à acessibilidade e empoderamento nos esportes.',
      ariaLabel: 'Objetivo sobre práticas inovadoras'
    },
    {
      icon: '🌐',
      title: 'Rede de Profissionais',
      description: 'Fortalecer a rede de profissionais e praticantes da área.',
      ariaLabel: 'Objetivo sobre rede de profissionais'
    },
    {
      icon: '🧸',
      title: 'Responsabilidade Social',
      description: 'Recolher brinquedos como forma de ingresso, promovendo responsabilidade social.',
      ariaLabel: 'Objetivo sobre responsabilidade social'
    }
  ];

  return (
    <section 
      id="objetivos" 
      className={`py-16 lg:py-20 bg-white ${className}`}
      aria-labelledby="objectives-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 lg:mb-16">
          <h2 
            id="objectives-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
          >
            Nossos Objetivos
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Os principais objetivos que queremos alcançar através do projeto
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {objectives.map((objective, index) => (
            <div 
              key={index}
              className="bg-gray-50 hover:bg-gray-100 rounded-xl p-6 lg:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              role="article"
              aria-label={objective.ariaLabel}
            >
              <div className="text-4xl lg:text-5xl mb-4" aria-hidden="true">
                {objective.icon}
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3">
                {objective.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {objective.description}
              </p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          <div 
            className="bg-gradient-to-br from-green-100 to-green-50 rounded-xl p-6 lg:p-8 border border-green-200"
            role="article"
            aria-labelledby="mission-title"
          >
            <h3 id="mission-title" className="text-xl sm:text-2xl font-bold text-green-800 mb-4 flex items-center">
              <span className="mr-2" aria-hidden="true">🎯</span>
              Missão
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Construir um futuro em que as artes marciais sejam verdadeiramente acessíveis a todos. 
              Acreditamos no esporte como ferramenta de inclusão, empoderamento e transformação social.
            </p>
          </div>
          
          <div 
            className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl p-6 lg:p-8 border border-blue-200"
            role="article"
            aria-labelledby="vision-title"
          >
            <h3 id="vision-title" className="text-xl sm:text-2xl font-bold text-blue-800 mb-4 flex items-center">
              <span className="mr-2" aria-hidden="true">👁️</span>
              Visão
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Ser referência na promoção da inclusão do protagonismo por meio das artes marciais, 
              integrando esporte, cultura, acessibilidade e empoderamento.
            </p>
          </div>
          
          <div 
            className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl p-6 lg:p-8 border border-purple-200 md:col-span-3 lg:col-span-1"
            role="article"
            aria-labelledby="values-title"
          >
            <h3 id="values-title" className="text-xl sm:text-2xl font-bold text-purple-800 mb-4 flex items-center">
              <span className="mr-2" aria-hidden="true">💎</span>
              Valores
            </h3>
            <ul className="text-gray-700 space-y-2 text-sm sm:text-base" role="list">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 flex-shrink-0" aria-hidden="true"></span>
                Respeito
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 flex-shrink-0" aria-hidden="true"></span>
                Inclusão
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 flex-shrink-0" aria-hidden="true"></span>
                Superação
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 flex-shrink-0" aria-hidden="true"></span>
                Igualdade
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 flex-shrink-0" aria-hidden="true"></span>
                Disciplina
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 flex-shrink-0" aria-hidden="true"></span>
                Tradição com Inovação
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 flex-shrink-0" aria-hidden="true"></span>
                Acessibilidade
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;