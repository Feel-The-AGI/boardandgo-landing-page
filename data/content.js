import {
  PlaneIcon,
  BellIcon,
  MapIcon,
  ChartIcon,
  SpeedIcon,
  ClockIcon,
  DocumentIcon,
  BrainIcon
} from '../components/icons';

export const features = [
  {
    title: 'Real-Time Aircraft Tracking',
    description: "Track your flight with 98% accuracy, from takeoff to landing. Our AI agents monitor your aircraft's location, speed, and status in real-time.",
    icon: '✈',
  },
  {
    title: 'Smart Connection Management',
    description: 'Never miss a connection. Our AI calculates optimal routes through terminals and alerts you about gate changes or delays.',
    icon: <svg className="w-6 h-6 text-[#7C5DFA]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>,
  },
  {
    title: 'Proactive AI Assistance',
    description: 'Receive voice calls for critical updates and instant solutions for disruptions before they impact your journey.',
    icon: <svg className="w-6 h-6 text-[#7C5DFA]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>,
  },
  {
    title: 'Multi-Flight Monitoring',
    description: 'Track multiple flights simultaneously. Perfect for complex itineraries and connecting flights across different airlines.',
    icon: <svg className="w-6 h-6 text-[#7C5DFA]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
    </svg>,
  },
];

export const benefits = [
  {
    title: 'Peace of Mind',
    description: 'Our AI agents work 24/7 to monitor your flights and predict potential disruptions before they happen.',
    icon: '🛡️',
  },
  {
    title: 'Time Saved',
    description: 'Smart terminal navigation and real-time updates help you make connections efficiently.',
    icon: '⏱️',
  },
  {
    title: 'Stress Reduced',
    description: 'From voice calls for critical updates to instant rebooking suggestions, we handle the complexities.',
    icon: '🧘',
  },
];

export const testimonials = [
  {
    name: 'Sarah C.',
    role: 'Business Consultant',
    content: "BoardAndGo's AI agents called me about my Paris connection while I was still at JFK. They had already calculated my walking time to the gate and confirmed my flight was on schedule.",
    image: '/testimonials/sarah.jpg',
  },
  {
    name: 'Emma T.',
    role: 'Digital Nomad',
    content: "Managing four connecting flights across three continents was a breeze. The AI Agents tracked each flight and even arranged fast-track security when my connection was tight.",
    image: '/testimonials/emma.jpg',
  },
  {
    name: 'James W.',
    role: 'Software Developer',
    content: "When my Tokyo flight was diverted, BoardAndGo's AI Agents had already arranged my hotel and rebooking before we landed. Incredible proactive service!",
    image: '/testimonials/james.jpg',
  },
  {
    name: 'Maria R.',
    role: 'Management Consultant',
    content: "The voice updates about my next flight while I'm still in the air are game-changing. Makes tight connections so much less stressful.",
    image: '/testimonials/maria.jpg',
  },
]; 