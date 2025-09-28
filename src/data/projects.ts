/**
 * Project data model and list
 * ---------------------------
 * How to add a project:
 * - Prefer local images for performance: copy originals into `src/assets/` (e.g., project1.jpg)
 * - Run: npm run optimize:images (generates responsive variants + manifest)
 * - Use the original filename in `image` and `gallery` (e.g., 'project1.jpg')
 *   The UI will resolve to the optimized assets via the manifest.
 * - Remote images (https://...) are also supported, but local is recommended.
 */

export type Project = {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  techStack: string[];
  features: string[];
  image: string; // URL or local asset filename (e.g., 'myproject.jpg')
  gallery?: string[]; // optional: URLs or local asset filenames
  liveUrl?: string;
  githubUrl?: string;
  tags?: string[];
};

/**
 * Real projects go here. Example template:
 * {
 *   id: 1,
 *   title: 'Your Project',
 *   description: 'One-liner for the card',
 *   fullDescription: 'Longer description for the modal',
 *   techStack: ['React', 'Node.js'],
 *   features: ['Feature A', 'Feature B'],
 *   image: 'project1.jpg', // place original at src/assets/project1.jpg and run optimizer
 *   gallery: ['project1.jpg', 'project1_screen2.jpg'],
 *   liveUrl: 'https://your-demo-url',
 *   githubUrl: 'https://github.com/you/your-repo',
 * }
 */
export const projects: Project[] = [
  {
    id: 1,
    title: 'AI Persona Simulator & Evaluator',
    description: 'Interactive AI persona training with voice, real-time scoring, and customizable scenarios.',
    fullDescription:
      'An interactive training simulation tool that generates AI personas for professional training scenarios using Google\'s Gemini AI. Voice-enabled conversations, real-time evaluation with detailed feedback, and cloud deployment for instant access.',
    techStack: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Framer Motion',
      'Google Gemini AI',
      'Web Speech API',
      'Docker',
      'Google Cloud Run',
      'GCP'
    ],
    features: [
      'AI personas with difficulty levels',
      'Voice recognition and TTS',
      'Real-time evaluation and scoring',
      'Customizable scenarios and criteria',
      'Country/culture context support',
      'Responsive design',
      'Cloud deployed (GCP)',
      'Microphone permission handling',
      'Enhanced user feedback during speech'
    ],
  // Local screenshots placed in src/assets/pro1
  image: 'pro1/pro1s1.PNG',
  gallery: ['pro1/pro1s2.PNG', 'pro1/pro1s3.PNG', 'pro1/pro1s4.PNG'],
    liveUrl: 'https://ai-persona-simulator-85939737092.us-central1.run.app',
    githubUrl: 'https://github.com/Mad-marketing-git/ai-persona-simulator',
    tags: ['AI', 'Voice', 'Training', 'Cloud', 'GCP']
  },
  {
    id: 2,
    title: 'KPI Dashboard',
    description: 'Web application to track and visualize KPIs with auth, CRUD, charts, export, and role-based access.',
    fullDescription:
      'A KPI Dashboard designed to manage and visualize Key Performance Indicators with modules like Admissions and Visa. Built with ASP.NET Core and EF Core, it includes authentication, role-based access, data management, reporting, and a comprehensive dashboard.',
    techStack: [
      'ASP.NET Core',
      'Entity Framework Core',
      'SQL Server',
      'Bootstrap',
      'jQuery',
      'Chart.js'
    ],
    features: [
      'User authentication (ASP.NET Core Identity)',
      'KPI CRUD management',
      'Dashboard with charts and progress tracking',
      'Data export (CSV, PDF)',
      'Email notifications',
      'Role-based access control'
    ],
    image: 'pro2/pro2s1.PNG',
    gallery: ['pro2/pro2s2.PNG', 'pro2/pro2s3.PNG', 'pro2/pro2s4.PNG'],
    // Add these when available
    // liveUrl: 'https://your-live-url',
    // githubUrl: 'https://github.com/your-username/KPI_Dashboard',
    tags: ['Dashboard', 'KPIs', 'Charts', 'Reporting']
  },
  {
    id: 3,
    title: 'FinTrack',
    description: 'AI Studio app scaffold with local run and Gemini API integration.',
    fullDescription:
      'FinTrack is an AI Studio app scaffold with straightforward local development: install dependencies, set a GEMINI_API_KEY in .env.local, and start the dev server. The repository documents pushing to an additional remote mirror and standard Node tooling.',
    techStack: ['Node.js', 'Google Gemini API'],
    features: [
      'Local development with npm',
      'Environment-based API key configuration',
      'Dev server run workflow'
    ],
    image: 'pro3/pro3s1.PNG',
    gallery: ['pro3/pro3s2.PNG', 'pro3/pro3s3.PNG', 'pro3/pro3s4.PNG'],
    // Add these when available
    // liveUrl: 'https://your-live-url',
    githubUrl: 'https://github.com/Mad-marketing-git/FinTrack',
    tags: ['AI', 'Gemini', 'Scaffold']
  }
];

export default projects;
