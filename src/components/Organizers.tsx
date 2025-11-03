import React from 'react';
import Image from 'next/image';

interface OrganizersProps {
  className?: string;
}

const Organizers: React.FC<OrganizersProps> = ({ className = '' }) => {
  const organizers = [
    {
      name: 'Sidney Alves',
      role: 'Coordenador do CODEC',
      qualifications: [
        'Professor de Administração de Empresas',
        'Professor de Educação Física',
        'Mestre em Educação',
        'Praticante de Artes Marciais',
        'Organizador do Congresso CODEC'
      ],
      image: '/sidney.jpeg',
      ariaLabel: 'Perfil do Professor Sidney Alves'
    },
    {
      name: 'Bruno Garcia',
      role: 'Coordenador do CODEC',
      qualifications: [
        'Professor de Educação Física',
        'Sensei de Artes Marciais',
        'Presidente da OPAM',
        'Fundador da CODEC',
        'Organizador do Congresso CODEC'
      ],
      image: '/bruno.jpeg',
      ariaLabel: 'Perfil do Sensei Bruno Garcia'
    },
    {
      name: 'Alcina Maria da Conceição',
      role: 'Mediadora',
      qualifications: [
        'Formação em Comunicação Social - Relações Públicas',
        'Formação em Pedagogia',
        'Especialista em Atendimento aos Clientes',
        'Conselheira Titular da AMA/UBS Integrada Padre Manoel da Nóbrega',
        'Secretária do Conselho Gestor do CEU Abdias do Nascimento'
      ],
      image: '/alcina.jpeg',
      ariaLabel: 'Perfil da Mediadora Alcina Maria da Conceição'
    }
  ];

  return (
    <section 
      id="organizadores" 
      className={`py-16 lg:py-20 bg-gray-50 ${className}`}
      aria-labelledby="organizers-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 lg:mb-16">
          <h2 
            id="organizers-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
          >
            Organizadores
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Profissionais experientes dedicados ao desenvolvimento das artes marciais
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-16 lg:mb-20">
          {organizers.map((organizer, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl p-6 sm:p-8 lg:p-10 text-center transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              role="article"
              aria-label={organizer.ariaLabel}
            >
              <div className="mb-6 flex justify-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-green-200 shadow-lg">
                  <Image
                    src={organizer.image}
                    alt={`Foto do ${organizer.name}`}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
                {organizer.name}
              </h3>
              <div className="space-y-3">
                {organizer.qualifications.map((qualification, qIndex) => (
                  <div key={qIndex} className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 flex-shrink-0" aria-hidden="true"></span>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {qualification}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm font-medium">
                <span className="mr-1" aria-hidden="true">🏆</span>
                {organizer.role}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="bg-white rounded-xl p-6 sm:p-8 lg:p-10 shadow-lg border border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-800">
              Realização
            </h3>
            <div className="max-w-2xl mx-auto">
              <div className="mb-8">
                <div className="flex flex-col items-center justify-center gap-4 mb-4">
                  <Image
                    src="/opam-logo.jpeg"
                    alt="Logo OPAM"
                    width={200}
                    height={200}
                    className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain"
                  />
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">OPAM</p>
                </div>
                <p className="text-lg sm:text-xl mb-4 text-gray-600">
                  Organização Paulista de Artes Marciais
                </p>
                <p className="text-base sm:text-lg text-gray-700 font-medium">NIN DO RYU</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 sm:p-8 border border-gray-100">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  <span className="font-semibold text-gray-800">Nossa missão:</span> Promover o desenvolvimento técnico e pedagógico 
                  nas artes marciais, integrando tradição e inovação para formar profissionais capacitados 
                  e conscientes de seu papel social.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organizers;