import { useState, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/common/Footer';
import ScrollToTop from '../components/common/ScrollToTop';
import BackgroundElements from '../components/common/BackgroundElements';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#7C5DFA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const PricingCard = ({ plan, isPopular }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      className={`
        glass-effect rounded-2xl p-6 sm:p-8 relative overflow-visible group
        hover:scale-[1.02] transition-all duration-300
        ${isPopular ? 'border-2 border-[#7C5DFA]' : 'border border-white/10'}
      `}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Glow effect */}
      <div
        className={`
          absolute pointer-events-none transition-opacity duration-300 overflow-hidden
          bg-[#7C5DFA] opacity-0 group-hover:opacity-20 blur-[100px]
          w-[200px] h-[200px] -translate-x-1/2 -translate-y-1/2
        `}
        style={{
          left: position.x,
          top: position.y,
          transition: isHovering ? 'none' : 'opacity 300ms ease-in-out',
        }}
      />

      {/* Popular badge */}
      {isPopular && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
          <span className="bg-[#7C5DFA] text-white text-sm px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      
      {/* Card content */}
      <div className="relative z-10 mt-2">
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
          <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-3xl font-bold">${plan.price}</span>
            <span className="text-gray-400">/ month</span>
          </div>
        </div>

        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-sm">
              <CheckIcon />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>

        <Link 
          href="/auth/signup"
          className={`
            w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full 
            text-sm font-medium transition-all duration-300
            ${isPopular 
              ? 'bg-[#7C5DFA] hover:bg-[#8F75FF] text-white' 
              : 'bg-white/5 hover:bg-white/10 text-white'
            }
            group relative overflow-hidden
          `}
        >
          <span className="relative z-10">Get Started</span>
          <span className="relative z-10 transform group-hover:translate-x-1 transition-transform">
            →
          </span>
          
          {/* Button hover glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-300 bg-gradient-to-r from-accent-purple via-accent-blue to-accent-purple" />
        </Link>
      </div>
    </div>
  );
};

export default function PricingPage() {
  const plans = [
    {
      name: "Basic",
      description: "Perfect for occasional travelers",
      price: "0",
      features: [
        "Track single flight in real-time",
        "Basic flight status updates",
        "Email notifications",
        "Weather updates at destination",
        "Basic gate information"
      ]
    },
    {
      name: "Pro",
      description: "For frequent flyers",
      price: "5",
      features: [
        "Everything in Basic, plus:",
        "Track up to 3 connecting flights",
        "AI voice calls for critical updates",
        "Smart connection assistance",
        "Interactive terminal maps",
        "Turn-by-turn terminal navigation",
        "Real-time walking times to gates",
        "Lounge access information",
        "Priority customer support"
      ]
    },
    {
      name: "Business",
      description: "For teams and organizations",
      price: "10",
      features: [
        "Everything in Pro, plus:",
        "Unlimited flight tracking",
        "Automatic rebooking suggestions",
        "Fast-track security booking",
        "Hotel arrangements during delays",
        "Conference organizer updates",
        "Expense tracking for disruptions",
        "24/7 dedicated support"
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Pricing | BoardAndGo</title>
        <meta 
          name="description" 
          content="Choose the perfect plan for your travel needs. From basic flight tracking to advanced AI assistance, we've got you covered." 
        />
      </Head>

      <BackgroundElements />

      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-24 pb-12 sm:pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-8 relative">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Simple Pricing,
              <span className="gradient-text block mt-2">Peace of Mind</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the perfect plan for your journey. All plans include our core flight tracking technology.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 sm:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <PricingCard 
                key={plan.name} 
                plan={plan} 
                isPopular={index === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {[
              {
                q: "Can I switch plans anytime?",
                a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
              },
              {
                q: "Is there a free trial?",
                a: "Yes! You can try our Pro plan free for 14 days. No credit card required."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, PayPal, and Apple Pay."
              },
              {
                q: "How does the AI voice calling work?",
                a: "Our AI makes proactive calls for critical updates about your flight, such as gate changes or delays. It's like having a personal travel assistant."
              }
            ].map((faq) => (
              <div key={faq.q} className="glass-effect rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
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