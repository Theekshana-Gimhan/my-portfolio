
export default function Header() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 backdrop-blur-sm bg-black/80"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-bold font-[`Inter`] text-[#D8ECF8]">
            Theekshana Gimhan
          </div>
          <ul className="hidden md:flex items-center space-x-8 font-[`Inter`]">
            {[
              { label: 'Home', id: 'hero' },
              { label: 'About', id: 'about' },
              { label: 'Projects', id: 'projects' },
              { label: 'Gallery', id: 'gallery' },
              { label: 'Contact', id: 'contact' }
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-white/80 hover:text-[#D8ECF8] transition-colors duration-300 cursor-pointer relative group"
                >
                  {item.label}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D8ECF8] to-transparent group-hover:w-full transition-all duration-300"></div>
                </button>
              </li>
            ))}
          </ul>
          {/* Mobile menu button */}
          <button className="md:hidden text-white/80 hover:text-[#D8ECF8] transition-colors">
            <i className="ph ph-list text-2xl"></i>
          </button>
        </nav>
      </div>
    </header>
  );
}
