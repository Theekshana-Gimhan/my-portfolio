      export default function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById('about') || document.getElementById('projects') || document.getElementById('gallery') || document.getElementById('contact');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="h-screen w-full relative overflow-hidden">
      {/* Background gradient overlay - behind the Spline model */}
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
      
      {/* Spline 3D Model Container - Desktop */}
      <div className="absolute inset-0 hidden sm:flex items-center justify-end z-20 pr-12 lg:pr-24">
        <div className="relative w-[340px] h-[340px] lg:w-[420px] lg:h-[420px] flex items-center justify-center">
          <iframe 
            src="https://my.spline.design/reactiveorb-CNTFzOfUxCBx7yWI5vnFricu/" 
            frameBorder="0" 
            width="100%" 
            height="100%"
            style={{ 
              position: 'relative',
              width: '100%',
              height: '100%',
              border: 'none',
              zIndex: 20,
              pointerEvents: 'auto',
              background: 'transparent',
              transform: 'scale(2)',
              transformOrigin: 'center center'
            }}
            title="Interactive 3D Model"
          />
        </div>
      </div>

      {/* Desktop Hero Text - Left side */}
      <div className="absolute inset-y-0 left-0 flex-col justify-center items-start hidden sm:flex z-25 pl-12 lg:pl-24">
        <div className="text-left max-w-md bg-black/40 backdrop-blur-sm rounded-2xl p-8 mt-auto mb-auto">
          <h2 className="text-5xl font-bold font-['Inter'] text-white mb-3 leading-tight whitespace-nowrap">Solution Engineer</h2>
          <h2 className="text-5xl font-bold font-['Inter'] mb-4 leading-tight bg-gradient-to-r from-[#1de9b6] via-[#00bcd4] to-[#1976d2] text-transparent bg-clip-text">& AI Developer</h2>
          <p className="text-2xl text-white/80 font-['Inter'] leading-relaxed">Transforming business needs into intelligent, scalable software</p>
          <div className="mt-6">
            <button
              onClick={scrollToContact}
              className="px-6 py-3 bg-gradient-to-r from-[#D8ECF8]/20 to-[#D8ECF8]/10 border border-[#D8ECF8]/30 rounded-xl font-['Inter'] text-[#D8ECF8] hover:from-[#D8ECF8]/30 hover:to-[#D8ECF8]/20 hover:border-[#D8ECF8]/50 hover:shadow-lg hover:shadow-[#D8ECF8]/20 transition-all duration-300 cursor-pointer backdrop-blur-sm"
            >
              <span className="flex items-center space-x-2">
                <span>Contact Me</span>
                <i className="ph ph-arrow-right text-lg"></i>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Spline 3D Model Container */}
      <div className="absolute inset-0 flex sm:hidden items-center justify-center z-20">
        <div className="w-full h-full">
          <div style={{width: '100%', height: '100%', position: 'relative', overflow: 'hidden'}}>
            <iframe 
              src="https://my.spline.design/reactiveorb-CNTFzOfUxCBx7yWI5vnFricu/" 
              frameBorder="0" 
              width="150%" 
              height="150%"
              style={{ 
                position: 'absolute',
                left: '-25%',
                top: '-30%',
                width: '150%',
                height: '150%',
                border: 'none',
                zIndex: 20,
                pointerEvents: 'auto',
                background: 'transparent',
                transform: 'scale(1.8)',
                transformOrigin: 'center center'
              }}
              title="Interactive 3D Model"
            />
          </div>
        </div>
      </div>

      {/* Subtle overlay for text readability - non-interactive areas only */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-15 pointer-events-none"></div>

      {/* Mobile Hero Content - Top positioned */}
      <div className="absolute top-0 left-0 right-0 flex flex-col justify-start items-center z-25 sm:hidden pt-20 px-4">
        <div className="text-center max-w-sm bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <h1 className="text-3xl font-bold font-['Inter'] text-white mb-2">
            Theekshana Gimhan
          </h1>
          <h2 className="text-lg font-semibold font-['Inter'] text-[#D8ECF8] mb-3">
            Solution Engineer & AI Developer
          </h2>
          <p className="text-sm text-white/80 font-['Inter'] leading-relaxed">
            Transforming business needs into intelligent, scalable software solutions
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 sm:hidden">
        <button
          onClick={scrollToNext}
          className="px-4 py-2 bg-black/40 border border-white/20 rounded-full text-white/70 hover:text-[#D8ECF8] hover:border-[#D8ECF8]/30 transition-all duration-300 cursor-pointer backdrop-blur-sm pointer-events-auto"
        >
          <span className="flex items-center space-x-1">
            <span className="text-sm">Scroll Down</span>
            <i className="ph ph-arrow-down text-sm"></i>
          </span>
        </button>
      </div>

    </section>
  );
}
