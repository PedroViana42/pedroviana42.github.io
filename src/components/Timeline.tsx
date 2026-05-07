"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const milestones = [
  {
    year: "2023",
    title: "CIÊNCIA DA COMPUTAÇÃO",
    description: "Ingresso acadêmico para aprofundar fundamentos em algoritmos e sistemas distribuídos, conectando a vivência prática ao rigor científico da computação.",
    side: "left",
  },
  {
    year: "2025",
    title: "ESPECIALIZAÇÃO FULL-STACK",
    description: "Consolidação de arquiteturas escaláveis com Next.js, NestJS e Fastify. Foco em alta performance de APIs e integração de serviços modernos com Prisma e PostgreSQL.",
    side: "right",
  },
  {
    year: "2026",
    title: "AUTOMAÇÃO E DATA PIPELINES",
    description: "Foco em fluxos inteligentes de dados e automação de conhecimento (PKM). Implementação de pipelines com Snowflake e Airflow, além de sistemas para extração semântica e orquestração de LLMs para processamento autônomo de informações.",
    side: "left",
  },
];

export default function Timeline() {
  return (
    <section className="relative py-24 bg-brand-black overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-distressed text-5xl md:text-7xl font-bebas text-center mb-24">
          LINHA DO TEMPO <span className="text-brand-yellow">DE CONQUISTAS</span>
        </h2>

        <div className="relative max-w-6xl mx-auto">
          {/* Central Dashed Line */}
          <div className="timeline-line" />

          {/* Milestone Items */}
          <div className="space-y-24 md:space-y-0">
            {milestones.map((item, index) => (
              <div 
                key={index} 
                className={cn(
                  "flex flex-col md:flex-row items-center w-full mb-12 md:mb-24",
                  item.side === "left" ? "md:flex-row-reverse" : ""
                )}
              >
                {/* Content Card */}
                <motion.div 
                  initial={{ opacity: 0, x: item.side === "left" ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={cn(
                    "w-full md:w-[45%] p-8 bg-brand-charcoal border-l-4 border-brand-yellow",
                    item.side === "left" ? "md:border-l-0 md:border-r-4 text-right" : "text-left"
                  )}
                >
                  <span className="font-bebas text-brand-yellow text-4xl mb-2 block tracking-widest">
                    {item.year}
                  </span>
                  <h3 className="text-distressed text-2xl md:text-3xl font-bebas text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 font-inter leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>

                {/* Center Node */}
                <div className="absolute left-[20px] md:left-1/2 w-4 h-4 bg-brand-yellow rounded-full transform -translate-x-1/2 z-20 shadow-[0_0_15px_rgba(255,215,0,0.5)]" />
                
                {/* Spacer for empty side */}
                <div className="hidden md:block w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
