import { Palette, Server, Database, type LucideIcon } from 'lucide-react';
interface SkillCategory { id: number; title: string; icon: LucideIcon; description: string; technologies: { name: string; logo: string }[]; }

export const skillCategories: SkillCategory[] = [
    {
      id: 0,
      title: "Front-End",
      icon: Palette,
      description: "Interfaces modernas e responsivas",
      technologies: [
        { name: "React", logo: "⚛️" },
        { name: "Next.js", logo: "▲" },
        { name: "TypeScript", logo: "📘" },
        { name: "Tailwind CSS", logo: "🎨" }
      ]
    },
    {
      id: 1,
      title: "Back-End",
      icon: Server,
      description: "APIs robustas e escaláveis",
      technologies: [
        { name: "Python", logo: "🐍" },
        { name: "FastAPI", logo: "🚀" },
        { name: "Node.js", logo: "🟢" },
        { name: "JWT", logo: "🔐" },
        { name: "Docker", logo: "🐳" },
        { name: "Git", logo: "📝" }
      ]
    },
    {
      id: 2,
      title: "Bancos de Dados",
      icon: Database,
      description: "Gerenciamento eficiente de dados",
      technologies: [
        { name: "PostgreSQL", logo: "🐘" },
        { name: "SQLite", logo: "💾" },
        { name: "SQLAlchemy", logo: "🔗" },
        { name: "Prisma", logo: "🔺" }
      ]
    }
  ];
