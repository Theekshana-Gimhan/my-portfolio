
export default function AboutSection() {
  return (
    <section id="about" className="py-32 relative bg-black">
      {/* Subtle light spots for depth */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full blur-sm"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-[#D8ECF8]/30 rounded-full"></div>
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-white/15 rounded-full blur-sm"></div>
      <div className="absolute top-60 right-1/3 w-1 h-1 bg-[#D8ECF8]/25 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="animate-on-scroll opacity-0 -translate-x-10 transition-all duration-1000">
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#D8ECF8]/20 to-transparent rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative">
                <div className="w-80 h-80 mx-auto relative overflow-hidden rounded-full border-2 border-[#D8ECF8]/30 group-hover:border-[#D8ECF8]/60 transition-all duration-500 group-hover:-translate-y-2">
                  <img
                    src="https://readdy.ai/api/search-image?query=Professional%20developer%20portrait%2C%20young%20male%2C%20confident%20expression%2C%20modern%20studio%20lighting%2C%20clean%20background%2C%20cinematic%20quality%2C%20high%20resolution%20headshot&width=400&height=400&seq=theekshana-profile&orientation=squarish"
                    alt="Theekshana Gimhan"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05060f]/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="animate-on-scroll opacity-0 translate-x-10 transition-all duration-1000 delay-200">
            <div className="text-[#D8ECF8]/60 text-sm font-[\'Inter\'] tracking-wider mb-4">
              ABOUT ME
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold font-[\'Inter\'] mb-6 bg-gradient-to-r from-white to-[#D8ECF8] bg-clip-text text-transparent">
              Creative Developer
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8 font-[\'Inter\']">
              I'm Theekshana Gimhan, a passionate full-stack developer who transforms ideas into immersive digital experiences. With expertise in modern web technologies and 3D design, I create applications that not only function flawlessly but also captivate users with stunning visual storytelling.
            </p>

            {/* Skills Icons */}
            <div className="flex flex-wrap gap-6 mb-8">
              {[
                { name: 'HTML5', icon: 'ph ph-code' },
                { name: 'CSS3', icon: 'ph ph-paint-brush' },
                { name: 'JavaScript', icon: 'ph ph-lightning' },
                { name: 'React', icon: 'ph ph-atom' },
                { name: 'Spline', icon: 'ph ph-cube' }
              ].map((skill, index) => (
                <div
                  key={skill.name}
                  className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 group cursor-pointer"
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="flex flex-col items-center space-y-2 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#D8ECF8]/40 hover:bg-[#D8ECF8]/5 hover:-translate-y-1 transition-all duration-300">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <i className={`${skill.icon} text-2xl text-[#D8ECF8]`}></i>
                    </div>
                    <span className="text-xs font-[\'Inter\'] text-white/70">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-3 bg-gradient-to-r from-[#D8ECF8]/20 to-[#D8ECF8]/10 border border-[#D8ECF8]/30 rounded-full font-[\'Inter\'] text-[#D8ECF8] hover:from-[#D8ECF8]/30 hover:to-[#D8ECF8]/20 hover:border-[#D8ECF8]/50 transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#D8ECF8]/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
