
import { useMemo, useState } from 'react';
import type { Project } from '../../../data/projects';
import dataProjects from '../../../data/projects';
import imageManifest from '../../../utils/imageManifest';

/**
 * ProjectsSection Component
 * ========================
 * 
 * Comprehensive portfolio showcase featuring project cards with detailed modal views.
 * Implements a data-driven architecture for easy project management and scalability.
 * 
 * Key Features:
 * - Alternating layout grid (zigzag pattern) for visual interest
 * - Scroll-triggered entrance animations with staggered timing
 * - Interactive project modal with gallery, features, and tech stack
 * - Hover effects on cards with glassmorphism styling
 * - Responsive design with mobile-first approach
 * - External links to live demos and source code
 * 
 * Animation Strategy:
 * - Cards animate from sides based on their index (even from left, odd from right)
 * - Modal uses backdrop blur and scale transitions for smooth entry/exit
 * - Hover effects include image scaling, border glow, and gradient overlays
 * 
 * Data Structure:
 * - Projects array contains all project metadata (title, description, tech stack, etc.)
 * - Each project includes gallery images, features list, and external URLs
 * - Modal state managed through selectedProject useState hook
 */
export default function ProjectsSection() {
  // Modal state management - selectedProject contains the currently viewed project data
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  /*
   * Projects Data Array
   * ──────────────────
   * Structured project data for portfolio showcase.
   * Each project contains comprehensive metadata for modal display:
   * - Basic info: title, description, fullDescription
   * - Technical: techStack array, features list
   * - Visual: image, gallery array of screenshots
   * - Links: liveUrl, githubUrl for external navigation
   * 
   * Future Enhancement: This could be moved to a CMS, JSON file, or API endpoint
   */

  // Prepare projects from data module
  const projects: Project[] = useMemo(() => dataProjects, []);

  // Resolve image URL: if value looks like a local filename, try manifest preferred jpg/webp
  const resolveImage = (value?: string): string => {
    if (!value) return '';
    const looksLikeLocal = typeof value === 'string' && !/^https?:\/\//i.test(value);
    if (!looksLikeLocal) return value;
    const entry = imageManifest.getPreferredAndSrcset(value);
    if (entry?.webp) return entry.webp;
    if (entry?.jpg) return entry.jpg;
    // Fallback to original in assets (bundled by Vite if imported elsewhere)
    return '';
  };

  /*
   * Modal Control Functions
   * ──────────────────────
   * Simple state handlers for project detail modal:
   * - openProjectModal: Sets the selected project and triggers modal display
   * - closeProjectModal: Clears selection and hides modal
   * 
   * Modal visibility is controlled by conditional rendering based on selectedProject
   */
  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-32 relative bg-black">
      {/* 
        Decorative Background Elements
        ─────────────────────────────
        Subtle light spots scattered across the section for atmospheric depth.
        These small glowing dots add visual interest without being distracting.
        Positioned absolutely with varying sizes and opacity levels.
      */}
      <div className="absolute top-10 right-10 w-2 h-2 bg-white/20 rounded-full blur-sm"></div>
      <div className="absolute top-60 left-20 w-1 h-1 bg-[#D8ECF8]/30 rounded-full"></div>
      <div className="absolute bottom-20 right-1/4 w-1.5 h-1.5 bg-white/15 rounded-full blur-sm"></div>
      <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-[#D8ECF8]/25 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* 
          Section Header
          ─────────────
          Animated title with gradient text effect.
          Uses scroll-triggered animation with translate-y-10 starting state.
        */}
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
          <div className="text-[#D8ECF8]/60 text-sm font-[\'Inter\'] tracking-wider mb-4">
            PORTFOLIO
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[\'Inter\'] bg-gradient-to-r from-white to-[#D8ECF8] bg-clip-text text-transparent">
            Featured Projects
          </h2>
        </div>

        {/* 
          Projects Grid Container
          ──────────────────────
          Vertical spacing with space-y-32 creates breathing room between project cards.
          Each project card will use alternating layout patterns for visual variety.
        */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                /* 
                  Alternating Layout Logic
                  ───────────────────────
                  Even-indexed projects (0, 2, 4...): Image left, content right (default)
                  Odd-indexed projects (1, 3, 5...): Image right, content left (lg:grid-flow-col-dense)
                  
                  This creates a zigzag layout that's visually engaging and prevents monotony.
                */
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* 
                Project Image Section
                ────────────────────
                Interactive image with hover effects and modal trigger.
                Animation direction alternates based on project index.
              */}
              <div
                className={`animate-on-scroll opacity-0 transition-all duration-1000 ${
                  /* Animation entrance direction based on layout */
                  index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'
                } ${
                  /* Grid positioning for alternating layout */
                  index % 2 === 1 ? 'lg:col-start-2' : ''
                }`}
              >
                {/* Image container with glow effect and click handler */}
                <div className="relative group cursor-pointer" onClick={() => openProjectModal(project)}>
                  {/* Glow effect that intensifies on hover */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#D8ECF8]/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  
                  {/* Main image with border and hover scaling */}
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 group-hover:border-[#D8ECF8]/30 transition-all duration-500">
                    {resolveImage(project.image) ? (
                      <img
                        src={resolveImage(project.image)}
                        alt={project.title}
                        className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-80 bg-gradient-to-br from-[#0b0e1a] to-[#101528] flex items-center justify-center text-center">
                        <div>
                          <div className="text-[#D8ECF8] text-2xl font-bold font-['Inter']">{project.title}</div>
                          <div className="text-white/50 mt-2">Screenshot coming soon</div>
                        </div>
                      </div>
                    )}
                    {/* Dark overlay that appears on hover for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05060f]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>

              {/* 
                Project Content Section
                ──────────────────────
                Text content with project details, tech stack, and CTA button.
                Animation timing is staggered with delay-200 for smooth reveal.
              */}
              <div
                className={`animate-on-scroll opacity-0 transition-all duration-1000 delay-200 ${
                  /* Animation direction opposite to image for balanced entrance */
                  index % 2 === 0 ? 'translate-x-10' : '-translate-x-10'
                }`}
              >
                {/* Project metadata and numbering */}
                <div className="text-[#D8ECF8]/60 text-sm font-[\'Inter\'] tracking-wider mb-4">
                  PROJECT {String(index + 1).padStart(2, '0')} {/* Zero-padded numbering (01, 02, etc.) */}
                </div>
                
                {/* Project title with responsive typography */}
                <h3 className="text-3xl lg:text-4xl font-bold font-[\'Inter\'] mb-6 text-white">
                  {project.title}
                </h3>
                
                {/* Project description with readability-focused styling */}
                <p className="text-white/70 text-lg leading-relaxed mb-8 font-[\'Inter\']">
                  {project.description}
                </p>

                {/* 
                  Technology Stack Display
                  ───────────────────────
                  Interactive badges showing the technologies used in the project.
                  Each badge has subtle hover effects with border and background changes.
                */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-[\'Inter\'] text-[#D8ECF8]/80 hover:border-[#D8ECF8]/30 hover:bg-[#D8ECF8]/5 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* 
                  View Project CTA Button
                  ──────────────────────
                  Primary action button with gradient styling and arrow icon.
                  Features hover effects including translation of the arrow icon.
                */}
                <button
                  onClick={() => openProjectModal(project)}
                  className="group relative px-8 py-3 bg-gradient-to-r from-[#D8ECF8]/20 to-[#D8ECF8]/10 border border-[#D8ECF8]/30 rounded-full font-[\'Inter\'] text-[#D8ECF8] hover:from-[#D8ECF8]/30 hover:to-[#D8ECF8]/20 hover:border-[#D8ECF8]/50 hover:shadow-lg hover:shadow-[#D8ECF8]/10 transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>View Project</span>
                    {/* Arrow icon with directional hover animation */}
                    <i className="ph ph-arrow-up-right text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"></i>
                  </span>
                  {/* Background glow effect that appears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D8ECF8]/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 
        Project Detail Modal
        ───────────────────
        Full-screen modal overlay with comprehensive project information.
        
        Modal Structure:
        - Backdrop with blur effect and click-to-close functionality
        - Main content card with overflow scroll for long content
        - Close button positioned absolutely in top-right
        - Detailed project information including gallery and features
        
        Modal Behavior:
        - Conditionally rendered based on selectedProject state
        - Backdrop click closes modal (event propagation stopped on content)
        - Escape key handling could be added for better UX
      */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={closeProjectModal} /* Backdrop click handler */
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-black/90 border border-[#D8ECF8]/20 rounded-3xl"
            onClick={(e) => e.stopPropagation()} /* Prevent modal close when clicking content */
          >
            {/* 
              Modal Close Button
              ─────────────────
              Floating close button with glassmorphism effect.
              Positioned absolutely to stay visible during scroll.
            */}
            <button
              onClick={closeProjectModal}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-[#D8ECF8]/20 hover:border-[#D8ECF8]/40 transition-all duration-300 cursor-pointer z-10"
            >
              <i className="ph ph-x text-white text-xl"></i>
            </button>

            <div className="p-8 md:p-12">
              {/* 
                Modal Header Section
                ───────────────────
                Project title and detailed description for the modal view.
                Uses the fullDescription field for more comprehensive information.
              */}
              <div className="mb-8">
                <div className="text-[#D8ECF8]/60 text-sm font-[\'Inter\'] tracking-wider mb-4">
                  PROJECT DETAILS
                </div>
                <h2 className="text-4xl md:text-5xl font-bold font-[\'Inter\'] text-white mb-6">
                  {selectedProject.title}
                </h2>
                <p className="text-white/70 text-lg leading-relaxed font-[\'Inter\'] max-w-3xl">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* 
                Main Project Image
                ─────────────────
                Large hero image for the project displayed prominently in the modal.
                Fixed height with object-cover for consistent display across projects.
              */}
              <div className="mb-8 relative overflow-hidden rounded-2xl border border-[#D8ECF8]/20">
                {resolveImage(selectedProject.image) ? (
                  <img
                    src={resolveImage(selectedProject.image)}
                    alt={selectedProject.title}
                    className="w-full h-96 object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-96 bg-gradient-to-br from-[#0b0e1a] to-[#101528] flex items-center justify-center text-center">
                    <div>
                      <div className="text-[#D8ECF8] text-3xl font-bold font-['Inter']">{selectedProject.title}</div>
                      <div className="text-white/50 mt-2">Gallery coming soon</div>
                    </div>
                  </div>
                )}
              </div>

              {/* 
                Project Gallery Grid
                ────────────────────
                3-column responsive grid of project screenshots.
                Each image is clickable and includes hover scaling effects.
                Future enhancement: Could implement lightbox functionality.
              */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {(selectedProject.gallery ?? []).map((image: string, index: number) => (
                  <div key={index} className="relative overflow-hidden rounded-xl border border-white/10 hover:border-[#D8ECF8]/30 transition-all duration-300 cursor-pointer">
                    {resolveImage(image) ? (
                      <img
                        src={resolveImage(image)}
                        alt={`${selectedProject.title} screenshot ${index + 1}`}
                        className="w-full h-48 object-cover object-top hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-48 bg-gradient-to-br from-[#0b0e1a] to-[#101528] flex items-center justify-center text-white/50 text-sm">
                        Screenshot {index + 1}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* 
                  Features Section
                  ───────────────
                  Left column displaying key project features as a bullet list.
                  Each feature uses a circular bullet point with brand color.
                */}
                <div>
                  <h3 className="text-2xl font-bold font-[\'Inter\'] text-white mb-6">Key Features</h3>
                  <div className="space-y-3">
                    {selectedProject.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center space-x-3">
                        {/* Brand-colored bullet point */}
                        <div className="w-2 h-2 bg-[#D8ECF8] rounded-full"></div>
                        <span className="text-white/80 font-[\'Inter\']">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 
                  Technology Stack & Action Links
                  ──────────────────────────────
                  Right column with tech stack badges and external action buttons.
                  Includes live demo and source code links with distinct styling.
                */}
                <div>
                  <h3 className="text-2xl font-bold font-[\'Inter\'] text-white mb-6">Technology Stack</h3>
                  
                  {/* Tech stack badges with enhanced styling for modal context */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {selectedProject.techStack.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-[#D8ECF8]/10 border border-[#D8ECF8]/30 rounded-full text-sm font-[\'Inter\'] text-[#D8ECF8]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* 
                    External Action Buttons
                    ──────────────────────
                    Two distinct button styles:
                    1. Primary (Live Demo) - Uses brand gradient styling
                    2. Secondary (Source Code) - Uses muted styling with hover effects
                  */}
                  <div className="space-y-4">
                    {/* Primary CTA: Live Demo */}
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer" /* Security best practice for external links */
                        className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#D8ECF8]/20 to-[#D8ECF8]/10 border border-[#D8ECF8]/30 rounded-xl font-[\'Inter\'] text-[#D8ECF8] hover:from-[#D8ECF8]/30 hover:to-[#D8ECF8]/20 hover:border-[#D8ECF8]/50 transition-all duration-300 cursor-pointer whitespace-nowrap"
                      >
                        <i className="ph ph-globe text-lg"></i>
                        <span>View Live Demo</span>
                      </a>
                    )}
                    
                    {/* Secondary CTA: Source Code */}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-white/5 border border-white/20 rounded-xl font-[\'Inter\'] text-white hover:border-[#D8ECF8]/30 hover:bg-[#D8ECF8]/5 transition-all duration-300 cursor-pointer whitespace-nowrap"
                      >
                        <i className="ph ph-github-logo text-lg"></i>
                        <span>View Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
