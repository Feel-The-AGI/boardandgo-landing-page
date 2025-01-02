import FeatureIcon from './FeatureIcon';

export default function FeatureCard({ title, description, icon }) {
  return (
    <div className="glass-effect rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
      <div className="mb-4">
        <FeatureIcon icon={icon} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
} 