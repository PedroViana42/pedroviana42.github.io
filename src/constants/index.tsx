import React from 'react';
import {
    Terminal,
    Cpu,
    Database,
    Layers,
    Code2,
    Workflow,
    Box,
    Cloud
} from 'lucide-react';
import { Project } from '../types';

export const PROJECTS: Project[] = [
    {
        id: '1',
        title: 'Subsolo',
        description: 'Anonymous university network with 48h temporal identities. Engineered for high-performance with sub-100ms query latency and irreversible hashing to ensure data privacy and structural anonymity.',
        tags: ['React 19', 'Express', 'PostgreSQL', 'Prisma', 'Docker'],
        category: 'Web',
        metrics: [
            { label: 'Latency', value: '<100ms' },
            { label: 'Privacy', value: 'Irreversible Hashing' },
            { label: 'Architecture', value: 'Temporal Identity' }
        ],
        githubUrl: 'https://github.com/PedroViana42/Subsolo',
        liveUrl: 'https://subsolo.usenexora.online/'
    },
    {
        id: '2',
        title: 'Northwind ETL Data Pipeline',
        description: 'End-to-end data engineering pipeline focused on Data Quality and Governance. Orchestrates high-volume sales data from PostgreSQL to Snowflake with robust validation and schema enforcement.',
        tags: ['Airflow', 'Snowflake', 'Python', 'Pandas'],
        category: 'Data',
        metrics: [
            { label: 'Governance', value: 'Data Quality' },
            { label: 'Pipeline', value: 'Automated ETL' }
        ],
        githubUrl: 'https://github.com/PedroViana42/Northwind-Data-Pipeline'
    },
    {
        id: '3',
        title: 'ABAC Rules Engine & Manager',
        description: 'Enterprise-grade security engine for granular Attribute-Based Access Control. Implements mission-critical authorization logic with high-performance rule evaluations for complex organizational hierarchies.',
        tags: ['Next.js', 'Fastify', 'Prisma', 'PostgreSQL'],
        category: 'DevOps',
        metrics: [
            { label: 'Security', value: 'Enterprise-Grade' },
            { label: 'Logic', value: 'Attribute-Based' }
        ],
        githubUrl: 'https://github.com/PedroViana42/abac-manager'
    },
    {
        id: '4',
        title: 'Azure DevOps CI/CD Infrastructure',
        description: 'Hardened CI/CD infrastructure for Next.js deployments. Implements self-hosted agents on-premise to bypass firewall restrictions while maintaining organizational security standards.',
        tags: ['Azure DevOps', 'CI/CD', 'Next.js', 'IIS'],
        category: 'DevOps',
        metrics: [
            { label: 'Deployment', value: 'Automated' },
            { label: 'Security', value: 'On-Premise' }
        ],
        githubUrl: 'https://github.com/PedroViana42/azure-cicd-self-hosted'
    }
];

export const SKILLS = [
    { name: 'Next.js / React', icon: React.createElement(Code2, { size: 18 }), category: 'Frontend' },
    { name: 'TypeScript', icon: React.createElement(Terminal, { size: 18 }), category: 'Frontend' },
    { name: 'Airflow', icon: React.createElement(Workflow, { size: 18 }), category: 'Data' },
    { name: 'Snowflake', icon: React.createElement(Database, { size: 18 }), category: 'Data' },
    { name: 'Docker', icon: React.createElement(Box, { size: 18 }), category: 'Infra' },
    { name: 'Azure DevOps', icon: React.createElement(Cloud, { size: 18 }), category: 'Infra' },
    { name: 'Vector Similarity', icon: React.createElement(Cpu, { size: 18 }), category: 'AI' },
    { name: 'ABAC Logic', icon: React.createElement(Layers, { size: 18 }), category: 'AI' },
];
