import React from 'react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm shadow-md ${className}`}>
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">CODEC</h1>
              <p className="text-xs text-gray-600">2025</p>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#sobre" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Sobre
            </a>
            <a href="#objetivos" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Objetivos
            </a>
            <a href="#organizadores" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Organizadores
            </a>
            <a href="#local" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Local
            </a>
            <a href="#contato" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Contato
            </a>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
              Inscrever-se
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-green-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;