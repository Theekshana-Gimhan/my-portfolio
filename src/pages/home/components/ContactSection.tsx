
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      // You could show a success message here
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 relative bg-black">
      {/* Subtle light spots for depth */}
      <div className="absolute top-24 left-16 w-2 h-2 bg-white/20 rounded-full blur-sm"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-[#D8ECF8]/30 rounded-full"></div>
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-white/15 rounded-full blur-sm"></div>
      <div className="absolute top-60 right-1/3 w-1 h-1 bg-[#D8ECF8]/25 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
          <div className="text-[#D8ECF8]/60 text-sm font-['Inter'] tracking-wider mb-4">
            GET IN TOUCH
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-['Inter'] bg-gradient-to-r from-white to-[#D8ECF8] bg-clip-text text-transparent">
            Let's Create Together
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Social Links */}
          <div className="animate-on-scroll opacity-0 -translate-x-10 transition-all duration-1000">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold font-['Inter'] text-white mb-6">
                  Connect With Me
                </h3>
                <p className="text-white/70 text-lg leading-relaxed font-['Inter'] mb-8">
                  Ready to bring your ideas to life? Let's discuss your next project and create something extraordinary together.
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex flex-wrap gap-4">
                {[ 
                  { name: 'Email', icon: 'ph ph-envelope', link: 'mailto:theekshana@example.com', glow: 'hover:shadow-red-500/20' },
                  { name: 'LinkedIn', icon: 'ph ph-linkedin-logo', link: 'https://linkedin.com', glow: 'hover:shadow-blue-500/20' },
                  { name: 'GitHub', icon: 'ph ph-github-logo', link: 'https://github.com', glow: 'hover:shadow-purple-500/20' },
                  { name: 'Twitter', icon: 'ph ph-twitter-logo', link: 'https://twitter.com', glow: 'hover:shadow-cyan-500/20' },
                  { name: 'Dribbble', icon: 'ph ph-dribbble-logo', link: 'https://dribbble.com', glow: 'hover:shadow-pink-500/20' },
                  { name: 'Behance', icon: 'ph ph-behance-logo', link: 'https://behance.net', glow: 'hover:shadow-blue-600/20' }
                ].map((social, index) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 bg-white/5 border border-white/20 rounded-2xl flex items-center justify-center hover:border-[#D8ECF8]/40 hover:bg-[#D8ECF8]/10 hover:-translate-y-1 hover:shadow-lg ${social.glow} transition-all duration-300 cursor-pointer group animate-on-scroll opacity-0 translate-y-4`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <i className={`${social.icon} text-2xl text-[#D8ECF8] group-hover:scale-110 transition-transform duration-300`}></i>
                  </a>
                ))}
              </div>

              {/* Contact Info */}
              <div className="space-y-4 pt-8">
                <div className="flex items-center space-x-4 text-white/70">
                  <div className="w-10 h-10 bg-[#D8ECF8]/10 border border-[#D8ECF8]/20 rounded-lg flex items-center justify-center">
                    <i className="ph ph-map-pin text-[#D8ECF8]"></i>
                  </div>
                  <span className="font-['Inter']">Colombo, Sri Lanka</span>
                </div>
                <div className="flex items-center space-x-4 text-white/70">
                  <div className="w-10 h-10 bg-[#D8ECF8]/10 border border-[#D8ECF8]/20 rounded-lg flex items-center justify-center">
                    <i className="ph ph-clock text-[#D8ECF8]"></i>
                  </div>
                  <span className="font-['Inter']">Available 24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll opacity-0 translate-x-10 transition-all duration-1000 delay-200">
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#D8ECF8]/20 hover:bg-[#D8ECF8]/5 transition-all duration-500">
                {/* Form Fields */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 delay-300">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-[#D8ECF8]/50 focus:bg-[#D8ECF8]/5 focus:outline-none transition-all duration-300 font-['Inter'] text-sm"
                    />
                  </div>
                  <div className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 delay-400">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-[#D8ECF8]/50 focus:bg-[#D8ECF8]/5 focus:outline-none transition-all duration-300 font-['Inter'] text-sm"
                    />
                  </div>
                </div>

                <div className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 delay-500 mb-6">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    maxLength={150}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-[#D8ECF8]/50 focus:bg-[#D8ECF8]/5 focus:outline-none transition-all duration-300 font-['Inter'] text-sm"
                  />
                </div>

                <div className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 delay-600 mb-6">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength={500}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-[#D8ECF8]/50 focus:bg-[#D8ECF8]/5 focus:outline-none transition-all duration-300 font-['Inter'] text-sm resize-none"
                  ></textarea>
                  <div className="text-right text-xs text-white/40 mt-1">
                    {formData.message.length}/500
                  </div>
                </div>

                {/* Submit Button */}
                <div className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 delay-700">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-8 py-4 bg-gradient-to-r from-[#D8ECF8]/20 to-[#D8ECF8]/10 border border-[#D8ECF8]/30 rounded-xl font-['Inter'] text-[#D8ECF8] hover:from-[#D8ECF8]/30 hover:to-[#D8ECF8]/20 hover:border-[#D8ECF8]/50 hover:shadow-lg hover:shadow-[#D8ECF8]/20 transition-all duration-300 cursor-pointer whitespace-nowrap relative group ${
                      isSubmitting ? 'animate-bounce' : ''
                    }`}
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      {isSubmitting ? (
                        <>
                          <i className="ph ph-circle-notch text-lg animate-spin"></i>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <i className="ph ph-paper-plane-tilt text-lg group-hover:translate-x-1 transition-transform duration-300"></i>
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#D8ECF8]/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
