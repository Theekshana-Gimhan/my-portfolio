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
    // If you have local screenshots, add the filenames here after placing originals in src/assets and running the optimizer
    image: '',
    gallery: [],
    liveUrl: 'https://ai-persona-simulator-85939737092.us-central1.run.app',
    githubUrl: 'https://github.com/Mad-marketing-git/ai-persona-simulator',
    tags: ['AI', 'Voice', 'Training', 'Cloud', 'GCP']
  }
];

export default projects;
