
import { useState, useEffect } from 'react';

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-32 relative overflow-hidden bg-black">
      {/* Subtle light spots for depth */}
      <div className="absolute top-32 left-16 w-2 h-2 bg-white/20 rounded-full blur-sm"></div>
      <div className="absolute top-20 right-32 w-1 h-1 bg-[#D8ECF8]/30 rounded-full"></div>
      <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-white/15 rounded-full blur-sm"></div>
      <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-[#D8ECF8]/25 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
          <div className="text-[#D8ECF8]/60 text-sm font-[\'Inter\'] tracking-wider mb-4">
            TESTIMONIALS
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[\'Inter\'] bg-gradient-to-r from-white to-[#D8ECF8] bg-clip-text text-transparent">
            What Clients Say
          </h2>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`w-full flex-shrink-0 p-8 ${
                    index === currentSlide ? 'animate-in' : ''
                  }`}
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#D8ECF8]/30 hover:bg-[#D8ECF8]/5 transition-all duration-500 relative group">
                    {/* Glow effect */}
                    <div className="absolute -inset-px bg-gradient-to-r from-[#D8ECF8]/20 via-transparent to-[#D8ECF8]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>

                    <div className="relative">
                      {/* Quote Icon */}
                      <div className="mb-6">
                        <i className="ph ph-quotes text-4xl text-[#D8ECF8]/30"></i>
                      </div>

                      {/* Review Text */}
                      <p className="text-white/80 text-lg leading-relaxed mb-8 font-[\'Inter\']">
                        {testimonial.review}
                      </p>

                      {/* Client Info */}
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#D8ECF8]/30">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
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

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentSlide
                    ? 'bg-[#D8ECF8] scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/5 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#D8ECF8]/10 hover:border-[#D8ECF8]/40 transition-all duration-300 cursor-pointer"
          >
            <i className="ph ph-caret-left text-xl text-[#D8ECF8]"></i>
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/5 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#D8ECF8]/10 hover:border-[#D8ECF8]/40 transition-all duration-300 cursor-pointer"
          >
            <i className="ph ph-caret-right text-xl text-[#D8ECF8]"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
