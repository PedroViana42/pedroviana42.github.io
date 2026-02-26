export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    category: 'Web' | 'Data' | 'AI' | 'DevOps';
    metrics?: { label: string; value: string }[];
    githubUrl?: string;
}
