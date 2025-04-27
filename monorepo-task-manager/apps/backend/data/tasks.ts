// src/data/tasks.ts

export type Task = {
  id: number;
  title: string;
  description: string;
  status: boolean;
};

export const tasks: Task[] = [
  {
    id: 1,
    title: "Learn TypeScript",
    description: "Complete a basic course on TypeScript.",
    status: false,
  },
  {
    id: 2,
    title: "Build Task Manager Backend",
    description: "Setup Express server with CRUD APIs.",
    status: true,
  },
  {
    id: 3,
    title: "Create Frontend with Vite",
    description: "Initialize React project using Vite and Tailwind CSS.",
    status: false,
  },
  {
    id: 4,
    title: "Implement Redux Store",
    description: "Manage tasks globally with Redux Toolkit.",
    status: false,
  },
  {
    id: 5,
    title: "Connect Frontend to Backend",
    description: "Use Axios to fetch and update tasks from API.",
    status: false,
  },
  {
    id: 6,
    title: "Add Task Filters",
    description: "Allow users to filter tasks by completion status.",
    status: false,
  },
  {
    id: 7,
    title: "Style Application",
    description: "Use TailwindCSS to make the app look professional.",
    status: true,
  },
  {
    id: 8,
    title: "Deploy Backend",
    description: "Host Express app on Render or Railway.",
    status: false,
  },
  {
    id: 9,
    title: "Deploy Frontend",
    description: "Host React app on Vercel or Netlify.",
    status: false,
  },
  {
    id: 10,
    title: "Write Documentation",
    description: "Create a README.md with setup instructions.",
    status: false,
  },
];
