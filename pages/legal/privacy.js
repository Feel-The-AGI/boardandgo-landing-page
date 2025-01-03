import Head from 'next/head';
import PublicNavbar from '../../components/common/PublicNavbar';
import Footer from '../../components/common/Footer';
import ScrollToTop from '../../components/common/ScrollToTop';
import BackgroundElements from '../../components/common/BackgroundElements';
import { 
  EnvelopeIcon as MailIcon,
  PhoneIcon,
  MapPinIcon as LocationIcon 
} from '@heroicons/react/24/outline';

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | BoardAndGo</title>
        <meta name="description" content="Learn how BoardAndGo protects and handles your data while providing flight tracking and AI assistance services." />
+       
+       {/* Open Graph Meta Tags */}
+       <meta property="og:url" content="https://boardandgo.com/legal/privacy" />
+       <meta property="og:title" content="Privacy Policy | BoardAndGo" />
+       <meta property="og:description" content="Learn how BoardAndGo protects and handles your data while providing flight tracking and AI assistance services." />
+       <meta property="og:image" content="https://boardandgo.com/og-image-privacy.jpg" />
+       
+       {/* Twitter Meta Tags */}
+       <meta name="twitter:title" content="Privacy Policy | BoardAndGo" />
+       <meta name="twitter:description" content="Learn how BoardAndGo protects and handles your data while providing flight tracking and AI assistance services." />
+       <meta name="twitter:image" content="https://boardandgo.com/og-image-privacy.jpg" />
      </Head>

      <BackgroundElements />
      <PublicNavbar />

      <div className="relative pt-12 sm:pt-16 pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-400 text-lg">How we handle and protect your data</p>
          </div>
          <div className="space-y-12">
            <section>
              <div className="glass-effect rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold mb-6 gradient-text">Data Collection</h2>
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4">Essential Flight Data</h3>
                    <p>We collect:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>Flight itineraries and booking references</li>
                      <li>Airline and flight numbers</li>
                      <li>Departure and arrival information</li>
                      <li>Connection details</li>
                      <li>Travel document information (when provided)</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                    <p>To provide personalized service, we collect:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>Name and contact details</li>
                      <li>Phone number (for AI voice calls)</li>
                      <li>Email address</li>
                      <li>WhatsApp number (if enabled)</li>
                      <li>Travel preferences</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="glass-effect rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold mb-6 gradient-text">Use of Information</h2>
                <p>Your data enables us to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Track and monitor your flights in real-time</li>
                  <li>Provide AI voice call updates about critical changes</li>
                  <li>Calculate optimal connection routes</li>
                  <li>Send multi-channel notifications</li>
                  <li>Suggest alternative arrangements during disruptions</li>
                  <li>Improve our AI assistant's understanding and responses</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="glass-effect rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold mb-6 gradient-text">AI Voice System</h2>
                <p>Our AI voice system "Amy":</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Uses voice recognition to understand responses</li>
                  <li>Records calls for quality improvement</li>
                  <li>Processes conversations using artificial intelligence</li>
                  <li>Learns from interactions to improve service</li>
                </ul>
                <p>
                  Voice recordings are stored securely and automatically deleted after 30 days unless 
                  required for specific service improvements or legal compliance.
                </p>
              </div>
            </section>

            <section>
              <div className="glass-effect rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold mb-6 gradient-text">Data Sharing</h2>
                <p>We share data with:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Airlines (for flight status verification)</li>
                  <li>Airports (for terminal navigation)</li>
                  <li>Weather services (for impact analysis)</li>
                  <li>Service providers (SMS, email, voice calls)</li>
                </ul>
                <p>
                  We never sell your personal data to third parties.
                </p>
              </div>
            </section>

            <section>
              <div className="glass-effect rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold mb-6 gradient-text">Data Security</h2>
                <p>We protect your data through:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>End-to-end encryption for all transmissions</li>
                  <li>Secure cloud storage with regular backups</li>
                  <li>Access controls and authentication</li>
                  <li>Regular security audits</li>
                  <li>Employee training on data protection</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="glass-effect rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold mb-6 gradient-text">User Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Request data deletion</li>
                  <li>Opt out of AI voice calls</li>
                  <li>Export your data</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="glass-effect rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold mb-6 gradient-text">Data Retention</h2>
                <p>We retain data for:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Active accounts: Duration of account activity</li>
                  <li>Flight data: 90 days after completion</li>
                  <li>Voice recordings: 30 days</li>
                  <li>Payment information: As required by law</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="glass-effect rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold mb-6 gradient-text">International Transfers</h2>
                <p>
                  As a global service, we may transfer data across borders. All international transfers 
                  comply with relevant data protection laws and use appropriate safeguards.
                </p>
              </div>
            </section>

            <section>
              <div className="glass-effect rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold mb-6 gradient-text">Children's Privacy</h2>
                <p>
                  BoardAndGo does not knowingly collect data from children under 13. Parents or guardians 
                  should manage flight tracking for young travelers.
                </p>
              </div>
            </section>

            <section>
              <div className="glass-effect rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold mb-6 gradient-text">Contact Information</h2>
                <p>For privacy concerns:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <li className="glass-effect p-4 rounded-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#7C5DFA]/10 flex items-center justify-center text-[#7C5DFA]">
                      <MailIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p>privacy@boardandgo.com</p>
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