"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Layout, 
  Terminal, 
  Layers,
  Workflow,
  Cloud,
  Cpu
} from "lucide-react";

const skills = [
  { name: "Next.js / React", icon: Layout, size: "large" },
  { name: "Snowflake", icon: Database, size: "medium" },
  { name: "TypeScript", icon: Code2, size: "small" },
  { name: "Airflow", icon: Workflow, size: "medium" },
  { name: "Docker", icon: Layers, size: "small" },
  { name: "Azure DevOps", icon: Cloud, size: "small" },
  { name: "Vector Similarity", icon: Cpu, size: "large" },
  { name: "ABAC Logic", icon: Terminal, size: "small" },
];

export default function SkillsGrid() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-distressed text-5xl md:text-7xl font-bebas text-center mb-16 text-white">
          HABILIDADES <span className="text-brand-yellow">TÉCNICAS</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] md:auto-rows-[200px] gap-4 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const isLarge = skill.size === "large";
            const isMedium = skill.size === "medium";
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02, rotate: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`
                  relative overflow-hidden bg-brand-yellow p-6 flex flex-col items-center justify-center text-black group
                  ${isLarge ? "col-span-2 row-span-2" : ""}
                  ${isMedium ? "col-span-1 row-span-2" : ""}
                `}
              >
                <skill.icon className={`
                  ${isLarge ? "w-24 h-24" : "w-12 h-12"} 
                  mb-4 group-hover:scale-110 transition-transform duration-300
                `} />
                <span className={`
                  font-bebas text-center uppercase tracking-tighter
                  ${isLarge ? "text-4xl" : "text-xl"}
                `}>
                  {skill.name}
                </span>
                
                {/* Decorative Pattern */}
                <div className="absolute top-2 right-2 opacity-10 group-hover:opacity-20 transition-opacity">
                  <div className="flex gap-1">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-1 h-1 bg-black rounded-full" />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
