
import { useState } from 'react';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: 'AI-Powered E-Commerce Platform',
      description: 'A revolutionary shopping experience with intelligent product recommendations and immersive 3D product previews.',
      fullDescription: 'This comprehensive e-commerce platform leverages artificial intelligence to provide personalized shopping experiences. Features include real-time product recommendations, 3D product visualization, voice search capabilities, and advanced analytics dashboard for merchants.',
      techStack: ['React', 'Node.js', 'TensorFlow', 'Three.js', 'MongoDB'],
      features: ['AI-Powered Recommendations', 'Interactive 3D Product Views', 'Voice Search Integration', 'Real-time Analytics', 'Mobile-First Design', 'Advanced Security'],
      image: 'https://readdy.ai/api/search-image?query=Modern%20e-commerce%20platform%20interface%2C%20AI-powered%20shopping%20website%2C%20futuristic%20design%2C%20clean%20minimalist%20layout%2C%20dark%20theme%20with%20glowing%20elements%2C%20high-tech%20dashboard&width=600&height=400&seq=project-ecommerce&orientation=landscape',
      gallery: [
        'https://readdy.ai/api/search-image?query=E-commerce%20dashboard%20interface%2C%20analytics%20charts%2C%20modern%20dark%20theme%2C%20professional%20business%20interface%2C%20data%20visualization&width=800&height=500&seq=ecommerce-gallery-1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=3D%20product%20viewer%20interface%2C%20interactive%20product%20showcase%2C%20modern%20e-commerce%20design%2C%20immersive%20shopping%20experience&width=800&height=500&seq=ecommerce-gallery-2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Mobile%20e-commerce%20app%20interface%2C%20shopping%20cart%20design%2C%20modern%20mobile%20UI%2C%20clean%20product%20listings&width=800&height=500&seq=ecommerce-gallery-3&orientation=landscape'
      ],
      liveUrl: 'https://demo-ecommerce.example.com',
      githubUrl: 'https://github.com/theekshana/ai-ecommerce'
    },
    {
      id: 2,
      title: 'Interactive Data Visualization Dashboard',
      description: 'Real-time analytics dashboard with stunning 3D data visualizations and interactive charts for enterprise clients.',
      fullDescription: 'A comprehensive business intelligence platform that transforms complex data into intuitive visual insights. Built for enterprise clients who need real-time monitoring and advanced analytics capabilities.',
      techStack: ['Vue.js', 'D3.js', 'WebGL', 'Python', 'PostgreSQL'],
      features: ['Real-time Data Processing', '3D Chart Visualizations', 'Custom Dashboard Builder', 'Advanced Filtering', 'Export Capabilities', 'Multi-tenant Architecture'],
      image: 'https://readdy.ai/api/search-image?query=Advanced%20data%20analytics%20dashboard%2C%203D%20data%20visualization%20interface%2C%20charts%20and%20graphs%2C%20dark%20theme%20with%20neon%20accents%2C%20professional%20business%20intelligence%20platform&width=600&height=400&seq=project-dashboard&orientation=landscape',
      gallery: [
        'https://readdy.ai/api/search-image?query=Business%20intelligence%20dashboard%2C%20interactive%20charts%2C%20data%20visualization%20interface%2C%20professional%20analytics%20platform&width=800&height=500&seq=dashboard-gallery-1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=3D%20data%20visualization%2C%20interactive%20graphs%2C%20modern%20dashboard%20design%2C%20business%20analytics%20interface&width=800&height=500&seq=dashboard-gallery-2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Real-time%20monitoring%20dashboard%2C%20system%20metrics%20interface%2C%20professional%20enterprise%20software%2C%20dark%20theme&width=800&height=500&seq=dashboard-gallery-3&orientation=landscape'
      ],
      liveUrl: 'https://demo-analytics.example.com',
      githubUrl: 'https://github.com/theekshana/analytics-dashboard'
    },
    {
      id: 3,
      title: 'Virtual Reality Training Platform',
      description: 'Immersive VR training simulations for medical professionals with realistic scenarios and performance tracking.',
      fullDescription: 'Revolutionary VR training platform designed specifically for medical education. Provides immersive, risk-free learning environments where medical students and professionals can practice complex procedures.',
      techStack: ['WebXR', 'A-Frame', 'React', 'Firebase', 'Three.js'],
      features: ['Immersive VR Simulations', 'Performance Analytics', 'Multi-user Sessions', 'Realistic Medical Scenarios', 'Progress Tracking', 'Cross-platform Compatibility'],
      image: 'https://readdy.ai/api/search-image?query=VR%20training%20interface%2C%20medical%20simulation%20platform%2C%20virtual%20reality%20headset%20view%2C%20futuristic%20medical%20training%20environment%2C%20immersive%203D%20medical%20scenarios&width=600&height=400&seq=project-vr&orientation=landscape',
      gallery: [
        'https://readdy.ai/api/search-image?query=VR%20medical%20training%20interface%2C%20virtual%20surgery%20simulation%2C%20immersive%20medical%20education%20platform%2C%20realistic%20training%20environment&width=800&height=500&seq=vr-gallery-1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Virtual%20reality%20classroom%2C%20medical%20students%20training%2C%20VR%20headsets%2C%20modern%20educational%20technology&width=800&height=500&seq=vr-gallery-2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=VR%20training%20analytics%20dashboard%2C%20performance%20metrics%20interface%2C%20medical%20education%20platform%2C%20progress%20tracking&width=800&height=500&seq=vr-gallery-3&orientation=landscape'
      ],
      liveUrl: 'https://demo-vrtraining.example.com',
      githubUrl: 'https://github.com/theekshana/vr-training'
    },
    {
      id: 4,
      title: 'Blockchain-Based Social Network',
      description: 'Decentralized social media platform with NFT integration and cryptocurrency rewards for content creators.',
      fullDescription: 'Next-generation social media platform built on blockchain technology. Empowers content creators with true ownership of their content and fair compensation through cryptocurrency rewards and NFT integration.',
      techStack: ['Next.js', 'Ethereum', 'Solidity', 'IPFS', 'Web3.js'],
      features: ['Decentralized Content Storage', 'NFT Marketplace Integration', 'Cryptocurrency Rewards', 'Smart Contract Automation', 'User Governance', 'Cross-chain Compatibility'],
      image: 'https://readdy.ai/api/search-image?query=Blockchain%20social%20media%20interface%2C%20cryptocurrency%20platform%20design%2C%20NFT%20marketplace%20integration%2C%20modern%20dark%20theme%20social%20network%2C%20decentralized%20app%20interface&width=600&height=400&seq=project-blockchain&orientation=landscape',
      gallery: [
        'https://readdy.ai/api/search-image?query=Blockchain%20social%20network%20interface%2C%20crypto%20rewards%20system%2C%20decentralized%20social%20media%20platform%2C%20modern%20web3%20design&width=800&height=500&seq=blockchain-gallery-1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=NFT%20marketplace%20interface%2C%20digital%20collectibles%20platform%2C%20blockchain%20trading%20interface%2C%20modern%20crypto%20design&width=800&height=500&seq=blockchain-gallery-2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Cryptocurrency%20wallet%20interface%2C%20blockchain%20transaction%20history%2C%20web3%20user%20dashboard%2C%20modern%20crypto%20app&width=800&height=500&seq=blockchain-gallery-3&orientation=landscape'
      ],
      liveUrl: 'https://demo-blockchain-social.example.com',
      githubUrl: 'https://github.com/theekshana/blockchain-social'
    }
  ];

  const openProjectModal = (project: any) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-32 relative bg-black">
      {/* Subtle light spots for depth */}
      <div className="absolute top-10 right-10 w-2 h-2 bg-white/20 rounded-full blur-sm"></div>
      <div className="absolute top-60 left-20 w-1 h-1 bg-[#D8ECF8]/30 rounded-full"></div>
      <div className="absolute bottom-20 right-1/4 w-1.5 h-1.5 bg-white/15 rounded-full blur-sm"></div>
      <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-[#D8ECF8]/25 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
          <div className="text-[#D8ECF8]/60 text-sm font-[\'Inter\'] tracking-wider mb-4">
            PORTFOLIO
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[\'Inter\'] bg-gradient-to-r from-white to-[#D8ECF8] bg-clip-text text-transparent">
            Featured Projects
          </h2>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div
                className={`animate-on-scroll opacity-0 transition-all duration-1000 ${
                  index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'
                } ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
              >
                <div className="relative group cursor-pointer" onClick={() => openProjectModal(project)}>
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#D8ECF8]/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 group-hover:border-[#D8ECF8]/30 transition-all duration-500">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05060f]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div
                className={`animate-on-scroll opacity-0 transition-all duration-1000 delay-200 ${
                  index % 2 === 0 ? 'translate-x-10' : '-translate-x-10'
                }`}
              >
                <div className="text-[#D8ECF8]/60 text-sm font-[\'Inter\'] tracking-wider mb-4">
                  PROJECT {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold font-[\'Inter\'] mb-6 text-white">
                  {project.title}
                </h3>
                <p className="text-white/70 text-lg leading-relaxed mb-8 font-[\'Inter\']">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-[\'Inter\'] text-[#D8ECF8]/80 hover:border-[#D8ECF8]/30 hover:bg-[#D8ECF8]/5 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => openProjectModal(project)}
                  className="group relative px-8 py-3 bg-gradient-to-r from-[#D8ECF8]/20 to-[#D8ECF8]/10 border border-[#D8ECF8]/30 rounded-full font-[\'Inter\'] text-[#D8ECF8] hover:from-[#D8ECF8]/30 hover:to-[#D8ECF8]/20 hover:border-[#D8ECF8]/50 hover:shadow-lg hover:shadow-[#D8ECF8]/10 transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>View Project</span>
                    <i className="ph ph-arrow-up-right text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"></i>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D8ECF8]/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={closeProjectModal}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-black/90 border border-[#D8ECF8]/20 rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeProjectModal}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-[#D8ECF8]/20 hover:border-[#D8ECF8]/40 transition-all duration-300 cursor-pointer z-10"
            >
              <i className="ph ph-x text-white text-xl"></i>
            </button>

            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="mb-8">
                <div className="text-[#D8ECF8]/60 text-sm font-[\'Inter\'] tracking-wider mb-4">
                  PROJECT DETAILS
                </div>
                <h2 className="text-4xl md:text-5xl font-bold font-[\'Inter\'] text-white mb-6">
                  {selectedProject.title}
                </h2>
                <p className="text-white/70 text-lg leading-relaxed font-[\'Inter\'] max-w-3xl">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Main Project Image */}
              <div className="mb-8 relative overflow-hidden rounded-2xl border border-[#D8ECF8]/20">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-96 object-cover object-top"
                />
              </div>

              {/* Project Gallery */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {selectedProject.gallery.map((image: string, index: number) => (
                  <div key={index} className="relative overflow-hidden rounded-xl border border-white/10 hover:border-[#D8ECF8]/30 transition-all duration-300 cursor-pointer">
                    <img
                      src={image}
                      alt={`${selectedProject.title} screenshot ${index + 1}`}
                      className="w-full h-48 object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Features */}
                <div>
                  <h3 className="text-2xl font-bold font-[\'Inter\'] text-white mb-6">Key Features</h3>
                  <div className="space-y-3">
                    {selectedProject.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#D8ECF8] rounded-full"></div>
                        <span className="text-white/80 font-[\'Inter\']">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack & Links */}
                <div>
                  <h3 className="text-2xl font-bold font-[\'Inter\'] text-white mb-6">Technology Stack</h3>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {selectedProject.techStack.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-[#D8ECF8]/10 border border-[#D8ECF8]/30 rounded-full text-sm font-[\'Inter\'] text-[#D8ECF8]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-4">
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#D8ECF8]/20 to-[#D8ECF8]/10 border border-[#D8ECF8]/30 rounded-xl font-[\'Inter\'] text-[#D8ECF8] hover:from-[#D8ECF8]/30 hover:to-[#D8ECF8]/20 hover:border-[#D8ECF8]/50 transition-all duration-300 cursor-pointer whitespace-nowrap"
                    >
                      <i className="ph ph-globe text-lg"></i>
                      <span>View Live Demo</span>
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-white/5 border border-white/20 rounded-xl font-[\'Inter\'] text-white hover:border-[#D8ECF8]/30 hover:bg-[#D8ECF8]/5 transition-all duration-300 cursor-pointer whitespace-nowrap"
                    >
                      <i className="ph ph-github-logo text-lg"></i>
                      <span>View Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
