import { useState } from 'react';
import Link from 'next/link';
import AviationMenu from './AviationMenu';

export default function PublicNavbar() {
  return (
    <div className="fixed top-0 left-0 right-0 h-16 px-4 sm:px-6 z-30 bg-background/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-xl sm:text-2xl font-bold">
            <Link href="/" className="gradient-text">BoardAndGo</Link>
          </h1>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <Link 
            href="/auth/login"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Login
          </Link>
          <Link href="/auth/signup">
            <button className="bg-[#7C5DFA] hover:bg-[#8F75FF] transition-colors px-4 py-2 rounded-full text-sm font-medium text-white">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="block sm:hidden">
          <AviationMenu />
        </div>
      </div>
    </div>
  );
} 