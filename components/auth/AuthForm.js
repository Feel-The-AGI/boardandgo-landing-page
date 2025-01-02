import { useState } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import Link from 'next/link';
import { GoogleIcon } from '../icons';

export default function AuthForm({ type = 'login', onSubmit, onGoogleAuth }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors(prev => ({
        ...prev,
        [e.target.name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (type === 'signup' && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="glass-effect p-8 rounded-2xl w-full max-w-md relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 via-accent-blue/10 to-accent-pink/10 opacity-50" />
      
      <div className="relative">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {type === 'login' ? 'Welcome Back' : 'Create Account'}
        </h2>
        
        {/* Google SSO Button */}
        <div className="mb-6">
          <button
            onClick={onGoogleAuth}
            className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-white/10 rounded-lg hover:bg-white/5 transition-colors duration-200"
          >
            <GoogleIcon />
            <span className="text-sm font-medium">
              {type === 'login' ? 'Sign in with Google' : 'Sign up with Google'}
            </span>
          </button>
        </div>

        {/* Divider - Updated to remove dark background */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 text-gray-400">or continue with email</span>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="Enter your email"
          />
          
          <Input
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            placeholder="Enter your password"
          />
          
          {type === 'signup' && (
            <Input
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              placeholder="Confirm your password"
            />
          )}
          
          <Button
            type="submit"
            variant="primary"
            className="w-full"
          >
            {type === 'login' ? 'Sign In' : 'Sign Up'}
          </Button>
        </form>
        
        <div className="mt-6 text-center text-sm">
          {type === 'login' ? (
            <p className="text-gray-400">
              Don't have an account?{' '}
              <Link href="/auth/signup" className="text-accent-purple hover:text-accent-blue transition-colors">
                Sign up
              </Link>
            </p>
          ) : (
            <p className="text-gray-400">
              Already have an account?{' '}
              <Link href="/auth/login" className="text-accent-purple hover:text-accent-blue transition-colors">
                Sign in
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
