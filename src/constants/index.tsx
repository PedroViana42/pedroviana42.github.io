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
        description: 'An anonymous university social network for confessions, gossip, and public utility. Features temporal identities (48h nicks) to preserve long-term privacy.',
        tags: ['React 19', 'Express', 'PostgreSQL', 'Prisma', 'Docker'],
        category: 'Web',
        metrics: [{ label: 'Auth', value: 'JWT' }, { label: 'Sync', value: 'Nick Rotation' }],
        githubUrl: 'https://github.com/PedroViana42/Subsolo',
        liveUrl: 'https://subsolo.usenexora.online/'
    },
    {
        id: '2',
        title: 'Northwind ETL Data Pipeline',
        description: 'An end-to-end data engineering pipeline using Apache Airflow to orchestrate sales data from PostgreSQL to Snowflake with Pandas transformations.',
        tags: ['Airflow', 'Snowflake', 'Python', 'PostgreSQL'],
        category: 'Data',
        metrics: [{ label: 'Orchestration', value: 'Airflow' }, { label: 'Storage', value: 'Snowflake' }],
        githubUrl: 'https://github.com/PedroViana42/Northwind-Data-Pipeline'
    },
    {
        id: '3',
        title: 'ABAC Rules Engine & Manager',
        description: 'A granular permission system using attributes and dynamic conditions. Features a visual dashboard and a high-performance rule engine.',
        tags: ['Next.js', 'Fastify', 'Prisma', 'PostgreSQL'],
        category: 'DevOps',
        metrics: [{ label: 'Logic', value: 'Attribute-Based' }, { label: 'Stack', value: 'Full-Stack' }],
        githubUrl: 'https://github.com/PedroViana42/abac-manager'
    },
    {
        id: '4',
        title: 'Azure DevOps CI/CD & Self-Hosted Agent',
        description: 'Automated build and deploy for Next.js on-premise servers via Azure DevOps, bypassing firewall restrictions without public IPs.',
        tags: ['Azure DevOps', 'CI/CD', 'Next.js', 'IIS'],
        category: 'DevOps',
        metrics: [{ label: 'Deployment', value: 'Automated' }, { label: 'Security', value: 'On-Premise' }],
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
