
import { useState } from 'react';

export default function MiniGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  const openFullscreen = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeFullscreen = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-32 relative bg-black">
      {/* Subtle light spots for depth */}
      <div className="absolute top-16 right-12 w-2 h-2 bg-white/20 rounded-full blur-sm"></div>
      <div className="absolute top-80 left-24 w-1 h-1 bg-[#D8ECF8]/30 rounded-full"></div>
      <div className="absolute bottom-24 right-1/3 w-1.5 h-1.5 bg-white/15 rounded-full blur-sm"></div>
      <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-[#D8ECF8]/25 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
          <div className="text-[#D8ECF8]/60 text-sm font-[\'Inter\'] tracking-wider mb-4">
            GALLERY
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[\'Inter\'] bg-gradient-to-r from-white to-[#D8ECF8] bg-clip-text text-transparent">
            Design Showcase
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 group cursor-pointer"
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => openFullscreen(item.image)}
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 hover:border-[#D8ECF8]/30 transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05060f]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-[#D8ECF8]/80 text-xs font-[\'Inter\'] tracking-wider mb-2 uppercase">
                      {item.category}
                    </div>
                    <h3 className="text-white font-semibold font-[\'Inter\'] text-lg">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Expand Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <i className="ph ph-arrows-out text-white text-lg"></i>
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-px bg-gradient-to-r from-[#D8ECF8]/20 via-transparent to-[#D8ECF8]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeFullscreen}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            <img
              src={selectedImage}
              alt="Gallery item"
              className="w-full h-full object-contain rounded-lg border border-[#D8ECF8]/20"
            />
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
