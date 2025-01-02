import { useState, useRef, useEffect } from 'react';
import FeatureIcon from './FeatureIcon';

export default function FeatureCard({ title, description, icon }) {
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
      className="glass-effect rounded-2xl p-6 hover:scale-105 transition-transform duration-300 relative overflow-hidden group"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Glow effect */}
      <div
        className={`
          absolute pointer-events-none transition-opacity duration-300
          bg-[#7C5DFA] opacity-0 group-hover:opacity-20 blur-[100px]
          w-[200px] h-[200px] -translate-x-1/2 -translate-y-1/2
        `}
        style={{
          left: position.x,
          top: position.y,
          transition: isHovering ? 'none' : 'opacity 300ms ease-in-out',
        }}
      />

      {/* Card content */}
      <div className="relative z-10">
        <div className="mb-4">
          <FeatureIcon icon={icon} />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
} 