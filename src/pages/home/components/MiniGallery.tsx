
import { useState } from 'react';

/**
 * MiniGallery Component
 * ====================
 * 
 * Interactive design showcase featuring a responsive grid of portfolio items.
 * Includes fullscreen viewing capability with modal overlay functionality.
 * 
 * Key Features:
 * - Responsive grid layout (1 column mobile → 2 tablet → 3 desktop)
 * - Staggered entrance animations with individual delays
 * - Hover effects with image scaling and overlay information
 * - Click-to-expand fullscreen modal viewer
 * - Glassmorphism design with branded hover states
 * 
 * Technical Implementation:
 * - useState for modal image selection management
 * - CSS transforms for smooth scaling effects
 * - Aspect ratio containers for consistent image display
 * - Event propagation handling for modal interactions
 * - Backdrop blur effects for professional visual hierarchy
 * 
 * User Experience:
 * - Category labels provide context for each design type
 * - Expand icons indicate interactive behavior
 * - Smooth transitions create polished feel
 * - Escape functionality via backdrop click
 */
export default function MiniGallery() {
  // Modal state for fullscreen image viewer
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  /*
   * Gallery Items Data
   * ─────────────────
   * Curated selection of design work showcasing different disciplines.
   * Each item contains:
   * - Unique identifier for React keys
   * - Title and category for contextual information
   * - High-quality image URL with specific dimensions
   * 
   * Categories represented: Design, Interface, Branding, Animation, Mobile, Analytics
   * Images are sourced from Readdy API with specific parameters for consistency
   */

  const galleryItems = [
    {
      id: 1,
      title: '3D Product Visualization',
      category: 'Design',
      image: 'https://readdy.ai/api/search-image?query=3D%20product%20visualization%2C%20modern%20design%20showcase%2C%20sleek%20product%20renders%2C%20minimalist%20studio%20lighting%2C%20professional%20commercial%20photography&width=400&height=300&seq=gallery-product&orientation=landscape'
    },
    {
      id: 2,
      title: 'UI/UX Interface Design',
      category: 'Interface',
      image: 'https://readdy.ai/api/search-image?query=Modern%20UI%20interface%20design%2C%20sleek%20app%20mockups%2C%20clean%20user%20interface%20elements%2C%20dark%20theme%20design%20system%2C%20professional%20app%20screens&width=400&height=300&seq=gallery-interface&orientation=landscape'
    },
    {
      id: 3,
      title: 'Brand Identity System',
      category: 'Branding',
      image: 'https://readdy.ai/api/search-image?query=Brand%20identity%20design%2C%20logo%20design%20showcase%2C%20corporate%20branding%20materials%2C%20modern%20visual%20identity%20system%2C%20professional%20brand%20guidelines&width=400&height=300&seq=gallery-branding&orientation=landscape'
    },
    {
      id: 4,
      title: 'Web Animation Concepts',
      category: 'Animation',
      image: 'https://readdy.ai/api/search-image?query=Web%20animation%20design%2C%20motion%20graphics%20concepts%2C%20interactive%20website%20elements%2C%20dynamic%20user%20interface%20animations%2C%20modern%20web%20design&width=400&height=300&seq=gallery-animation&orientation=landscape'
    },
    {
      id: 5,
      title: 'Mobile App Prototypes',
      category: 'Mobile',
      image: 'https://readdy.ai/api/search-image?query=Mobile%20app%20design%20prototypes%2C%20smartphone%20interface%20mockups%2C%20modern%20app%20UI%20design%2C%20clean%20mobile%20user%20experience%2C%20professional%20app%20development&width=400&height=300&seq=gallery-mobile&orientation=landscape'
    },
    {
      id: 6,
      title: 'Data Visualization',
      category: 'Analytics',
      image: 'https://readdy.ai/api/search-image?query=Data%20visualization%20design%2C%20interactive%20charts%20and%20graphs%2C%20business%20intelligence%20dashboard%2C%20modern%20analytics%20interface%2C%20professional%20data%20presentation&width=400&height=300&seq=gallery-data&orientation=landscape'
    }
  ];

  /*
   * Modal Control Functions
   * ──────────────────────
   * Simple state handlers for fullscreen image viewer:
   * - openFullscreen: Sets selected image URL and displays modal
   * - closeFullscreen: Clears selection and hides modal
   * 
   * Modal visibility controlled by selectedImage boolean state
   */
  const openFullscreen = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeFullscreen = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-32 relative bg-black">
      {/* 
        Decorative Background Elements
        ─────────────────────────────
        Atmospheric light spots positioned to complement the grid layout.
        Avoid placement that would interfere with gallery item visibility.
      */}
      <div className="absolute top-16 right-12 w-2 h-2 bg-white/20 rounded-full blur-sm"></div>
      <div className="absolute top-80 left-24 w-1 h-1 bg-[#D8ECF8]/30 rounded-full"></div>
      <div className="absolute bottom-24 right-1/3 w-1.5 h-1.5 bg-white/15 rounded-full blur-sm"></div>
      <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-[#D8ECF8]/25 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* 
          Section Header
          ─────────────
          Consistent branding with other sections, scroll-triggered animation.
        */}
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
          <div className="text-[#D8ECF8]/60 text-sm font-[\'Inter\'] tracking-wider mb-4">
            GALLERY
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[\'Inter\'] bg-gradient-to-r from-white to-[#D8ECF8] bg-clip-text text-transparent">
            Design Showcase
          </h2>
        </div>

        {/* 
          Gallery Grid Container
          ─────────────────────
          Responsive grid system:
          - Mobile (default): Single column for optimal mobile viewing
          - Tablet (md:): 2 columns for balanced layout
          - Desktop (lg:): 3 columns for maximum content density
          
          Gap-8 provides consistent spacing between gallery items.
        */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 group cursor-pointer"
              style={{ 
                /* 
                  Staggered Animation Delays
                  ─────────────────────────
                  Each item gets progressively longer delay (100ms increments).
                  Creates a wave-like entrance effect across the grid:
                  - Item 0: 0ms delay
                  - Item 1: 100ms delay  
                  - Item 2: 200ms delay, etc.
                */
                transitionDelay: `${index * 100}ms` 
              }}
              onClick={() => openFullscreen(item.image)} /* Modal trigger */
            >
              {/* 
                Gallery Item Card
                ────────────────
                Individual portfolio piece with hover effects and information overlay.
                Uses group utility for coordinated child element animations.
              */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 hover:border-[#D8ECF8]/30 transition-all duration-500">
                {/* 
                  Image Container with Aspect Ratio
                  ────────────────────────────────
                  Maintains 4:3 aspect ratio for consistent grid appearance.
                  Overflow hidden enables smooth scaling effect on hover.
                */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* 
                  Information Overlay
                  ──────────────────
                  Gradient overlay that appears on hover revealing item details.
                  Positioned absolutely to cover entire image area.
                  Contains category tag and title information.
                */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05060f]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    {/* Category label with uppercase styling */}
                    <div className="text-[#D8ECF8]/80 text-xs font-[\'Inter\'] tracking-wider mb-2 uppercase">
                      {item.category}
                    </div>
                    {/* Item title with prominent typography */}
                    <h3 className="text-white font-semibold font-[\'Inter\'] text-lg">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* 
                  Expand Icon Indicator
                  ────────────────────
                  Visual cue that item is clickable and will expand.
                  Appears on hover with glassmorphism styling.
                */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <i className="ph ph-arrows-out text-white text-lg"></i>
                </div>

                {/* 
                  Glow Effect
                  ──────────
                  Subtle branded glow that appears on hover for premium feel.
                  Positioned with negative inset to extend beyond card bounds.
                */}
                <div className="absolute -inset-px bg-gradient-to-r from-[#D8ECF8]/20 via-transparent to-[#D8ECF8]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 
        Fullscreen Modal Viewer
        ──────────────────────
        Overlay modal for expanded image viewing.
        
        Modal Features:
        - Full-screen backdrop with blur effect
        - Click outside to close functionality  
        - Responsive image scaling with object-contain
        - Close button with glassmorphism styling
        - High z-index (50) ensures visibility above all content
        
        Image Display:
        - Max constraints prevent oversized display
        - Object-contain maintains aspect ratio
        - Border adds subtle definition against dark background
      */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeFullscreen} /* Backdrop click handler */
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            {/* Main fullscreen image */}
            <img
              src={selectedImage}
              alt="Gallery item"
              className="w-full h-full object-contain rounded-lg border border-[#D8ECF8]/20"
            />
            
            {/* 
              Modal Close Button
              ─────────────────
              Floating close button with consistent styling.
              Positioned absolutely to stay visible and accessible.
            */}
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-[#D8ECF8]/20 hover:border-[#D8ECF8]/40 transition-all duration-300 cursor-pointer"
            >
              <i className="ph ph-x text-white text-xl"></i>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
