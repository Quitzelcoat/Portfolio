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
      'Haris Saeed — Software Engineer',
      'based in Philadelphia, USA',
    ],
  },

  {
    id: 'skills',
    title: 'Skills',
    lines: [
      'skills list',
      'JavaScript · TypeScript · React · CSS ...',
      'Node · PostgreSQL · Testing ...',
    ],
  },

  {
    id: 'focus',
    title: 'Focus',
    lines: [
      'focus',
      'building fast, accessible web apps',
      'shipping maintainable code',
    ],
  },
];
