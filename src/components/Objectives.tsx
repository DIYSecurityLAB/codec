import React from 'react';

interface ObjectivesProps {
  className?: string;
}

const Objectives: React.FC<ObjectivesProps> = ({ className = '' }) => {
  const objectives = [
    {
      icon: '🎓',
      title: 'Métodos de Ensino',
      description: 'Promover a discussão sobre métodos de ensino e aprendizagem nos esportes de contato.'
    },
    {
      icon: '🤝',
      title: 'Inclusão Social',
      description: 'Estimular a inclusão social por meio das artes marciais.'
    },
    {
      icon: '🚀',
      title: 'Práticas Inovadoras',
      description: 'Divulgar projetos e práticas inovadoras relacionadas à acessibilidade e empoderamento nos esportes.'
    },
    {
      icon: '🌐',
      title: 'Rede de Profissionais',
      description: 'Fortalecer a rede de profissionais e praticantes da área.'
    },
    {
      icon: '🧸',
      title: 'Responsabilidade Social',
      description: 'Recolher brinquedos como forma de ingresso, promovendo responsabilidade social.'
    }
  ];

  return (
    <section id="objetivos" className={`py-16 bg-white ${className}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nossos Objetivos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Os principais objetivos que queremos alcançar através do projeto
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((objective, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{objective.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {objective.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {objective.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Mission, Vision, Values */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Missão</h3>
            <p className="text-gray-700 leading-relaxed">
              Construir um futuro em que as artes marciais sejam verdadeiramente acessíveis a todos. 
              Acreditamos no esporte como ferramenta de inclusão, empoderamento e transformação social.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Visão</h3>
            <p className="text-gray-700 leading-relaxed">
              Ser referência na promoção da inclusão do protagonismo por meio das artes marciais, 
              integrando esporte, cultura, acessibilidade e empoderamento.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-purple-800 mb-4">Valores</h3>
            <ul className="text-gray-700 space-y-1">
              <li>• Respeito</li>
              <li>• Inclusão</li>
              <li>• Superação</li>
              <li>• Igualdade</li>
              <li>• Disciplina</li>
              <li>• Tradição com Inovação</li>
              <li>• Acessibilidade</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;