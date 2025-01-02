import Head from 'next/head';
import { useState } from 'react';
import PublicNavbar from '../components/common/PublicNavbar';
import Footer from '../components/common/Footer';
import ScrollToTop from '../components/common/ScrollToTop';
import BackgroundElements from '../components/common/BackgroundElements';

const StatusIndicator = ({ status }) => {
  const colors = {
    operational: 'bg-green-500',
    degraded: 'bg-yellow-500',
    outage: 'bg-red-500'
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`w-2.5 h-2.5 rounded-full ${colors[status]} animate-pulse`} />
      <span className="capitalize">{status}</span>
    </div>
  );
};

const ServiceStatus = ({ name, status, uptime }) => (
  <div className="glass-effect rounded-xl p-6">
    <div className="flex items-center justify-between mb-4">
      <h3 className="font-semibold">{name}</h3>
      <StatusIndicator status={status} />
    </div>
    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
      <div 
        className="h-full bg-[#7C5DFA] rounded-full transition-all duration-500"
        style={{ width: `${uptime}%` }}
      />
    </div>
    <p className="text-sm text-gray-400 mt-2">
      {uptime}% uptime last 30 days
    </p>
  </div>
);

export default function StatusPage() {
  const services = [
    {
      name: 'Flight Tracking',
      status: 'operational',
      uptime: 99.98
    },
    {
      name: 'AI Voice Calling',
      status: 'operational',
      uptime: 99.95
    },
    {
      name: 'Real-time Updates',
      status: 'operational',
      uptime: 99.99
    },
    {
      name: 'Mobile App',
      status: 'operational',
      uptime: 99.97
    },
    {
      name: 'Authentication',
      status: 'operational',
      uptime: 100
    },
    {
      name: 'Payment Processing',
      status: 'operational',
      uptime: 99.99
    }
  ];

  return (
    <>
      <Head>
        <title>System Status | BoardAndGo</title>
        <meta 
          name="description" 
          content="Check the current status of BoardAndGo's services and systems." 
        />
      </Head>

      <BackgroundElements />
      <PublicNavbar />

      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-16 md:pt-24 pb-8 sm:pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-6 sm:space-y-8 relative">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              System Status
              <span className="gradient-text block mt-2">All Systems Operational</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Track the performance and availability of BoardAndGo's services in real-time.
            </p>
          </div>
        </div>
      </section>

      {/* Status Grid */}
      <section className="py-8 sm:py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <ServiceStatus
                key={service.name}
                {...service}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Incident History */}
      <section className="py-8 sm:py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Past Incidents</h2>
          <div className="glass-effect rounded-xl p-6">
            <p className="text-gray-400 text-center py-8">
              No incidents reported in the last 90 days.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  );
} 