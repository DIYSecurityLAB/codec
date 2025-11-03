import React from 'react';
import Image from 'next/image';

interface SpeakersProps {
  className?: string;
}

const Speakers: React.FC<SpeakersProps> = ({ className = '' }) => {
  const speakers = [
    {
      name: 'Sensei Herta Martins',
      title: 'Presidente do Projeto Futsuro',
      qualifications: [
        'Presidente do Projeto Futsuro',
        'Especialista em Kobudo Educacional'
      ],
      topic: 'Kobudo Educacional',
      image: '/herta.jpeg',
      ariaLabel: 'Perfil da Sensei Herta Martins'
    },

    {
      name: 'Vitória Regia',
      title: 'Especialista em Deficiência Intelectual e Autismo',
      qualifications: [
        'Especialista em Deficiência Intelectual e Autismo',
        'Professor de Apoio e Acompanhamento à Inclusão',
        'CEFAI São Mateus - Diretoria Regional de Educação'
      ],
      topic: 'Artes Marciais e Inclusão Social',
      image: '/vitoria.jpeg',
      ariaLabel: 'Perfil da Vitória Regia'
    },
    {
      name: 'Adriana da Silva Costa',
      title: 'Especialista em Deficiência Intelectual e Autismo',
      qualifications: [
        'Especialista em Deficiência Intelectual e Autismo',
        'Professor de Apoio e Acompanhamento à Inclusão',
        'CEFAI São Mateus - Diretoria Regional de Educação de São Mateus'
      ],
      topic: 'Metodologias Inclusivas nas Artes Marciais',
      image: '/adriana.jpeg',
      ariaLabel: 'Perfil da Adriana da Silva Costa'
    }
  ];

  return (
    <section 
      id="palestrantes" 
      className={`py-16 lg:py-20 bg-white ${className}`}
      aria-labelledby="speakers-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 lg:mb-16">
          <h2 
            id="speakers-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
          >
            Palestrantes
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Especialistas renomados compartilharão conhecimentos sobre desenvolvimento técnico e científico nas artes marciais
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {speakers.map((speaker, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl p-6 text-center transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              role="article"
              aria-label={speaker.ariaLabel}
            >
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-blue-200 shadow-lg">
                  <Image
                    src={speaker.image}
                    alt={`Foto do palestrante ${speaker.name}`}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                {speaker.name}
              </h3>
              
              <p className="text-sm sm:text-base text-blue-600 font-medium mb-4 leading-snug">
                {speaker.title}
              </p>
              
              <div className="space-y-2 mb-4">
                {speaker.qualifications.map((qualification, qIndex) => (
                  <div key={qIndex} className="flex items-start justify-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0" aria-hidden="true"></span>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-left">
                      {qualification}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                <p className="text-xs sm:text-sm font-medium text-blue-800 mb-1">
                  Tema da Palestra:
                </p>
                <p className="text-xs sm:text-sm text-blue-700 leading-relaxed">
                  {speaker.topic}
                </p>
              </div>
              
              <div className="mt-4 inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                <span className="mr-1" aria-hidden="true">🎤</span>
                Palestrante
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 sm:p-8 border border-blue-100">
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4">
            Programação do Evento
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-100">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-2xl mr-2" aria-hidden="true">�</span>
                  <h4 className="font-semibold text-blue-800">Entrada Liberada</h4>
                </div>
                <p className="text-blue-700 font-medium text-2xl">18h30</p>
                <p className="text-sm text-gray-600 mt-1">Chegada e credenciamento dos participantes</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-100">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-2xl mr-2" aria-hidden="true">🎯</span>
                  <h4 className="font-semibold text-blue-800">Evento Principal</h4>
                </div>
                <p className="text-blue-700 font-medium text-2xl">19h às 22h30</p>
                <p className="text-sm text-gray-600 mt-1">Palestras e atividades</p>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-center justify-center mb-2">
                <span className="text-xl mr-2" aria-hidden="true">ℹ️</span>
                <h5 className="font-semibold text-blue-800">Importante</h5>
              </div>
              <p className="text-sm text-blue-700">
                Recomendamos chegar com antecedência para garantir o credenciamento e aproveitar ao máximo o evento
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;