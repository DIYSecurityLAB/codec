import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CODEC 2025 - Congresso de Desenvolvimento nos Esportes de Contato",
  description:
    "Artes Marciais: Tradição, Corpo e Mente em Harmonia. 20 de Setembro de 2025, ETEC Itaquera II, São Paulo/SP. Evento gratuito com responsabilidade social - traga um brinquedo como ingresso.",
  keywords: [
    "artes marciais",
    "esportes de contato",
    "congresso",
    "educação física",
    "inclusão social",
    "São Paulo",
    "OPAM",
    "responsabilidade social",
  ],
  authors: [{ name: "OPAM - Organização Paulista de Artes Marciais" }],
  creator: "OPAM - NIN DO RYU",
  openGraph: {
    title: "CODEC 2025 - Congresso de Desenvolvimento nos Esportes de Contato",
    description: "Artes Marciais: Tradição, Corpo e Mente em Harmonia",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "CODEC 2025 - Congresso de Desenvolvimento nos Esportes de Contato",
    description: "Artes Marciais: Tradição, Corpo e Mente em Harmonia",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
