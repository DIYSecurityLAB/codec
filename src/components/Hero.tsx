import React from 'react';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className = '' }) => {
  return (
    <section className={`relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-green-800 to-blue-800 ${className}`}>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="block">CODEC</span>
          <span className="text-2xl md:text-3xl font-normal block mt-2">
            Congresso de Desenvolvimento nos Esportes de Contato
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 font-medium">
          Artes Marciais: Tradição, Corpo e Mente em Harmonia
        </p>
        
        <div className="mb-8 text-lg md:text-xl">
          <p className="mb-2">📅 20 de Setembro de 2025 (Sábado)</p>
          <p className="mb-2">🕘 09h00 às 13h00</p>
          <p>📍 ETEC Itaquera II - São Paulo/SP</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300">
            Inscreva-se Agora
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300">
            Saiba Mais
          </button>
        </div>
        
        <div className="mt-12 text-sm opacity-80">
          <p>Realização: OPAM - Organização Paulista de Artes Marciais</p>
          <p>NIN DO RYU</p>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;