
import imageManifest from '../../../utils/imageManifest';

/**
 * AboutSection Component
 * ----------------------
 * Personal introduction section that showcases the developer's profile,
 * core skills, and provides a transition to the projects section.
 * 
 * Key Features:
 * - Responsive two-column layout (stacks on mobile)
 * - Animated profile image with hover effects
 * - Skills visualization using icons with tooltips
 * - Smooth scroll-triggered animations using intersection observer
 * - Decorative background elements for visual depth
 * 
 * Animation Strategy:
 * - Uses `animate-on-scroll` utility classes that work with global CSS
 * - Profile image slides in from left with opacity fade
 * - Content slides in from right with staggered delay
 * - Skills icons have individual hover animations
 */
export default function AboutSection() {
  // Import local profile image from src/assets. Vite will handle bundling and
  // optimize the image during the build. Put your photo at src/assets/profile_pic.jpg
  // (the file was added to the repository already).
  // Note: Keep imports inside the module scope (top-level) so the bundler can
  // process them correctly.
  // `profilePic` is imported at the top of the file. Vite will resolve it.
  return (
    <section id="about" className="py-32 relative bg-black">
      {/* 
        Decorative Background Elements
        ─────────────────────────────
        Subtle floating dots positioned absolutely to create visual depth
        without interfering with content readability. Uses low opacity
        and blur effects for ambiance.
      */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full blur-sm"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-[#D8ECF8]/30 rounded-full"></div>
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-white/15 rounded-full blur-sm"></div>
      <div className="absolute top-60 right-1/3 w-1 h-1 bg-[#D8ECF8]/25 rounded-full"></div>

      {/* Main Content Container with responsive padding */}
      <div className="max-w-7xl mx-auto px-6">
        {/* 
          Two-Column Layout
          ─────────────────
          Grid system that stacks on mobile (default) and shows
          side-by-side on large screens. Gap provides consistent spacing.
        */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 
            Profile Image Section
            ─────────────────────
            Interactive profile photo with layered hover effects:
            1. Scroll animation: slides in from left with opacity fade
            2. Glow effect: gradient background that intensifies on hover
            3. Image lift: subtle upward movement on hover
            4. Border animation: color intensity increases on interaction
          */}
          <div className="animate-on-scroll opacity-0 -translate-x-10 transition-all duration-1000">
            <div className="relative group cursor-pointer">
              {/* Glowing background effect - positioned behind image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#D8ECF8]/20 to-transparent rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              <div className="relative">
                {/* Main image container with border and hover effects */}
                <div className="w-80 h-80 mx-auto relative overflow-hidden rounded-full border-2 border-[#D8ECF8]/30 group-hover:border-[#D8ECF8]/60 transition-all duration-500 group-hover:-translate-y-2">
                  <picture>
                    {/* Preferred modern format using manifest */}
                    {(() => {
                      const info = imageManifest.getPreferredAndSrcset('profile_pic.jpg');
                      if (info) {
                        return (
                          <>
                            <source srcSet={info.srcsetWebp} type="image/webp" />
                            <img
                              src={info.jpg}
                              alt="Theekshana Gimhan - Full Stack Developer"
                              className="w-full h-full object-cover object-top"
                            />
                          </>
                        );
                      }
                      // Fallback when manifest entry missing
                      return (
                        <img
                          src="/src/assets/profile_pic.jpg"
                          alt="Theekshana Gimhan - Full Stack Developer"
                          className="w-full h-full object-cover object-top"
                        />
                      );
                    })()}
                  </picture>
                  {/* Subtle overlay for consistent lighting */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05060f]/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* 
            Content Section
            ──────────────
            Text content with staggered entrance animation.
            Slides in from right with a delay to create a sequential reveal effect.
          */}
          <div className="animate-on-scroll opacity-0 translate-x-10 transition-all duration-1000 delay-200">
            {/* Section label with subtle styling */}
            <div className="text-[#D8ECF8]/60 text-sm font-[\'Inter\'] tracking-wider mb-4">
              ABOUT ME
            </div>
            
            {/* Main heading with gradient text effect */}
            <h2 className="text-4xl lg:text-5xl font-bold font-[\'Inter\'] mb-6 bg-gradient-to-r from-white to-[#D8ECF8] bg-clip-text text-transparent">
              solution architect & automation engineer
            </h2>
            
            {/* Personal introduction paragraph */}
            <p className="text-white/70 text-lg leading-relaxed mb-8 font-[\'Inter\']">
              I specialize in transforming business needs into intelligent, scalable software solutions that empower organizations to adapt, innovate, and thrive in an ever-changing digital landscape. By combining deep technical expertise with a clear understanding of business objectives, we deliver solutions that not only meet today’s demands but also scale seamlessly for tomorrow’s opportunities.
            </p>

            {/* 
              Skills Showcase
              ──────────────
              Interactive skill badges with individual entrance animations.
              Each skill has a staggered delay to create a cascading effect.
            */}
            <div className="flex flex-wrap gap-6 mb-8">
              {[
                { name: 'System Architecture', icon: 'ph ph-sitemap' },
                { name: 'Cloud (AWS)', icon: 'ph ph-cloud' },
                { name: 'Kubernetes', icon: 'ph ph-cubes' },
                { name: 'CI/CD', icon: 'ph ph-git-branch' },
                { name: 'IaC (Terraform)', icon: 'ph ph-funnel' },
                { name: 'Python', icon: 'ph ph-python' },
                { name: 'Docker', icon: 'ph ph-docker' },
                { name: 'Automation', icon: 'ph ph-gear-six' },
                { name: 'Observability', icon: 'ph ph-chart-line' }
              ] /* 
                Skills are mapped into individual badge components.
                Each skill renders as an interactive card with hover effects,
                Phosphor Icons, and staggered entrance animations.
              */.map((skill, index) => (
                <div
                  key={skill.name}
                  className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 group cursor-pointer"
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  {/* Skill card with glassmorphism effect */}
                  <div className="flex flex-col items-center space-y-2 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#D8ECF8]/40 hover:bg-[#D8ECF8]/5 hover:-translate-y-1 transition-all duration-300">
                    {/* Icon container with fixed dimensions for consistency */}
                    <div className="w-8 h-8 flex items-center justify-center">
                      <i className={`${skill.icon} text-2xl text-[#D8ECF8]`}></i>
                    </div>
                    {/* Skill name label */}
                    <span className="text-xs font-[\'Inter\'] text-white/70">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* 
              Call-to-Action Button
              ────────────────────
              Scrolls to projects section when clicked.
              Features multiple hover layers for rich interaction feedback:
              1. Border and background color intensification
              2. Additional gradient overlay that fades in
              3. Smooth scroll behavior with 'behavior: smooth'
            */}
            <button
              onClick={() => {
                // Find the projects section and scroll to it smoothly
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start' // Align to top of viewport
                  });
                }
              }}
              className="group relative px-8 py-3 bg-gradient-to-r from-[#D8ECF8]/20 to-[#D8ECF8]/10 border border-[#D8ECF8]/30 rounded-full font-[\'Inter\'] text-[#D8ECF8] hover:from-[#D8ECF8]/30 hover:to-[#D8ECF8]/20 hover:border-[#D8ECF8]/50 transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              {/* Button text with higher z-index to stay above hover overlay */}
              <span className="relative z-10">View My Work</span>
              {/* Hover overlay that fades in on interaction */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#D8ECF8]/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
