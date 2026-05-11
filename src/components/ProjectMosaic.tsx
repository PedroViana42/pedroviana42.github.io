"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  { 
    id: 1, 
    title: "SUBSOLO", 
    image: "/project_subsolo_v2.png", 
    size: "tall",
    description: "Rede universitária anônima com identidades temporárias. Foco em alta performance e privacidade estrutural.",
    githubUrl: "https://github.com/PedroViana42/Subsolo",
    liveUrl: "https://subsolo.usenexora.online/",
  },
  { 
    id: 2, 
    title: "NORTHWIND ETL", 
    image: "/project_northwind_v2.png", 
    size: "wide",
    description: "Pipeline de engenharia de dados end-to-end. Orquestração de PostgreSQL para Snowflake com foco em Data Quality.",
    githubUrl: "https://github.com/PedroViana42/Northwind-Data-Pipeline",
  },
  { 
    id: 3, 
    title: "ABAC RULES ENGINE", 
    image: "/project_abac_v2.png", 
    size: "normal",
    description: "Motor de segurança enterprise para controle de acesso granular baseado em atributos.",
    githubUrl: "https://github.com/PedroViana42/abac-manager",
  },
  { 
    id: 4, 
    title: "AZURE CI/CD INFRA", 
    image: "/project_azure_v2.png", 
    size: "normal",
    description: "Infraestrutura de CI/CD para Next.js utilizando agentes self-hosted on-premise.",
    githubUrl: "https://github.com/PedroViana42/azure-cicd-self-hosted",
  },
];

export default function ProjectMosaic() {
  return (
    <section className="py-24 bg-brand-charcoal">
      <div className="container mx-auto px-4">
        <h2 className="text-distressed text-5xl md:text-7xl font-bebas text-center mb-16 text-white">
          MOSAICO DE <span className="text-brand-yellow">PROJETOS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto auto-rows-[300px]">
          {projects.map((project, index) => {
            const isTall = project.size === "tall";
            const isWide = project.size === "wide";
            const projectUrl = project.liveUrl ?? project.githubUrl;

            return (
              <motion.a
                key={project.id}
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`
                  relative group overflow-hidden rounded-lg cursor-pointer block focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-4 focus-visible:ring-offset-brand-charcoal
                  ${isTall ? "md:row-span-2" : ""}
                  ${isWide ? "md:col-span-2" : ""}
                `}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover md:grayscale md:group-hover:grayscale-0 transition-all duration-700 md:group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/65 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-5 md:p-6 text-center">
                  <h3 className="text-brand-yellow font-bebas text-3xl mb-4 transform md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white text-sm mb-6 max-w-xs transform md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {project.description}
                  </p>
                  <span
                    className="flex items-center gap-2 bg-brand-yellow text-black px-6 py-2 rounded-full font-bebas text-xl tracking-wider"
                  >
                    VER PROJETO <ExternalLink size={18} />
                  </span>
                </div>

                {/* Corner Label */}
                <div className="absolute top-4 left-4 bg-brand-yellow text-black px-3 py-1 font-bebas text-sm tracking-widest z-10">
                  0{project.id}
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
