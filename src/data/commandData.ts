// src/data/commandData.ts
export type CommandCardData = {
  id: string;
  title?: string;
  lines: string[]; // command(s) and output lines
};

export const commandData: CommandCardData[] = [
  {
    id: 'whoami',
    title: 'About',
    lines: [
      'whoami',
      'Haris Saeed — Full-stack Software Engineer',
      'based in New, USA • building stuff since my teens',
      'Games, travel, and snapping photos when I’m not shipping code',
    ],
  },

  {
    id: 'skills',
    title: 'Skills',
    lines: [
      'skills list',
      'JavaScript · TypeScript · React · Next.js',
      'Node · Express · PostgreSQL · Prisma',
      'HTML · CSS · Tailwind · Responsive Design',
      'Testing · Git · CI/CD · Performance tuning',
    ],
  },

  {
    id: 'focus',
    title: 'Focus',
    lines: [
      'focus',
      'building fast, accessible web apps',
      'shipping readable, maintainable code',
      'clean UX, tiny interactions, and performance that feels instant',
    ],
  },
];
