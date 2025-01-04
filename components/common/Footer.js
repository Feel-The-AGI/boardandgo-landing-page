import { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  return (
    <footer className="border-t border-white/10 bg-background relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent-purple/5 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Logo & Contact */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 space-y-6">
            <div className="flex items-center">
              <svg width="30" height="42" viewBox="0 0 30 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.2343 17.2409L7.70618 11.9122L6.21994 12.6553L8.19958 17.3134L13.2343 17.2409Z" fill="url(#paint0_linear_347_310)"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0111281 14.4958C0.320721 6.68551 7.02114 0.2813 15.0325 0.555713C22.9742 0.827946 29.2494 7.56485 29.0658 15.4163C28.8853 23.1291 22.5373 29.3446 15.0315 29.5923C6.78902 29.8645 -0.320074 22.8592 0.0111281 14.4958ZM14.9765 2.19135C7.87768 1.9482 1.92087 7.63735 1.64644 14.5606C1.35334 21.9619 7.67279 28.1978 14.9775 27.9566C18.9959 27.8239 22.6453 25.7542 24.9402 22.6301H17.7716C15.8358 22.133 13.9569 21.4365 12.1649 20.5517C10.8204 19.8879 9.52961 19.1203 8.3043 18.2559L22.9915 17.8934L19.1732 8.17844L21.1065 6.97011L26.9842 11.7404C25.5366 6.44821 20.7483 2.3892 14.9765 2.19135Z" fill="url(#paint1_linear_347_310)"/>
                <path d="M18.132 36.6517C19.3247 34.6723 20.2818 32.5601 20.9837 30.3583V30.3563C20.5108 31.6675 19.6389 32.7975 18.4905 33.5875C17.3422 34.3775 15.9751 34.7878 14.5816 34.7607H14.4889C13.151 34.798 11.8343 34.421 10.7189 33.6812C9.12496 32.6169 8.0858 30.3583 8.0858 30.3583C9.38647 34.4415 11.5589 38.1934 14.4527 41.3541L14.5302 41.4387L14.5352 41.4447L14.5366 41.4431L14.5403 41.4468V41.4417H14.5378L14.5403 41.4387L14.6178 41.3541C15.9416 39.9065 17.1188 38.3314 18.132 36.6517Z" fill="url(#paint2_linear_347_310)"/>
                <path d="M14.5302 41.4417V41.4528L14.5352 41.4478L14.5302 41.4417Z" fill="url(#paint3_linear_347_310)"/>
                <defs>
                  <linearGradient id="paint0_linear_347_310" x1="14.5349" y1="0.547211" x2="14.5349" y2="41.4528" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#7857FF"/>
                    <stop offset="1" stop-color="#3B82F6"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_347_310" x1="14.5349" y1="0.547211" x2="14.5349" y2="41.4528" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#7857FF"/>
                    <stop offset="1" stop-color="#3B82F6"/>
                  </linearGradient>
                  <linearGradient id="paint2_linear_347_310" x1="14.5349" y1="0.547211" x2="14.5349" y2="41.4528" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#7857FF"/>
                    <stop offset="1" stop-color="#3B82F6"/>
                  </linearGradient>
                  <linearGradient id="paint3_linear_347_310" x1="14.5349" y1="0.547211" x2="14.5349" y2="41.4528" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#7857FF"/>
                    <stop offset="1" stop-color="#3B82F6"/>
                  </linearGradient>
                </defs>
              </svg>
              <h3 className="text-xl sm:text-2xl font-bold gradient-text hover:scale-105 transition-transform cursor-pointer ml-2">
                BoardAndGo
              </h3>
            </div>
            <div className="space-y-4">
              <a 
                href="mailto:contact@boardandgo.com" 
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 group"
              >
                <MailIcon className="w-4 h-4 group-hover:text-accent-purple transition-colors" />
                <span className="text-sm sm:text-base">contact@boardandgo.com</span>
              </a>
              <a 
                href="tel:+12316255322" 
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 group"
              >
                <PhoneIcon className="w-4 h-4 group-hover:text-accent-purple transition-colors" />
                <span className="text-sm sm:text-base">+ 1 (231) 625-5322</span>
              </a>
              <a
                href="https://www.linkedin.com/company/boardandgo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 group"
                onMouseEnter={() => setHoveredSocial('LinkedIn')}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                <LinkedInIcon className="w-4 h-4 group-hover:text-accent-purple transition-colors" />
                <span className="text-sm sm:text-base">Follow us on LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          {['Company', 'Product', 'Help Center', 'Legal'].map((section) => (
            <div key={section} className="col-span-1">
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 gradient-text">
                {section}
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {getLinksForSection(section).map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent-purple/50 group-hover:scale-150 transition-transform" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors text-center">
            © 2025 BoardAndGo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Helper function to get links for each section
function getLinksForSection(section) {
  switch (section) {
    case 'Company':
      return [
        { name: 'About', href: '/about' },
        { name: 'Careers', href: '/careers' }
      ];
    case 'Product':
      return [
        { name: 'Features', href: '/features' },
        { name: 'Pricing', href: '/pricing' }
      ];
    case 'Help Center':
      return [
        { name: 'Support', href: '/support' },
        { name: 'Status', href: '/status' }
      ];
    case 'Legal':
      return [
        { name: 'Terms & Conditions', href: '/legal/terms' },
        { name: 'Privacy Policy', href: '/legal/privacy' }
      ];
    default:
      return [];
  }
}

// Icons components
const MailIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const LinkedInIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
