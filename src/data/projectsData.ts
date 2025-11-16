export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
};

export const projectsData: Project[] = [
  {
    id: 'p1',
    title: 'Portfolio Site',
    description:
      'A personal portfolio built with React + TypeScript. Responsive layout, accessible components, and deployed on Netlify.',
    tech: ['React', 'TypeScript', 'CSS Modules'],
    imageUrl: '/images/autumn.png',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'p2',
    title: 'Todo App',
    description:
      'A task management app with CRUD, localStorage persistence and filters. Good for practicing state management.',
    tech: ['React', 'Hooks', 'LocalStorage'],
    imageUrl: '/images/autumn.png',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'p3',
    title: 'API Dashboard',
    description:
      'Dashboard that consumes external APIs and visualizes data. Includes charts and responsive grid.',
    tech: ['React', 'Chart.js', 'Fetch API'],
    imageUrl: '/images/autumn.png',
    liveUrl: '#',
    repoUrl: '#',
  },
];
