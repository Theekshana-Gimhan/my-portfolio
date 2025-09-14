
import { useState, useEffect } from 'react';

/**
 * TestimonialsSection Component
 * ============================
 * 
 * Interactive carousel component displaying client testimonials with auto-advance functionality.
 * Features smooth transitions, manual navigation controls, and responsive design.
 * 
 * Key Features:
 * - Auto-advancing carousel with 5-second intervals
 * - Manual navigation via clickable dots and arrow buttons
 * - Smooth slide transitions using CSS transforms
 * - Glassmorphism design with hover effects
 * - Responsive layout with proper spacing
 * 
 * Technical Implementation:
 * - Uses useState for current slide tracking
 * - useEffect with setInterval for auto-advance functionality
 * - CSS transforms for slide positioning (translateX)
 * - Modular arithmetic for infinite loop navigation
 * - Event cleanup to prevent memory leaks
 * 
 * Carousel Mechanics:
 * - Slides are arranged horizontally in a flex container
 * - Transform property moves the container to show different slides
 * - Navigation dots reflect current position and allow direct jumping
 * - Arrow buttons provide previous/next functionality with wrap-around
 */
export default function TestimonialsSection() {
  // Current slide index - controls which testimonial is visible
  const [currentSlide, setCurrentSlide] = useState(0);

  /*
   * Testimonials Data Array
   * ──────────────────────
   * Static testimonial data with client information and reviews.
   * Each testimonial includes:
   * - Personal info: name, title, company, profile image
   * - Review content: detailed feedback and experience
   * - Unique ID for React key prop and potential data management
   * 
   * Future Enhancement: Could be fetched from CMS or API endpoint
   */

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      title: 'Product Manager at TechFlow',
      image: 'https://readdy.ai/api/search-image?query=Professional%20businesswoman%20portrait%2C%20asian%2C%20confident%20smile%2C%20modern%20office%20background%2C%20corporate%20headshot%2C%20high%20quality&width=80&height=80&seq=testimonial-sarah&orientation=squarish',
      review: 'Theekshana delivered an exceptional web application that exceeded our expectations. His attention to detail and innovative approach made our project stand out in the market.'
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      title: 'CEO at Digital Ventures',
      image: 'https://readdy.ai/api/search-image?query=Professional%20businessman%20portrait%2C%20african%20american%2C%20confident%20expression%2C%20modern%20studio%20background%2C%20executive%20headshot%2C%20high%20resolution&width=80&height=80&seq=testimonial-marcus&orientation=squarish',
      review: 'Working with Theekshana was a game-changer for our startup. He brought our vision to life with stunning 3D interactions and flawless user experience design.'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      title: 'Creative Director at Pixel Studios',
      image: 'https://readdy.ai/api/search-image?query=Professional%20creative%20director%20portrait%2C%20hispanic%20woman%2C%20artistic%20background%2C%20modern%20studio%20lighting%2C%20designer%20headshot%2C%20high%20quality&width=80&height=80&seq=testimonial-emma&orientation=squarish',
      review: 'The level of creativity and technical expertise Theekshana brings to every project is remarkable. Our clients were amazed by the immersive experiences he created.'
    },
    {
      id: 4,
      name: 'David Kim',
      title: 'Founder at InnovateTech',
      image: 'https://readdy.ai/api/search-image?query=Professional%20startup%20founder%20portrait%2C%20korean%20male%2C%20innovative%20background%2C%20modern%20office%20setting%2C%20entrepreneur%20headshot%2C%20high%20resolution&width=80&height=80&seq=testimonial-david&orientation=squarish',
      review: 'Theekshana transformed our complex requirements into an elegant, user-friendly platform. His problem-solving skills and dedication are truly exceptional.'
    }
  ];

  /*
   * Auto-Advance Carousel Logic
   * ──────────────────────────
   * Sets up automatic slide progression using setInterval.
   * 
   * Implementation Details:
   * - 5-second interval between slide changes
   * - Modular arithmetic ensures infinite loop (wraps to 0 after last slide)
   * - Cleanup function clears interval to prevent memory leaks
   * - Dependency on testimonials.length ensures proper operation if data changes
   * 
   * Navigation Pattern: 0 → 1 → 2 → 3 → 0 → 1...
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Auto-advance every 5 seconds
    
    return () => clearInterval(interval); // Cleanup on unmount
  }, [testimonials.length]);

  return (
    <section className="py-32 relative overflow-hidden bg-black">
      {/* 
        Decorative Background Elements
        ─────────────────────────────
        Subtle floating light spots for atmospheric depth.
        Positioned to avoid interfering with content readability.
      */}
      <div className="absolute top-32 left-16 w-2 h-2 bg-white/20 rounded-full blur-sm"></div>
      <div className="absolute top-20 right-32 w-1 h-1 bg-[#D8ECF8]/30 rounded-full"></div>
      <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-white/15 rounded-full blur-sm"></div>
      <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-[#D8ECF8]/25 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* 
          Section Header
          ─────────────
          Animated title with consistent branding and scroll-triggered entrance.
        */}
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
          <div className="text-[#D8ECF8]/60 text-sm font-[\'Inter\'] tracking-wider mb-4">
            TESTIMONIALS
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[\'Inter\'] bg-gradient-to-r from-white to-[#D8ECF8] bg-clip-text text-transparent">
            What Clients Say
          </h2>
        </div>

        {/* 
          Carousel Container
          ─────────────────
          Main slider implementation with navigation controls.
          Constrained width for optimal reading experience.
        */}
        <div className="relative max-w-4xl mx-auto">
          {/* 
            Slider Track Container
            ─────────────────────
            Overflow hidden container creates the viewport for the carousel.
            The inner flex container slides horizontally to reveal different testimonials.
          */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                /* 
                  Transform Logic: translateX(-${currentSlide * 100}%)
                  ──────────────────────────────────────────────────
                  - Slide 0: translateX(0%) - shows first testimonial
                  - Slide 1: translateX(-100%) - shows second testimonial
                  - Slide 2: translateX(-200%) - shows third testimonial
                  - Each slide is 100% width, so we move by full widths
                */
                transform: `translateX(-${currentSlide * 100}%)` 
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`w-full flex-shrink-0 p-8 ${
                    /* Add animation class to current slide for enhanced entrance effect */
                    index === currentSlide ? 'animate-in' : ''
                  }`}
                >
                  {/* 
                    Testimonial Card
                    ───────────────
                    Glassmorphism design with hover effects and gradient glow.
                    Contains quote, review text, and client information.
                  */}
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#D8ECF8]/30 hover:bg-[#D8ECF8]/5 transition-all duration-500 relative group">
                    {/* Animated glow effect that appears on hover */}
                    <div className="absolute -inset-px bg-gradient-to-r from-[#D8ECF8]/20 via-transparent to-[#D8ECF8]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>

                    <div className="relative">
                      {/* 
                        Quote Icon
                        ─────────
                        Visual indicator that this is a testimonial/quote.
                        Uses Phosphor Icons with brand color theming.
                      */}
                      <div className="mb-6">
                        <i className="ph ph-quotes text-4xl text-[#D8ECF8]/30"></i>
                      </div>

                      {/* 
                        Review Content
                        ─────────────
                        Main testimonial text with optimal typography for readability.
                        Leading and margins provide comfortable reading experience.
                      */}
                      <p className="text-white/80 text-lg leading-relaxed mb-8 font-[\'Inter\']">
                        {testimonial.review}
                      </p>

                      {/* 
                        Client Information
                        ─────────────────
                        Profile image, name, and title arranged horizontally.
                        Image has branded border and proper aspect ratio handling.
                      */}
                      <div className="flex items-center space-x-4">
                        {/* Profile image with branded border */}
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#D8ECF8]/30">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                        
                        {/* Client name and title */}
                        <div>
                          <h4 className="font-semibold text-white font-[\'Inter\']">
                            {testimonial.name}
                          </h4>
                          <p className="text-[#D8ECF8]/70 text-sm font-[\'Inter\']">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 
            Navigation Dots (Pagination Indicators)
            ───────────────────────────────────────
            Visual indicators showing total slides and current position.
            Clicking a dot jumps directly to that slide.
            
            Styling Logic:
            - Active dot: Larger scale (125%) and brand color
            - Inactive dots: Smaller with hover effect for discoverability
          */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)} /* Direct slide navigation */
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentSlide
                    ? 'bg-[#D8ECF8] scale-125' /* Active state */
                    : 'bg-white/30 hover:bg-white/50' /* Inactive state */
                }`}
              />
            ))}
          </div>

          {/* 
            Navigation Arrows
            ────────────────
            Previous/Next buttons positioned absolutely on sides of carousel.
            Include wrap-around logic for infinite navigation.
          */}
          
          {/* Previous Button */}
          <button
            onClick={() => setCurrentSlide((prev) => 
              /* Wrap-around logic: if at beginning (0), go to end */
              (prev - 1 + testimonials.length) % testimonials.length
            )}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/5 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#D8ECF8]/10 hover:border-[#D8ECF8]/40 transition-all duration-300 cursor-pointer"
          >
            <i className="ph ph-caret-left text-xl text-[#D8ECF8]"></i>
          </button>
          
          {/* Next Button */}
          <button
            onClick={() => setCurrentSlide((prev) => 
              /* Wrap-around logic: if at end, go to beginning (0) */
              (prev + 1) % testimonials.length
            )}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/5 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#D8ECF8]/10 hover:border-[#D8ECF8]/40 transition-all duration-300 cursor-pointer"
          >
            <i className="ph ph-caret-right text-xl text-[#D8ECF8]"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
