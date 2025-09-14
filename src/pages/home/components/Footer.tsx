
export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Scroll helpers used by multiple elements in the footer
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  /**
   * Footer
   * ------
   * - Presents contact/social links, quick navigation, and services
   * - Uses the same `animate-on-scroll` hooks as the rest of the page so
   *   content animates into view consistently.
   * - The Back to Top button is a convenience affordance that uses
   *   `scrollToTop` to return the user to the top of the page.
   */
  return (
    <footer className="py-16 relative border-t border-white/10 bg-black">
      {/* Subtle decorative light spots to add depth */}
      <div className="absolute top-8 left-20 w-1.5 h-1.5 bg-white/20 rounded-full blur-sm"></div>
      <div className="absolute top-16 right-32 w-1 h-1 bg-[#D8ECF8]/30 rounded-full"></div>
      <div className="absolute bottom-12 left-1/3 w-2 h-2 bg-white/15 rounded-full blur-sm"></div>
      <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-[#D8ECF8]/25 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Brand & Description */}
          <div className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-1000">
            <div className="text-2xl font-bold font-[\'Inter\'] text-[#D8ECF8] mb-4">
              Theekshana Gimhan
            </div>
            <p className="text-white/60 leading-relaxed font-[\'Inter\'] mb-6">
              Creative developer crafting immersive digital experiences through innovative web technologies and stunning 3D design.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: 'ph ph-envelope', link: 'mailto:theekshana@example.com' },
                { icon: 'ph ph-linkedin-logo', link: 'https://linkedin.com' },
                { icon: 'ph ph-github-logo', link: 'https://github.com' },
                { icon: 'ph ph-twitter-logo', link: 'https://twitter.com' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 border border-white/20 rounded-lg flex items-center justify-center hover:border-[#D8ECF8]/40 hover:bg-[#D8ECF8]/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <i className={`${social.icon} text-[#D8ECF8] text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-1000 delay-200">
            <h4 className="text-white font-semibold font-[\'Inter\'] mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {[
                { label: 'Home', id: 'hero' },
                { label: 'About', id: 'about' },
                { label: 'Projects', id: 'projects' },
                { label: 'Gallery', id: 'gallery' },
                { label: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-white/60 hover:text-[#D8ECF8] transition-colors duration-300 cursor-pointer font-[\'Inter\'] text-left"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Services/Skills */}
          <div className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-1000 delay-400">
            <h4 className="text-white font-semibold font-[\'Inter\'] mb-6">Services</h4>
            <div className="space-y-3">
              {[
                'Web Development',
                '3D Design & Animation',
                'UI/UX Design',
                'E-commerce Solutions',
                'Mobile Applications',
                'Consultation & Strategy'
              ].map((service) => (
                <div key={service} className="text-white/60 font-[\'Inter\']">
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/40 text-sm font-[\'Inter\']">
              {currentYear} Theekshana Gimhan. All rights reserved.
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 px-6 py-2 bg-white/5 border border-white/20 rounded-full hover:border-[#D8ECF8]/40 hover:bg-[#D8ECF8]/10 transition-all duration-300 cursor-pointer"
            >
              <span className="text-[#D8ECF8] text-sm font-[\'Inter\']">Back to Top</span>
              <i className="ph ph-arrow-up text-[#D8ECF8] group-hover:-translate-y-1 transition-transform duration-300"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Background Glow Effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-[#D8ECF8]/20 to-transparent"></div>
    </footer>
  );
}
