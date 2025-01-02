import { useState } from 'react';
import Link from 'next/link';

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

  return (
    <div className="relative">
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 p-1.5 text-white hover:text-[#7C5DFA] transition-colors"
        aria-label="Menu"
      >
        <div className={`transform transition-all duration-300 ${isOpen ? 'rotate-90' : ''}`}>
          <MenuIcon />
        </div>
      </button>

      {/* Overlay */}
      <div 
        className={`
          fixed inset-0 bg-black/90 transition-all duration-300 z-40
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setIsOpen(false)}
      />

      {/* Menu Panel */}
      <div 
        className={`
          fixed top-0 right-0 h-full w-[240px] 
          bg-[#0A0A0B]/95
          transform transition-transform duration-300
          border-l border-white/10 flex flex-col z-50
          shadow-xl
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Menu Content */}
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#0A0A0B]">
            <span className="text-base font-medium text-white">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 p-4 bg-[#0A0A0B]/95">
            <div className="flex flex-col gap-3">
              <Link 
                href="/auth/login"
                className="text-gray-400 hover:text-white transition-colors py-2 flex items-center gap-2 border-b border-white/10 text-sm"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Login
              </Link>
              <Link 
                href="/auth/signup"
                className="bg-[#7C5DFA] hover:bg-[#8F75FF] transition-colors px-4 py-2 rounded-full text-white text-sm font-medium flex items-center justify-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
} 