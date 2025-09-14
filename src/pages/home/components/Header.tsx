
export default function Header() {
  /**
   * scrollToSection
   * ----------------
   * Smooth-scrolls the viewport to a section with the provided id.
   * This keeps navigation buttons simple and decoupled from routing.
   */
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  /**
   * Header layout
   * -------------
   * - Fixed header that updates its visual presentation on scroll
   *   (the blur/opacity is handled in the Home page scroll listener).
   * - On larger screens the nav items are shown inline. On mobile,
   *   a menu button is displayed (menu implementation is intentionally
   *   omitted for brevity and can be wired to a drawer/state later).
   */
  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 backdrop-blur-sm bg-black/80"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Brand - keep text small and accessible */}
          <div className="text-xl font-bold font-[`Inter`] text-[#D8ECF8]">
            Theekshana Gimhan
          </div>

          {/* Desktop navigation - semantic buttons that smooth-scroll */}
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
                  {/* Decorative underline animation on hover */}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D8ECF8] to-transparent group-hover:w-full transition-all duration-300"></div>
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile menu button (placeholder) */}
          <button className="md:hidden text-white/80 hover:text-[#D8ECF8] transition-colors">
            <i className="ph ph-list text-2xl"></i>
          </button>
        </nav>
      </div>
    </header>
  );
}
