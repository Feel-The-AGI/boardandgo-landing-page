import { useState } from 'react';
import Button from '../components/common/Button';
import { BellIcon, EmailIcon, PhoneIcon, ChatIcon } from '../components/icons';

export default function NotificationsPage() {
  const [preferences, setPreferences] = useState({
    push: true,
    email: true,
    sms: false,
    whatsapp: false
  });

  const [emailInput, setEmailInput] = useState('user@example.com');
  const [phoneInput, setPhoneInput] = useState('+1234567890');

  const handleToggle = (key) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSave = () => {
    // TODO: Implement save to backend
    console.log('Saving preferences:', { preferences, emailInput, phoneInput });
  };

  // Updated ToggleButton component with smoother animations
  const ToggleButton = ({ isActive, onClick }) => (
    <button
      onClick={onClick}
      className={`
        relative w-14 h-7 rounded-full transition-all duration-500 ease-in-out
        ${isActive 
          ? 'bg-gradient-to-r from-accent-purple to-accent-blue' 
          : 'bg-white/5'
        }
        group overflow-hidden
      `}
    >
      {/* Background animation */}
      <div className={`
        absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-blue
        transition-opacity duration-500 ease-in-out opacity-0
        group-hover:opacity-50
      `} />

      {/* Toggle handle with smooth animation */}
      <div className={`
        absolute top-1 w-5 h-5 rounded-full
        transition-all duration-500 ease-in-out
        ${isActive 
          ? 'right-1 bg-white scale-100' 
          : 'left-1 bg-gray-200 scale-90'
        }
        transform
        group-hover:scale-100
        group-hover:shadow-lg
        group-hover:shadow-accent-purple/25
      `}>
        {/* Inner glow effect */}
        <div className={`
          absolute inset-0 rounded-full
          transition-opacity duration-500
          ${isActive 
            ? 'bg-gradient-to-br from-white via-white to-gray-100 opacity-100' 
            : 'opacity-0'
          }
        `} />
      </div>
    </button>
  );

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Notification <span className="gradient-text">Settings</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose how you want to receive updates about your flights
          </p>
        </div>

        {/* Notification Channels */}
        <div className="glass-effect p-6 rounded-2xl mb-8">
          <h2 className="text-xl font-semibold mb-6">Notification Channels</h2>
          
          <div className="space-y-6">
            {/* Push Notifications */}
            <div className="flex items-center justify-between p-4 glass-effect rounded-xl hover:bg-white/[0.03] transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-purple/10 to-accent-blue/10 flex items-center justify-center">
                  <BellIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium">Push Notifications</h3>
                  <p className="text-sm text-gray-400">Receive updates in the app</p>
                </div>
              </div>
              <ToggleButton 
                isActive={preferences.push} 
                onClick={() => handleToggle('push')}
              />
            </div>

            {/* Email Notifications */}
            <div className="flex items-center justify-between p-4 glass-effect rounded-xl hover:bg-white/[0.03] transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-purple/10 to-accent-blue/10 flex items-center justify-center">
                  <EmailIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium">Email Notifications</h3>
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="text-sm bg-transparent border-b border-white/10 focus:border-accent-purple focus:outline-none px-0 py-1"
                  />
                </div>
              </div>
              <ToggleButton 
                isActive={preferences.email} 
                onClick={() => handleToggle('email')}
              />
            </div>

            {/* SMS Notifications */}
            <div className="flex items-center justify-between p-4 glass-effect rounded-xl hover:bg-white/[0.03] transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-purple/10 to-accent-blue/10 flex items-center justify-center">
                  <PhoneIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium">SMS Notifications</h3>
                  <input
                    type="tel"
                    value={phoneInput}
                    onChange={(e) => setPhoneInput(e.target.value)}
                    className="text-sm bg-transparent border-b border-white/10 focus:border-accent-purple focus:outline-none px-0 py-1"
                  />
                </div>
              </div>
              <ToggleButton 
                isActive={preferences.sms} 
                onClick={() => handleToggle('sms')}
              />
            </div>

            {/* WhatsApp Notifications */}
            <div className="flex items-center justify-between p-4 glass-effect rounded-xl hover:bg-white/[0.03] transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-purple/10 to-accent-blue/10 flex items-center justify-center">
                  <ChatIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium">WhatsApp Notifications</h3>
                  <p className="text-sm text-gray-400">Uses your phone number</p>
                </div>
              </div>
              <ToggleButton 
                isActive={preferences.whatsapp} 
                onClick={() => handleToggle('whatsapp')}
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button
            variant="primary"
            onClick={handleSave}
            className="px-8"
          >
            Save Preferences
          </Button>
        </div>
      </div>
    </div>
  );
}
