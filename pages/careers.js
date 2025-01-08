import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import PublicNavbar from '../components/common/PublicNavbar';
import Footer from '../components/common/Footer';
import ScrollToTop from '../components/common/ScrollToTop';
import BackgroundElements from '../components/common/BackgroundElements';

const JobCard = ({ title, type, location, description, requirements, href = "#" }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="glass-effect rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 group">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="flex items-center gap-3 mt-2 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {type}
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {location}
            </span>
          </div>
        </div>
        <Link 
          href={href}
          className="bg-[#7C5DFA] hover:bg-[#8F75FF] transition-colors px-4 py-2 rounded-full text-white text-sm font-medium"
        >
          Apply Now
        </Link>
      </div>
      
      <p className="text-gray-400 mb-4">{description}</p>
      
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left group"
      >
        <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
          <span>Requirements</span>
          <svg 
            className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <div className={`space-y-2 overflow-hidden transition-all duration-300 ${isExpanded ? 'mt-4 max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="space-y-2">
          {requirements.map((req, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C5DFA] mt-1.5 flex-shrink-0" />
              {req}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior Frontend Developer (Next.js)",
      type: "Full-time",
      location: "Remote",
      description: "Join our frontend team to build beautiful, responsive user interfaces for our flight tracking platform.",
      requirements: [
        "5+ years of experience with React and Next.js",
        "Strong TypeScript skills",
        "Experience with Tailwind CSS",
        "Understanding of web performance optimization",
        "Experience with real-time data visualization"
      ]
    },
    {
      title: "Senior AI Engineer (LangChain/LangGraph)",
      type: "Full-time",
      location: "Remote",
      description: "Help build and optimize our AI agents that power proactive flight monitoring and passenger assistance.",
      requirements: [
        "5+ years of experience in ML/AI engineering",
        "Strong expertise in LangChain and LangGraph",
        "Strong fundamental and practical knowledge of AI agents",
        "Experience building production-grade LLM applications",
        "Proficiency in Python and async programming",
        "Understanding of RAG (Retrieval Augmented Generation)",
        "Experience with vector databases (e.g., Pinecone, Weaviate)",
        "Knowledge of prompt engineering and LLM fine-tuning",
        "Familiarity with real-time systems and event-driven architectures"
      ]
    },
    {
      title: "Senior Backend Engineer (Python/FastAPI)",
      type: "Full-time",
      location: "Remote",
      description: "Design and build scalable microservices architecture for our flight tracking platform using Python and FastAPI.",
      requirements: [
        "5+ years of experience in backend development with Python",
        "Strong expertise in FastAPI and async programming",
        "Experience building and maintaining microservices architecture",
        "Proficiency in SQL and NoSQL databases",
        "Experience with message queues (RabbitMQ, Redis)",
        "Strong understanding of RESTful APIs and WebSockets",
        "AWS experience (Elastic Beanstalk, ECS, Lambda) is a plus",
        "Experience with Docker and Kubernetes is a plus",
        "Understanding of infrastructure as code and CI/CD practices"
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Careers | BoardAndGo</title>
        <meta name="description" content="Join BoardAndGo and help revolutionize flight tracking with AI innovation." />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:url" content="https://boardandgo.com/careers" />
        <meta property="og:title" content="Careers | BoardAndGo" />
        <meta property="og:description" content="Join BoardAndGo and help revolutionize flight tracking with AI innovation." />
        <meta property="og:image" content="https://boardandgo.com/og-image-careers.jpg" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:title" content="Careers | BoardAndGo" />
        <meta name="twitter:description" content="Join BoardAndGo and help revolutionize flight tracking with AI innovation." />
        <meta name="twitter:image" content="https://boardandgo.com/og-image-careers.jpg" />
      </Head>

      <BackgroundElements />
      <PublicNavbar />

      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-24 pb-12 sm:pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-8 relative">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Join Our Mission
              <span className="gradient-text block mt-2">Shape the Future of Travel</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Help us build the next generation of AI-powered flight tracking technology. 
              We're looking for passionate individuals who want to make air travel stress-free.
            </p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-12 sm:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Our Culture
                <span className="gradient-text block mt-2">Innovation & Impact</span>
              </h2>
              <p className="text-gray-400">
                At BoardAndGo, we're building technology that makes a real difference in people's lives. 
                Our team is remote-first, focused on innovation, and passionate about creating 
                exceptional user experiences.
              </p>
              <div className="space-y-4">
                {[
                  'Remote-first environment',
                  'Flexible working hours',
                  'Continuous learning opportunities',
                  'Regular team meetups',
                  'Competitive compensation',
                  'Latest tech stack'
                ].map((perk, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7C5DFA]" />
                    <span className="text-gray-300">{perk}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/culture-visual.jpg"
                  alt="BoardAndGo Culture"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple/20 via-transparent to-transparent mix-blend-overlay" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-12 sm:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Open Positions
              <span className="gradient-text block mt-2">Join Our Team</span>
            </h2>
          </div>
          
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <JobCard key={index} {...position} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  );
} 