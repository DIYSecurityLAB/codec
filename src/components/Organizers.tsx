import React from 'react';

interface OrganizersProps {
  className?: string;
}

const Organizers: React.FC<OrganizersProps> = ({ className = '' }) => {
  const organizers = [
    {
      name: 'Professor Bruno',
      qualifications: [
        'Educação Física – Pedagogia',
        'Especialista em docência no ensino superior',
        'Faixa Preta 3º Dan'
      ],
      avatar: '👨‍🏫',
      ariaLabel: 'Perfil do Professor Bruno'
    },
    {
      name: 'Professor Sidney',
      qualifications: [
        'Educação Física – Pedagogia',
        'Psicopedagogia Clínica e Institucional',
        'Mestre em Gestão Educacional',
        'Faixa Marrom'
      ],
      avatar: '👨‍🎓',
      ariaLabel: 'Perfil do Professor Sidney'
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
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto mb-16 lg:mb-20">
          {organizers.map((organizer, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl p-6 sm:p-8 lg:p-10 text-center transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              role="article"
              aria-label={organizer.ariaLabel}
            >
              <div className="text-5xl sm:text-6xl lg:text-7xl mb-6" aria-hidden="true">
                {organizer.avatar}
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
                Coordenador do CODEC
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20" aria-hidden="true"></div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-yellow-100">
                Realização
              </h3>
              <div className="max-w-2xl mx-auto">
                <div className="mb-6">
                  <p className="text-xl sm:text-2xl font-bold mb-2 text-gray-100">OPAM</p>
                  <p className="text-base sm:text-lg mb-4 text-gray-200">
                    Organização Paulista de Artes Marciais
                  </p>
                  <p className="text-sm sm:text-base text-gray-300">NIN DO RYU</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20">
                  <p className="text-sm sm:text-base text-gray-100 leading-relaxed">
                    <span className="font-semibold">Nossa missão:</span> Promover o desenvolvimento técnico e pedagógico 
                    nas artes marciais, integrando tradição e inovação para formar profissionais capacitados 
                    e conscientes de seu papel social.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organizers;