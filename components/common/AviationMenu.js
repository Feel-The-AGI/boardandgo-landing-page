import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor">
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

export default function AviationMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
  ];

  return (
    <div className="relative">
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 p-1.5 text-white hover:text-[#7C5DFA] transition-colors"
        aria-label="Menu"
      >
        <div className={`transform transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <MenuIcon />
        </div>
      </button>

      {/* Dropdown Menu */}
      <div 
        className={`
          fixed left-0 right-0 bg-[#0A0A0B] border-b border-white/10
          transform transition-all duration-500 ease-out origin-top
          ${isOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-full pointer-events-none'
          }
          z-40 shadow-xl
        `}
      >
        <nav className="max-w-7xl mx-auto px-4 py-6">
          <ul className="space-y-3">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors py-2 flex items-center text-sm group"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C5DFA] mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/10">
            <Link 
              href="/auth/login"
              className="flex-1 text-center text-gray-300 hover:text-white transition-colors py-2 text-sm"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </Link>
            <Link 
              href="/auth/signup"
              className="flex-1 bg-[#7C5DFA] hover:bg-[#8F75FF] transition-colors px-4 py-2 rounded-full text-white text-sm font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </div>

      {/* Overlay */}
      <div 
        className={`
          fixed inset-0 bg-black/60 transition-opacity duration-500
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        style={{ zIndex: 30 }}
        onClick={() => setIsOpen(false)}
      />
    </div>
  );
} 