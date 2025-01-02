import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/common/Footer';
import ScrollToTop from '../components/common/ScrollToTop';
import BackgroundElements from '../components/common/BackgroundElements';

const FeatureShowcase = ({ title, description, visual, isReversed = false }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(title);
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [title]);

  return (
    <div 
      id={title}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}
    >
      <div className={`space-y-6 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
        <h3 className="text-2xl sm:text-3xl font-bold">
          {title}
        </h3>
        <div className="prose prose-invert">
          {description}
        </div>
      </div>
      <div className={`relative ${isVisible ? 'animate-slideIn' : 'opacity-0'}`}>
        {visual}
      </div>
    </div>
  );
};

const AICallSimulation = () => (
  <div className="glass-effect rounded-2xl p-6 space-y-4">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-[#7C5DFA] flex items-center justify-center">
        <span className="text-sm">AI</span>
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-400">Amy from BoardAndGo</p>
        <p className="text-white">Your flight to Paris has arrived at Gate B15, which is about 12 minutes walk from your current location. Boarding begins in 45 minutes.</p>
      </div>
    </div>
    <div className="flex items-center gap-3 opacity-60">
      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
        <span className="text-sm">S</span>
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-400">Sarah</p>
        <p className="text-white">Perfect, thanks! Will I make my connection?</p>
      </div>
    </div>
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-[#7C5DFA] flex items-center justify-center">
        <span className="text-sm">AI</span>
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-400">Amy from BoardAndGo</p>
        <p className="text-white">Yes, we're expecting an early arrival at 7:45 AM. I've already updated your pre-arranged taxi with the new time.</p>
      </div>
    </div>
  </div>
);

const LiveFlightCard = () => (
  <div className="glass-effect rounded-2xl p-6">
    <div className="flex justify-between items-start mb-6">
      <div>
        <h4 className="text-lg font-semibold">AF023 • Paris</h4>
        <p className="text-sm text-gray-400">Airbus A350-900</p>
      </div>
      <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm">On Time</span>
    </div>
    <div className="space-y-4">
      <div className="relative">
        <div className="h-1 bg-white/10 rounded-full">
          <div className="h-full w-3/4 bg-gradient-to-r from-[#7C5DFA] to-accent-blue rounded-full" />
        </div>
        <div className="flex justify-between text-sm text-gray-400 mt-2">
          <span>JFK</span>
          <span>CDG</span>
        </div>
      </div>
      <div className="flex justify-between text-sm">
        <div>
          <p className="text-gray-400">Gate</p>
          <p className="font-semibold">B15</p>
        </div>
        <div>
          <p className="text-gray-400">Arrival</p>
          <p className="font-semibold text-green-400">7:45 AM</p>
        </div>
        <div>
          <p className="text-gray-400">Weather</p>
          <p className="font-semibold">🌧️ 16°C</p>
        </div>
      </div>
    </div>
  </div>
);

export default function FeaturesPage() {
  const features = [
    {
      title: "AI Voice Calls That Feel Human",
      description: (
        <>
          <p>
            Forget robotic notifications. Our AI agents make natural voice calls that feel like talking to a helpful friend. 
            They understand context, anticipate your needs, and provide solutions before you even ask.
          </p>
          <p className="mt-4">
            From gate changes to weather updates, we keep you informed with conversations that feel natural and helpful.
          </p>
        </>
      ),
      visual: <AICallSimulation />
    },
    {
      title: "Real-Time Flight Tracking",
      description: (
        <>
          <p>
            Watch your journey unfold with stunning precision. Our platform tracks your aircraft's exact location, 
            speed, and status in real-time, giving you complete peace of mind.
          </p>
          <p className="mt-4">
            We monitor everything from weather patterns to airport operations, ensuring you're always one step ahead.
          </p>
        </>
      ),
      visual: <LiveFlightCard />
    },
    {
      title: "Smart Connection Protection",
      description: (
        <>
          <p>
            Never stress about tight connections again. Our AI calculates real-time walking distances between gates, 
            monitors your flight's progress, and even arranges fast-track services when needed.
          </p>
          <p className="mt-4">
            We'll guide you through terminals with turn-by-turn directions, ensuring you make every connection with time to spare.
          </p>
        </>
      ),
      visual: (
        <div className="relative h-[300px] w-full">
          <Image
            src="/images/terminal-map.jpg"
            alt="Terminal Navigation"
            fill
            className="object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent rounded-2xl" />
        </div>
      )
    }
  ];

  return (
    <>
      <Head>
        <title>Features | BoardAndGo</title>
        <meta 
          name="description" 
          content="Experience the future of flight tracking with BoardAndGo's AI-powered features. Real-time updates, smart connections, and human-like assistance." 
        />
      </Head>

      <BackgroundElements />

      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-24 pb-12 sm:pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-8 relative">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Travel With
              <span className="gradient-text block mt-2">Peace of Mind</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Let our AI agents handle the complexities of flight tracking while you focus on what matters. 
              From takeoff to landing, we've got your back.
            </p>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-12 sm:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-24">
            {features.map((feature, index) => (
              <FeatureShowcase
                key={feature.title}
                {...feature}
                isReversed={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '98%', label: 'Tracking Accuracy' },
              { value: '78%', label: 'Fewer Missed Connections' },
              { value: '24/7', label: 'AI Availability' },
              { value: '2.3M+', label: 'Hours of Anxiety Saved' }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
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