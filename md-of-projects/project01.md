# AI Persona Simulator & Evaluator

An interactive training simulation tool that generates AI personas for professional training scenarios using Google's Gemini AI. **Now deployed and running live on Google Cloud Platform with Google Cloud TTS!**

🔗 **Live Application**: https://ai-persona-simulator-85939737092.us-central1.run.app


## Features

- 🤖 Generate realistic AI personas with different difficulty levels (Easy, Medium, Hard)
- 🎤 Voice-enabled conversations with speech recognition and synthesis
- 📊 Real-time evaluation and scoring with detailed feedback
- ⚙️ Customizable training scenarios and evaluation criteria
- 🌍 Support for different countries and cultural contexts
- 📱 Responsive design for desktop and mobile devices
- ☁️ Cloud-deployed for instant access without local setup
- 🔒 **Microphone Permission Handling**: Seamless permission management for voice features
- 🌀 **Enhanced User Feedback**: Clear visual indicators during speech processing

## Live Demo

Visit the deployed application at: **https://ai-persona-simulator-85939737092.us-central1.run.app**

No installation required! Just open the link and start using the AI Persona Simulator immediately.

## Local Development Setup

### Prerequisites

- Node.js (v20 or higher)
- npm or yarn
- A Google Gemini API key

### Installation Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mad-marketing-git/ai-persona-simulator.git
   cd ai-persona-simulator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up your API key:**
   - Get your Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a `.env.local` file in the root directory
   - Add your API key:
     ```
     VITE_GEMINI_API_KEY=your_api_key_here
     ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:5173/`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## Usage

### Getting Started
1. **Access the Application**: Visit https://ai-persona-simulator-85939737092.us-central1.run.app
2. **Configure Settings**: Use the Settings tab to customize:
   - Training scenarios (e.g., real estate sales, customer support)
   - Persona directives (personality traits and behaviors)
   - Evaluation criteria (what skills to assess)
   - Difficulty level (Easy, Medium, Hard)
   - Country context for cultural relevance
3. **Generate Persona**: Click "Start Simulation" to generate an AI persona
4. **Conduct Training**: Have a conversation with the AI persona using voice or text
5. **Get Evaluation**: End the call to receive detailed feedback and scoring

### Voice Features
- **Speech Recognition**: Click the microphone button to speak
- **Text-to-Speech**: The AI persona will speak responses aloud
- **Voice Settings**: Customize speech rate and voice selection in settings
- **Microphone Permission Handling**: Automatic detection and prompts for browser compatibility

### Training Scenarios
The application supports various professional training scenarios:
- **Real Estate**: Practice with potential home buyers/sellers
- **Customer Service**: Handle difficult customer situations
- **Sales**: Work on objection handling and closing techniques
- **Healthcare**: Practice patient communication
- **And more**: Customize your own scenarios

## Project Structure

```
├── src/
│   ├── components/          # React UI components
│   │   ├── icons/          # SVG icon components
│   │   ├── CallView.tsx    # Main conversation interface
│   │   ├── SettingsScreen.tsx # Configuration panel
│   │   ├── MicrophonePermissionPrompt.tsx # Permission handling UI
│   │   └── ...
│   ├── hooks/              # Custom React hooks
│   │   ├── useSpeechRecognition.ts
│   │   ├── useSpeechSynthesis.ts
│   │   ├── useMicrophonePermission.ts # Permission state management
│   │   └── useVoices.ts
│   ├── services/           # API integration
│   │   └── geminiService.ts # Google Gemini AI integration
│   ├── types.ts            # TypeScript type definitions
│   ├── main.tsx            # Application entry point
│   └── App.tsx             # Main application component
├── public/                 # Static assets
│   ├── index.css          # Custom styles
│   └── favicon.ico        # Browser icon
├── Dockerfile              # Container configuration
├── nginx.conf             # Production web server config
└── README.md              # This file
```

## Technologies Used

### Technical Architecture
```
┌─────────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Frontend (React)  │    │  Google Cloud    │    │  Gemini AI API  │
│                     │    │                  │    │                 │
│ • React 19.1        │────│ Cloud Run        │────│ Text Generation │
│ • TypeScript        │    │ • Auto-scaling   │    │ • Embeddings    │
│ • Vite 6.x          │    │ • HTTPS          │    │ • Model: 1.5    │
│ • Tailwind CSS      │    │ • Port 8080      │    │                 │
│ • Framer Motion     │    │                  │    │                 │
└─────────────────────┘    └──────────────────┘    └─────────────────┘
                                    │
                           ┌──────────────────┐
                           │ Artifact Registry│
                           │ • Docker Images  │
                           │ • CI/CD Pipeline │
                           │ • Version Control│
                           └──────────────────┘
```

### Core Technologies
- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite 6.x for fast development and optimized builds
- **AI Integration**: Google Gemini AI for persona generation and evaluation
- **Speech APIs**: Web Speech API for voice recognition and synthesis
- **Styling**: Tailwind CSS for responsive design
- **Deployment**: Docker + Google Cloud Run
- **Infrastructure**: Google Cloud Platform (GCP)

## Deployment Information

### Live Environment
- **Platform**: Google Cloud Run (Serverless)
- **Region**: us-central1
- **URL**: https://ai-persona-simulator-85939737092.us-central1.run.app
- **Container**: Docker with multi-stage build (Node.js + Nginx)
- **Image Registry**: Google Artifact Registry

### 🚀 CI/CD Pipeline

This project features a **complete automated deployment pipeline** using GitHub Actions:

#### **🔄 Automated Workflows**

**Production Deployment:**
- ✅ **Trigger**: Push to `main` branch
- ✅ **Testing**: Runs lint, tests, and build validation
- ✅ **Docker**: Builds optimized container with environment variables
- ✅ **Deploy**: Automatically deploys to Cloud Run production
- ✅ **Health Check**: Validates deployment success
- ✅ **Notifications**: Success/failure alerts

**Staging Environment:**
- ✅ **Trigger**: Pull Requests to `main` branch  
- ✅ **Preview**: Creates temporary staging deployment
- ✅ **Auto-Comment**: Posts staging URL on PR for testing
- ✅ **Quality Gates**: Security scans and performance tests

#### **📋 Pipeline Features**

| Feature | Production | Staging |
|---------|------------|---------|
| **Auto-Deploy** | ✅ Push to main | ✅ Every PR |
| **Environment Variables** | ✅ Production config | ✅ Staging config |
| **Health Checks** | ✅ Full validation | ✅ Basic checks |
| **Rollback** | ✅ Auto on failure | ✅ Manual |
| **Scaling** | 1-20 instances | 0-10 instances |

#### **🔧 Setup Instructions**

To enable automated deployments, configure these **GitHub Secrets**:

1. Go to [Repository Settings → Secrets](https://github.com/Mad-marketing-git/ai-persona-simulator/settings/secrets/actions)
2. Add required secrets:
   ```
   GOOGLE_CREDENTIALS = {GCP Service Account JSON}
   GCP_PROJECT_ID = long-operator-466309-g6
   VITE_GEMINI_API_KEY = {Your Gemini API key}
   ```

📚 **Complete setup guide**: [`.github/CICD_SETUP.md`](.github/CICD_SETUP.md)

### Architecture
```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Client        │────│  Google Cloud    │────│  Google Gemini  │
│   (Browser)     │    │  Run Container   │    │  AI API         │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                               │
                       ┌──────────────────┐
                       │  Artifact        │
                       │  Registry        │
                       └──────────────────┘
```

### Recent Fixes & Improvements
- ✅ **Project Structure**: Converted to proper Vite src/ directory layout
- ✅ **Build System**: Fixed import maps vs bundled dependencies conflict  
- ✅ **White Screen Issue**: Resolved by restructuring project for proper Vite builds
- ✅ **Environment Variables**: Fixed build-time API key injection for production
- ✅ **Static Assets**: Added missing CSS and favicon, eliminated 404 errors
- ✅ **Docker Configuration**: Multi-stage build with optimized production setup
- ✅ **Port Standardization**: Configured for Cloud Run port 8080 compatibility
- ✅ **TypeScript**: Added missing @types dependencies for React components
- ✅ **CI/CD Pipeline**: Complete GitHub Actions workflow for automated deployments
- ✅ **Multi-Environment**: Staging deployments for PRs, production for main branch
- ✅ **Quality Gates**: ESLint, TypeScript checking, security scanning, performance testing
- ✅ **Production Deployment**: Successfully deployed to https://ai-persona-simulator-85939737092.us-central1.run.app

## Contributing

We welcome contributions to improve the AI Persona Simulator! Here's how to get started:

### Development Workflow
```bash
# 1. Fork and clone the repository
git clone https://github.com/your-username/ai-persona-simulator.git
cd ai-persona-simulator

# 2. Create a feature branch
git checkout -b feature/your-feature-name

# 3. Install dependencies
npm install

# 4. Set up environment variables
echo "VITE_GEMINI_API_KEY=your_api_key_here" > .env.local

# 5. Start development server
npm run dev

# 6. Make your changes and test thoroughly
npm run build    # Test production build
npm run preview  # Test production preview
npm run lint     # Check code quality

# 7. Commit and push changes
git add .
git commit -m "feat: your feature description"
git push origin feature/your-feature-name

# 8. Create a pull request (triggers staging deployment!)
```

#### **🚀 Automated Testing & Deployment**

When you create a Pull Request:
1. **CI Pipeline** runs automatically (lint, tests, build validation)
2. **Staging Deployment** creates a preview environment
3. **Bot Comments** with staging URL for testing your changes
4. **Quality Checks** including security scans and performance tests

When PR is merged to main:
1. **Production Pipeline** builds and deploys automatically
2. **Health Checks** ensure deployment success
3. **Live Application** updated at https://ai-persona-simulator-85939737092.us-central1.run.app

### Code Standards
- **TypeScript**: Use strict typing and interfaces
- **Components**: Follow React functional component patterns
- **Styling**: Use Tailwind CSS classes and custom CSS variables
- **Testing**: Add tests for new features (when test framework is implemented)
- **Documentation**: Update README and inline comments for significant changes

### Areas for Contribution
- 🎯 **Enhanced Personas**: Add more sophisticated personality traits and scenarios
- 🔊 **Voice Improvements**: Better voice synthesis and recognition features  
- 📊 **Analytics**: Conversation metrics and performance tracking
- 🧪 **Testing**: Comprehensive test suite implementation
- 🎨 **UI/UX**: Enhanced animations and responsive design improvements
- 🔒 **Security**: API key management and rate limiting
- 📱 **Mobile**: Touch-optimized interface for mobile devices

---

## 🚀 Development Roadmap & Next Steps

### **Phase 1: Enhanced Features (Short-term)**
- [ ] **Conversation History**: Save and replay previous persona interactions
- [ ] **Custom Scenarios**: User-defined training scenarios and contexts
- [ ] **Multi-language Support**: International persona personalities and responses
- [ ] **Performance Metrics**: Response time and conversation quality analytics
- [ ] **Export Options**: Save conversations as transcripts or audio files

### **Phase 2: Advanced AI Features (Medium-term)**
- [ ] **Dynamic Personas**: AI learns and adapts persona behavior over time
- [ ] **Emotion Detection**: Analyze user sentiment and adjust responses
- [ ] **Voice Cloning**: Generate custom voice profiles for personas
- [ ] **Contextual Memory**: Personas remember previous conversation details
- [ ] **Multi-modal Input**: Support for image and document context

### **Phase 3: Enterprise Features (Long-term)**
- [ ] **Team Collaboration**: Shared persona libraries and team training sessions
- [ ] **API Integration**: REST API for enterprise application integration
- [ ] **Advanced Analytics**: Detailed conversation insights and improvement suggestions
- [ ] **SSO Authentication**: Enterprise identity provider integration
- [ ] **Compliance Features**: GDPR, HIPAA data handling and audit trails

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- 📧 **Email**: support@mad-marketing.com
- 💬 **Issues**: [GitHub Issues](https://github.com/Mad-marketing-git/ai-persona-simulator/issues)  
- 📚 **Documentation**: [Project Wiki](https://github.com/Mad-marketing-git/ai-persona-simulator/wiki)
- 🌐 **Live Demo**: https://ai-persona-simulator-85939737092.us-central1.run.app

---

*Built with ❤️ by the MAD Marketing team*

#### 2. User Experience Enhancements
- [ ] **Keyboard shortcuts** (Space to start/stop recording, Enter to submit)
- [ ] **Visual feedback** improvements (better microphone states, typing indicators)
- [ ] **Mobile responsiveness** testing and optimization
- [ ] **Browser compatibility** testing (Firefox, Safari, Edge)
- [ ] **Accessibility improvements** with ARIA labels and screen reader support

#### 3. Data Management
- [ ] **Local storage** for settings persistence
- [ ] **Session history** to view previous simulations
- [ ] **Export options** (PDF reports, CSV data)
- [ ] **Import/Export settings** for sharing configurations
- [ ] **Data encryption** for sensitive conversation data

### **Phase 2: Feature Expansion (Medium-term)**

#### 4. Advanced AI Features
- [ ] **Real-time sentiment analysis** during calls
- [ ] **Dynamic difficulty adjustment** based on performance
- [ ] **Multi-turn conversation context awareness**
- [ ] **Industry-specific persona templates**
- [ ] **Advanced coaching hints** with reasoning
- [ ] **Emotion recognition** from voice patterns

#### 5. Analytics & Insights
- [ ] **Performance tracking** over time with charts
- [ ] **Skill progression** visualization
- [ ] **Comparative analysis** across different scenarios
- [ ] **Team/organization** dashboards for managers
- [ ] **Business metrics** and ROI tracking

#### 6. Testing & Quality Assurance
- [ ] **Unit tests** with Jest + React Testing Library
- [ ] **Integration tests** for AI workflows
- [ ] **End-to-end tests** with Playwright/Cypress
- [ ] **Performance monitoring** with Web Vitals
- [ ] **Error tracking** with Sentry integration

### **Phase 3: Advanced Features (Long-term)**

#### 7. Platform & Integration
- [ ] **User authentication** system
- [ ] **Database integration** for user data persistence
- [ ] **API rate limiting** and usage monitoring
- [ ] **Multi-tenant architecture** for organizations
- [ ] **Integration APIs** for LMS/CRM systems

#### 8. Enterprise Features
- [ ] **Custom branding** options
- [ ] **Advanced reporting** with business metrics
- [ ] **Compliance features** (GDPR, HIPAA)
- [ ] **Audit logging** for enterprise requirements
- [ ] **SSO integration** (SAML, OAuth)

#### 9. Innovation Features
- [ ] **Virtual reality integration** for immersive scenarios
- [ ] **Gamification** with skill trees and achievements
- [ ] **Peer collaboration** features for team training
- [ ] **AI-powered coaching** that adapts to learning styles
- [ ] **Multi-language support** beyond English

### **Technical Debt & Code Quality**

#### Immediate Priorities
- [ ] **TypeScript strict mode** enforcement
- [ ] **ESLint + Prettier** configuration
- [ ] **Component documentation** with Storybook
- [ ] **API documentation** with OpenAPI/Swagger
- [ ] **Performance optimization** (code splitting, lazy loading)

#### Architecture Improvements
- [ ] **State management** with Redux Toolkit or Zustand
- [ ] **Design system** creation with consistent components
- [ ] **Error handling** standardization
- [ ] **Logging framework** implementation
- [ ] **Configuration management** for different environments

### **Deployment & DevOps**

#### Infrastructure
- [ ] **CI/CD pipeline** setup (GitHub Actions)
- [ ] **Docker containerization** for consistent deployments
- [ ] **Cloud deployment** (Vercel, Netlify, or AWS)
- [ ] **CDN integration** for global performance
- [ ] **Monitoring & alerting** setup

#### Security
- [ ] **API key rotation** mechanism
- [ ] **Content Security Policy** implementation
- [ ] **Rate limiting** on API endpoints
- [ ] **Input validation** and sanitization
- [ ] **Security audit** and penetration testing

### **Business & Product Development**

#### Market Opportunities
- [ ] **Sales training** modules (objection handling, closing)
- [ ] **Customer service** scenarios (difficult customers)
- [ ] **Healthcare** communication training
- [ ] **Education** student counseling simulations
- [ ] **Interview preparation** coaching

#### Monetization Strategy
- [ ] **Freemium model** implementation
- [ ] **Enterprise licensing** structure
- [ ] **API marketplace** for third-party integrations
- [ ] **Custom development** services
- [ ] **Training content** marketplace

### **Community & Documentation**

#### Developer Experience
- [ ] **Comprehensive API documentation**
- [ ] **Developer onboarding** guide
- [ ] **Code examples** and tutorials
- [ ] **Plugin/extension** system
- [ ] **Community forum** or Discord

#### User Documentation
- [ ] **User manual** with screenshots
- [ ] **Video tutorials** for common workflows
- [ ] **Best practices** guide
- [ ] **Troubleshooting** documentation
- [ ] **FAQ section** with common issues

---

## 🛠 Quick Start for Contributors

### Development Setup
```bash
# Clone the repository
git clone https://github.com/Mad-marketing-git/ai-persona-simulator.git
cd ai-persona-simulator

# Install dependencies
npm install

# Add your Gemini API key to .env.local
echo "VITE_GEMINI_API_KEY=your_api_key_here" > .env.local

# Start development server
npm run dev

# Run tests (when implemented)
npm run test

# Build for production
npm run build

# Preview production build
npm run preview
```

### Docker Development
```bash
# Build Docker image locally
docker build --build-arg VITE_GEMINI_API_KEY=your_api_key -t ai-persona-simulator .

# Run container locally
docker run -p 8080:8080 ai-persona-simulator

# Access at http://localhost:8080
```

### Code Style Guidelines
- Use TypeScript for all new code
- Follow React functional component patterns
- Implement proper error handling
- Add JSDoc comments for complex functions
- Use meaningful variable and function names

### Pull Request Checklist
- [ ] Code follows project style guidelines
- [ ] Tests pass (when implemented)
- [ ] Documentation updated if needed
- [ ] No console.log statements in production code
- [ ] TypeScript compilation succeeds without errors
# Test commit to check repository status.