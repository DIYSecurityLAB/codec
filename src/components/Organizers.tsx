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
      avatar: '👨‍🏫'
    },
    {
      name: 'Professor Sidney',
      qualifications: [
        'Educação Física – Pedagogia',
        'Psicopedagogia Clínica e Institucional',
        'Mestre em Gestão Educacional',
        'Faixa Marrom'
      ],
      avatar: '👨‍🎓'
    }
  ];

  return (
    <section id="organizadores" className={`py-16 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Organizadores
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profissionais experientes dedicados ao desenvolvimento das artes marciais
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {organizers.map((organizer, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-6xl mb-4">{organizer.avatar}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {organizer.name}
              </h3>
              <div className="space-y-2">
                {organizer.qualifications.map((qualification, qIndex) => (
                  <p key={qIndex} className="text-gray-600 text-sm">
                    {qualification}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Organization Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Realização</h3>
            <div className="text-lg">
              <p className="font-semibold mb-2">OPAM</p>
              <p className="mb-2">Organização Paulista de Artes Marciais</p>
              <p className="text-sm opacity-90">NIN DO RYU</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organizers;