import Head from 'next/head';
import { useState, useRef, useEffect } from 'react';
import PublicNavbar from '../components/common/PublicNavbar';
import Footer from '../components/common/Footer';
import ScrollToTop from '../components/common/ScrollToTop';
import BackgroundElements from '../components/common/BackgroundElements';

const QuickHelp = ({ title, description, icon }) => (
  <div className="glass-effect rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300">
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl bg-[#7C5DFA]/10 flex items-center justify-center text-[#7C5DFA]">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left hover:text-[#7C5DFA] transition-colors duration-300"
      >
        <span className="font-medium">{question}</span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div 
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ height: height ? `${height}px` : '0px' }}
      >
        <p className="pb-4 text-gray-400 transition-opacity duration-300" 
           style={{ opacity: isOpen ? 1 : 0 }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

export default function SupportPage() {
  return (
    <>
      <Head>
        <title>Support | BoardAndGo</title>
        <meta name="description" content="Get help with your BoardAndGo account and flight tracking needs." />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:url" content="https://boardandgo.com/support" />
        <meta property="og:title" content="Support | BoardAndGo" />
        <meta property="og:description" content="Get help with your BoardAndGo account and flight tracking needs." />
        <meta property="og:image" content="https://boardandgo.com/og-image-support.jpg" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:title" content="Support | BoardAndGo" />
        <meta name="twitter:description" content="Get help with your BoardAndGo account and flight tracking needs." />
        <meta name="twitter:image" content="https://boardandgo.com/og-image-support.jpg" />
      </Head>

      <BackgroundElements />
      <PublicNavbar />

      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-16 md:pt-24 pb-8 sm:pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-6 sm:space-y-8 relative">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              How Can We
              <span className="gradient-text block mt-2">Help You?</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="py-8 sm:py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <QuickHelp
              title="Live Chat Support"
              description="Chat with our support team 24/7 for immediate assistance with your account or flight tracking."
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              }
            />
            <QuickHelp
              title="Email Support"
              description="Send us an email at support@boardandgo.com for detailed inquiries and account issues."
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
            />
            <QuickHelp
              title="Phone Support"
              description="Call us at +1 (231) 625-5322 for urgent assistance with your flight tracking."
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 sm:py-12 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem
              question="How do I track multiple flights?"
              answer="With our Pro plan, you can track up to 3 connecting flights simultaneously. Business plan users get unlimited flight tracking."
            />
            <FAQItem
              question="What happens if my flight is delayed?"
              answer="Our AI system will immediately notify you through your preferred channels and provide alternative options if needed."
            />
            <FAQItem
              question="Can I share my flight status?"
              answer="Yes, you can easily share your flight status with family and friends through the app using email, SMS, or WhatsApp."
            />
            <FAQItem
              question="How accurate is the tracking?"
              answer="Our flight tracking is 98% accurate, using multiple data sources including AviationStack API and FlightAware."
            />
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  );
} 