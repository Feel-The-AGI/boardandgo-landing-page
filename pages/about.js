import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import AviationMenu from '../components/common/AviationMenu';
import Footer from '../components/common/Footer';
import ScrollToTop from '../components/common/ScrollToTop';
import BackgroundElements from '../components/common/BackgroundElements';
import PublicNavbar from '../components/common/PublicNavbar';

// Animated number counter component
const AnimatedStat = ({ value, label }) => {
  return (
    <div className="text-center space-y-2">
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">
        {value}
      </div>
      <div className="text-sm sm:text-base text-gray-400">{label}</div>
    </div>
  );
};

export default function AboutPage() {
  const stats = [
    { value: '98%', label: 'Flight Tracking Accuracy' },
    { value: '24/7', label: 'AI Agent Availability' },
    { value: '78%', label: 'Reduction in Missed Connections' },
    { value: '2.3M+', label: 'Hours of Passenger Anxiety Saved' },
  ];

  return (
    <>
      <Head>
        <title>About Us | BoardAndGo</title>
        <meta name="description" content="Learn about BoardAndGo's mission to revolutionize flight tracking with AI-powered assistance and real-time updates." />
      </Head>

      <BackgroundElements />
      <PublicNavbar />

      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-24 pb-12 sm:pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-8 relative">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Your Personal AI
              <span className="gradient-text block mt-2">Travel Companion</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              At BoardAndGo, we've built a swarm of AI agents that work tirelessly to track your flights, 
              predict disruptions, and ensure you never miss a connection. From takeoff to landing, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Our Mission
                <span className="gradient-text block mt-2">Peace of Mind in the Skies</span>
              </h2>
              <p className="text-gray-400">
                Born from a moment of clarity at Dubai International Airport, BoardAndGo was created to solve 
                the fragmentation of flight information that causes unnecessary stress for millions of travelers. 
                Our AI-powered platform monitors your flights in real-time, predicts potential disruptions, and 
                provides instant solutions - just like having a personal travel assistant in your pocket.
              </p>
              <div className="space-y-4">
                {[
                  'Real-time aircraft tracking and monitoring',
                  'AI-powered delay predictions and alerts',
                  'Personalized voice calls for critical updates',
                  'Smart connection management and guidance',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7C5DFA]" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/mission-visual.jpg"
                  alt="BoardAndGo Mission"
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

      {/* Stats Section */}
      <section className="py-12 sm:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedStat key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Our Values
              <span className="gradient-text block mt-2">That Guide Us</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Proactive Care',
                description: "We don't just track flights - we anticipate needs and solve problems before they arise.",
                icon: '🚀',
              },
              {
                title: 'Traveler First',
                description: "Every feature we build starts with reducing traveler stress and anxiety.",
                icon: '✈️',
              },
              {
                title: 'Always Connected',
                description: "From takeoff to landing, our AI agents never stop watching over your journey.",
                icon: '🎯',
              },
            ].map((value, index) => (
              <div 
                key={index}
                className="glass-effect rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  );
} 