"use client";

import React from "react";
import Image from "next/image";

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className = "" }) => {
  return (
    <section
      id="main-content"
      className={`relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat ${className}`}
      style={{ backgroundImage: 'url("/bg-codec.webp")' }}
      role="banner"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-6">
          <div className="mb-2">
            <Image
              src="/logo.svg"
              alt="CODEC - Congresso de Desenvolvimento nos Esportes de Contato"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(22%) sepia(73%) saturate(1234%) hue-rotate(180deg) brightness(96%) contrast(91%)",
              }}
              width={224}
              height={224}
            />
          </div>
          <h1
            id="hero-title"
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight text-center text-gray-100"
          >
            Congresso de Desenvolvimento nos Esportes de Contato
          </h1>
        </div>

        <p className="text-lg sm:text-xl md:text-2xl mb-8 font-medium text-gray-100 max-w-3xl mx-auto">
          Artes Marciais: Tradição, Corpo e Mente em Harmonia
        </p>
        <div className="mb-8 text-base sm:text-lg md:text-xl bg-black/20 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20">
          <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-8 space-y-2 sm:space-y-0">
            <div className="flex items-center justify-center sm:justify-start">
              <span className="text-2xl mr-3" aria-hidden="true">
                📅
              </span>
              <span>
                <span className="sr-only">Data: </span>
                14 de Novembro de 2025 (Sexta)
              </span>
            </div>
            <div className="flex items-center justify-center sm:justify-start">
              <span className="text-2xl mr-3" aria-hidden="true">
                🕘
              </span>
              <span>
                <span className="sr-only">Horário: </span>
                19h00 às 22h30
              </span>
            </div>
            <div className="flex items-center justify-center sm:justify-start">
              <span className="text-2xl mr-3" aria-hidden="true">
                📍
              </span>
              <span>
                <span className="sr-only">Local: </span>
                ETEC Itaquera II - São Paulo/SP
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
          <button
            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 focus-visible:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-800"
            aria-label="Inscrever-se no CODEC 2025"
            type="button"
          >
            Inscreva-se Agora
          </button>
          <button
            className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-900 focus-visible:bg-white focus-visible:text-blue-900 font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-800"
            aria-label="Saber mais sobre o evento"
            onClick={() =>
              document
                .getElementById("sobre")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            type="button"
          >
            Saiba Mais
          </button>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="text-sm sm:text-base bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <p className="font-medium text-gray-200 mb-2">Realização:</p>
            <p className="text-gray-100 text-sm">
              OPAM - Organização Paulista de Artes Marciais
            </p>
            <p className="text-gray-100 text-sm">NIN DO RYU</p>
          </div>
          
          <div className="text-sm sm:text-base bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <p className="font-medium text-gray-200 mb-3 text-center">Apoiadores Principais:</p>
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-1 border border-white/20">
                  <Image
                    src="/opam-logo.jpeg"
                    alt="Logo OPAM"
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="text-gray-100 text-xs font-medium">OPAM</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-1 border border-white/20">
                  <Image
                    src="/logo.svg"
                    alt="Logo CODEC"
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain brightness-0 invert"
                  />
                </div>
                <span className="text-gray-100 text-xs font-medium">CODEC</span>
              </div>
            </div>
            <p className="text-center">
              <button 
                onClick={() =>
                  document
                    .getElementById("apoiadores")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-gray-300 hover:text-white text-xs underline focus-visible:text-white focus-visible:ring-1 focus-visible:ring-white rounded px-1"
                aria-label="Ver todos os apoiadores"
              >
                Ver todos os apoiadores
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() =>
            document
              .getElementById("sobre")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start pt-2 hover:border-gray-300 focus-visible:border-gray-300 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-800 transition-colors"
          aria-label="Rolar para próxima seção"
          type="button"
        >
          <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
