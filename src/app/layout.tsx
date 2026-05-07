import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pedro Viana | Portfolio",
  description: "Desenvolvedor Full-Stack | Linha do Tempo de Conquistas",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.variable} ${bebasNeue.variable} antialiased bg-black text-white bg-grain`}
      >
        {/* Hidden SVG Filter for Distressed Text Effect */}
        <svg style={{ position: "absolute", width: 0, height: 0 }} aria-hidden="true">
          <filter id="distress-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>
        </svg>
        
        {children}
      </body>
    </html>
  );
}
