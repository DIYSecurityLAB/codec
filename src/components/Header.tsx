"use client";

import React, { useState } from "react";
import Image from "next/image";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <a
        href="#main-content"
        className="skip-link focus-visible:ring-2 focus-visible:ring-primary"
      >
        Pular para o conteúdo principal
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-100 ${className}`}
        role="banner"
      >
        <nav
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-3"
          role="navigation"
          aria-label="Navegação principal"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
                <Image 
                  src="/logo.svg" 
                  alt="CODEC Logo" 
                  className="w-full h-full object-contain"
                  width={64}
                  height={64}
                />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
                  CODEC
                </h1>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-6">
              <a
                href="#sobre"
                className="text-gray-700 hover:text-green-600 focus-visible:text-green-600 transition-colors font-medium focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md px-2 py-1"
                aria-label="Ir para seção Sobre"
              >
                Sobre
              </a>
              <a
                href="#objetivos"
                className="text-gray-700 hover:text-green-600 focus-visible:text-green-600 transition-colors font-medium focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md px-2 py-1"
                aria-label="Ir para seção Objetivos"
              >
                Objetivos
              </a>
              <a
                href="#organizadores"
                className="text-gray-700 hover:text-green-600 focus-visible:text-green-600 transition-colors font-medium focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md px-2 py-1"
                aria-label="Ir para seção Organizadores"
              >
                Organizadores
              </a>
              <a
                href="#palestrantes"
                className="text-gray-700 hover:text-green-600 focus-visible:text-green-600 transition-colors font-medium focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md px-2 py-1"
                aria-label="Ir para seção Palestrantes"
              >
                Palestrantes
              </a>
              <a
                href="#apoiadores"
                className="text-gray-700 hover:text-green-600 focus-visible:text-green-600 transition-colors font-medium focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md px-2 py-1"
                aria-label="Ir para seção Apoiadores"
              >
                Apoiadores
              </a>
              <a
                href="#local"
                className="text-gray-700 hover:text-green-600 focus-visible:text-green-600 transition-colors font-medium focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md px-2 py-1"
                aria-label="Ir para seção Local"
              >
                Local
              </a>
              <a
                href="#contato"
                className="text-gray-700 hover:text-green-600 focus-visible:text-green-600 transition-colors font-medium focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md px-2 py-1"
                aria-label="Ir para seção Contato"
              >
                Contato
              </a>
              <button
                className="bg-green-600 hover:bg-green-700 focus-visible:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                aria-label="Abrir formulário de inscrição"
                type="button"
              >
                Inscrever-se
              </button>
            </div>
            <div className="lg:hidden">
              <button
                className="text-gray-700 hover:text-green-600 focus-visible:text-green-600 transition-colors p-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md"
                onClick={toggleMobileMenu}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                type="button"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <div
              id="mobile-menu"
              className="lg:hidden mt-4 pb-4 border-t border-gray-200"
              role="menu"
            >
              <div className="flex flex-col space-y-3 pt-4">
                <a
                  href="#sobre"
                  className="text-gray-700 hover:text-green-600 focus-visible:text-green-600 transition-colors font-medium py-2 px-3 rounded-md focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  onClick={closeMobileMenu}
                  role="menuitem"
                  aria-label="Ir para seção Sobre"
                >
                  Sobre
                </a>
                <a
                  href="#objetivos"
                  className="text-gray-700 hover:text-green-600 focus-visible:text-green-600 transition-colors font-medium py-2 px-3 rounded-md focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  onClick={closeMobileMenu}
                  role="menuitem"
                  aria-label="Ir para seção Objetivos"
                >
                  Objetivos
                </a>
                <a
                  href="#organizadores"
                  className="text-gray-700 hover:text-green-600 focus-visible:text-green-600 transition-colors font-medium py-2 px-3 rounded-md focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  onClick={closeMobileMenu}
                  role="menuitem"
                  aria-label="Ir para seção Organizadores"
                >
                  Organizadores
                </a>
                <a
                  href="#palestrantes"
                  className="text-gray-700 hover:text-green-600 focus-visible:text-green-600 transition-colors font-medium py-2 px-3 rounded-md focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  onClick={closeMobileMenu}
                  role="menuitem"
                  aria-label="Ir para seção Palestrantes"
                >
                  Palestrantes
                </a>
                <a
                  href="#apoiadores"
                  className="text-gray-700 hover:text-green-600 focus-visible:text-green-600 transition-colors font-medium py-2 px-3 rounded-md focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  onClick={closeMobileMenu}
                  role="menuitem"
                  aria-label="Ir para seção Apoiadores"
                >
                  Apoiadores
                </a>
                <a
                  href="#local"
                  className="text-gray-700 hover:text-green-600 focus-visible:text-green-600 transition-colors font-medium py-2 px-3 rounded-md focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  onClick={closeMobileMenu}
                  role="menuitem"
                  aria-label="Ir para seção Local"
                >
                  Local
                </a>
                <a
                  href="#contato"
                  className="text-gray-700 hover:text-green-600 focus-visible:text-green-600 transition-colors font-medium py-2 px-3 rounded-md focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  onClick={closeMobileMenu}
                  role="menuitem"
                  aria-label="Ir para seção Contato"
                >
                  Contato
                </a>
                <button
                  className="bg-green-600 hover:bg-green-700 focus-visible:bg-green-700 text-white px-4 py-3 rounded-lg font-medium transition-colors mt-4 w-full focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                  onClick={closeMobileMenu}
                  aria-label="Abrir formulário de inscrição"
                  type="button"
                >
                  Inscrever-se
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
