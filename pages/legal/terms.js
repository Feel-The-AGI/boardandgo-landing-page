import Head from 'next/head';
import Footer from '../../components/common/Footer';
import ScrollToTop from '../../components/common/ScrollToTop';
import BackgroundElements from '../../components/common/BackgroundElements';
import { 
  EnvelopeIcon as MailIcon,
  PhoneIcon,
  MapPinIcon as LocationIcon 
} from '@heroicons/react/24/outline';
import PublicNavbar from '../../components/common/PublicNavbar';

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms & Conditions | BoardAndGo</title>
        <meta name="description" content="Terms and conditions for using BoardAndGo's flight tracking and AI assistance services." />
      </Head>

      <BackgroundElements />
      <PublicNavbar />

      <div className="relative pt-12 sm:pt-16 pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-gray-400 text-lg">Our service agreement and usage terms</p>
          </div>
          <div className="space-y-12">
            <section>
              <div className="glass-effect rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold mb-6 gradient-text">Service Description</h2>
                <p>
                  BoardAndGo provides an AI-powered flight tracking and assistance platform that includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Real-time flight tracking and monitoring</li>
                  <li>AI voice call notifications for critical updates</li>
                  <li>Multi-channel notifications (SMS, email, WhatsApp)</li>
                  <li>Connection assistance and rebooking suggestions</li>
                  <li>Weather impact analysis and predictions</li>
                  <li>Terminal navigation assistance</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="glass-effect rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold mb-6 gradient-text">AI Voice Calls</h2>
                <p>
                  By using BoardAndGo, you acknowledge and agree that:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Our AI assistant "Amy" will make voice calls for critical flight updates</li>
                  <li>Calls may be recorded for quality assurance and service improvement</li>
                  <li>Voice interactions are processed using artificial intelligence</li>
                  <li>You can opt out of voice calls while maintaining other notification methods</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="glass-effect rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold mb-6 gradient-text">Data Usage and Privacy</h2>
                <p>
                  To provide our services, we collect and process:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Flight itinerary information</li>
                  <li>Current location (for terminal navigation)</li>
                  <li>Contact information for notifications</li>
                  <li>Travel preferences and history</li>
                  <li>Voice call recordings when applicable</li>
                </ul>
                <p>
                  All data is processed in accordance with our Privacy Policy and applicable data protection laws.
                </p>
              </div>
            </section>

            <section>
              <div className="glass-effect rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold mb-6 gradient-text">Service Reliability</h2>
                <p>
                  While we strive for 99.9% uptime and accuracy:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Flight data is sourced from multiple providers and airlines</li>
                  <li>We cannot guarantee absolute accuracy of third-party information</li>
                  <li>Service availability may be affected by factors beyond our control</li>
                  <li>Users should always verify critical information with their airline</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="glass-effect rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold mb-6 gradient-text">User Responsibilities</h2>
                <p>
                  Users agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Provide accurate flight and contact information</li>
                  <li>Maintain updated contact details for notifications</li>
                  <li>Not rely solely on BoardAndGo for critical travel decisions</li>
                  <li>Use the service in compliance with applicable laws and regulations</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="glass-effect rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold mb-6 gradient-text">Subscription and Billing</h2>
                <p>
                  Our service tiers include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Basic (Free): Single flight tracking with basic updates</li>
                  <li>Pro ($5/month): Up to 3 connecting flights with AI assistance</li>
                  <li>Business ($10/month): Unlimited tracking with premium features</li>
                </ul>
                <p>
                  Subscriptions are billed monthly and can be canceled at any time.
                </p>
              </div>
            </section>

            <section>
              <div className="glass-effect rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold mb-6 gradient-text">Limitation of Liability</h2>
                <p>
                  BoardAndGo shall not be liable for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Missed connections due to inaccurate third-party data</li>
                  <li>Costs incurred from AI-suggested alternative arrangements</li>
                  <li>Consequential losses from service disruptions</li>
                  <li>Issues arising from telecommunication service failures</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="glass-effect rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold mb-6 gradient-text">Service Modifications</h2>
                <p>
                  We reserve the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Modify or discontinue features with reasonable notice</li>
                  <li>Update pricing with 30 days advance notice</li>
                  <li>Improve AI systems and algorithms</li>
                  <li>Add or remove third-party data sources</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="glass-effect rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold mb-6 gradient-text">Contact Information</h2>
                <p>
                  For questions about these terms, contact us at:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <li className="glass-effect p-4 rounded-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#7C5DFA]/10 flex items-center justify-center text-[#7C5DFA]">
                      <MailIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p>legal@boardandgo.com</p>
                    </div>
                  </li>
                  <li className="glass-effect p-4 rounded-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#7C5DFA]/10 flex items-center justify-center text-[#7C5DFA]">
                      <PhoneIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p>+1 (231) 625-5322</p>
                    </div>
                  </li>
                  <li className="glass-effect p-4 rounded-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#7C5DFA]/10 flex items-center justify-center text-[#7C5DFA]">
                      <LocationIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Address</p>
                      <p>Trassaco Springs Estates</p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            <p className="text-sm text-gray-400 text-center mt-12 pt-8 border-t border-white/10">
              Last updated: January 2, 2025
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </>
  );
} 