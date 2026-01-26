export type Project = {
  id: string;
  title: string;
  description: string;
  role: string;
  timeline: string;
  overview: string;
  problem: string;
  solution: string;
  highlights: string[];
  images?: { src: string; alt: string }[];
  tech: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
};

export const projectsData: Project[] = [
  {
    id: 'blog-api',
    title: 'PAPERLANE',
    description:
      'A full‑stack blogging platform where users can create, publish, and manage posts with a comment system and secure authentication.',
    role: 'Full‑stack Developer',
    timeline: '2026',
    overview:
      'A full‑stack blogging platform where users can create, publish, and manage posts with a comment system and secure authentication.',
    problem:
      'I wanted a realistic CRUD application that covers authentication, content management, and user interaction, similar to a production blogging platform.',
    solution:
      'I designed a REST API in Node.js with JWT auth and a React frontend that handles post creation, drafts, editing, and a full comment flow.',
    highlights: [
      'Secure auth with JWT and protected routes for post management',
      'Draft vs published states for posts, with full CRUD operations',
      'Comment system linked to both posts and authors',
    ],
    tech: [
      'React',
      'TypeScript',
      'CSS3',
      'Node.js',
      'Express',
      'PostgreSQL',
      'JWT',
    ],
    imageUrl: '/images/1paperlane/home.png',
    liveUrl: 'https://your-live-link.com',
    repoUrl: 'https://github.com/Quitzelcoat/blog-api',
    images: [
      {
        src: '/images/1paperlane/home.png',
        alt: 'Blog API home feed with list of posts',
      },
      {
        src: '/images/1paperlane/login.png',
        alt: 'Blog API login page',
      },
      {
        src: '/images/1paperlane/newPost.png',
        alt: 'Create new post form',
      },
      {
        src: '/images/1paperlane/post.png',
        alt: 'Single post with comments',
      },
      {
        src: '/images/1paperlane/post2.png',
        alt: 'Single post with comments - continued',
      },
      {
        src: '/images/1paperlane/userPosts.png',
        alt: 'User dashboard with list of user posts',
      },
    ],
  },
  {
    id: 'odling',
    title: 'Odling',
    description:
      'A modern social app built as my capstone for The Odin Project, where users can sign up, share posts, and grow their network with a familiar, clean interface.',
    role: 'Full‑stack Developer',
    timeline: '2024',
    overview:
      'A modern social app built as my capstone for The Odin Project, where users can sign up, share posts, and grow their network with a familiar, clean interface.',
    problem:
      'I wanted to recreate a realistic social platform that covers authentication, relationships between users, and rich interactions like likes, comments, and notifications while keeping the UX approachable.',
    solution:
      'I designed a full‑stack app with secure auth, a follow system, and a curated feed that surfaces posts from people you follow, wrapped in a responsive UI with profile customization, discovery, and real‑time style notifications.',
    highlights: [
      'Secure signup, login, and guest access to explore the app without creating an account',
      'Follow requests with accept/reject flow, plus a feed that only shows posts from followed users',
      'Rich user profiles with avatar, bio, and personal info editing',
      'Image uploads for posts and profile pictures using cloud storage',
      'Notification sidebar for follow requests, likes, and comments',
      'User discovery and search to find new people on the platform',
    ],
    tech: [
      'React',
      'CSS3',
      'Axios',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Passport.js',
      'JWT',
      'Cloudinary',
    ],
    imageUrl: '/images/2odling/home.png',
    liveUrl: 'https://your-odling-live-link.com',
    repoUrl: 'https://github.com/Quitzelcoat/Odling',
    images: [
      {
        src: '/images/2odling/home.png',
        alt: 'Odling landing page with hero section and auth actions',
      },
      {
        src: '/images/2odling/login.png',
        alt: 'Odling login page',
      },
      {
        src: '/images/2odling/feed.png',
        alt: 'Feed showing posts from followed users with likes and comments',
      },
      {
        src: '/images/2odling/userProfile.png',
        alt: 'User profile with avatar, bio, and posts',
      },
      {
        src: '/images/2odling/editProfile.png',
        alt: 'Edit profile page with avatar upload and bio editing',
      },
      {
        src: '/images/2odling/friendSearch.png',
        alt: 'Friend search page to discover new users',
      },
      {
        src: '/images/2odling/newPost.png',
        alt: 'Create new post form with image upload',
      },
      {
        src: '/images/2odling/otherUsers.png',
        alt: 'Other users page showing a list of all users',
      },
      {
        src: '/images/2odling/postEdit.png',
        alt: 'Edit post form with existing content loaded',
      },
      {
        src: '/images/2odling/postPage.png',
        alt: 'Single post page with comments and likes',
      },
    ],
  },

  {
    id: 'messenger-app',
    title: 'ConnectSphere',
    description:
      'A full‑stack real‑time messaging app for one‑on‑one and group conversations, focused on clear message history, profile customization, and a fast, uncluttered interface.',
    role: 'Full‑stack Developer',
    timeline: '2024',
    overview:
      'A full‑stack real‑time messaging app for one‑on‑one and group conversations, focused on clear message history, profile customization, and a fast, uncluttered interface.',
    problem:
      'I wanted to practice building a production‑style messaging experience end‑to‑end, including real‑time conversations, message editing, and managing user profiles and relationships.',
    solution:
      'I implemented a React frontend backed by a Node/Express API with a PostgreSQL database, using Prisma and JWT‑based auth to handle user accounts, conversations, and full CRUD operations on messages and groups.',
    highlights: [
      'Secure signup and login with encrypted passwords and protected routes',
      'One‑on‑one messaging with live updates and full message history per conversation',
      'Message editing and deletion, with timestamps and sender tracking on every message',
      'User list for discovering other users (excluding the current user) and starting new chats',
      'User profiles with avatar, bio, and account details that can be updated from within the app',
      'Group conversations with create, update, and member management flows',
    ],
    tech: [
      'React',
      'CSS3',
      'Context API',
      'Axios',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Prisma',
      'JWT',
      'bcryptjs',
    ],
    imageUrl: '/images/3connectsphere/home.png',
    liveUrl: 'https://your-messenger-live-link.com',
    repoUrl: 'https://github.com/Quitzelcoat/messanger-app',
    images: [
      {
        src: '/images/3connectsphere/home.png',
        alt: 'ConnectSphere main messaging interface with user list and conversations',
      },
      {
        src: '/images/3connectsphere/signup.png',
        alt: 'ConnectSphere signup screen with email and password fields',
      },
      {
        src: '/images/3connectsphere/allUsers.png',
        alt: 'ConnectSphere all users list',
      },
      {
        src: '/images/3connectsphere/chat.png',
        alt: 'ConnectSphere chat view with message bubbles, timestamps, and input box',
      },
      {
        src: '/images/3connectsphere/profile1.png',
        alt: 'ConnectSphere user profile page with avatar, bio, and editable details',
      },
      {
        src: '/images/3connectsphere/profile2.png',
        alt: 'ConnectSphere user profile page with avatar, bio, and editable details',
      },
    ],
  },
];
