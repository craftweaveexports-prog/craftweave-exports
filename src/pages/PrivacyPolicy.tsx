import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <main>
      <section className="pt-32 pb-16 bg-[#1C1917]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#D4A853] font-medium tracking-widest uppercase text-sm mb-4">
              Legal
            </p>

            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">
              Privacy Policy
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#FFFEF9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-sm border border-[#D4A853]/10 p-8 md:p-12"
          >
            <p className="text-sm text-[#78716C] mb-8">
              Last updated: January 2026
            </p>

            {[
              {
                title: '1. Introduction',
                content:
                  'CraftWeave Exports values your privacy and is committed to protecting the information you share with us through our website and inquiry forms.',
              },

              {
                title: '2. Information We Collect',
                content:
                  'We may collect information such as your name, email address, phone number, company name, country, and inquiry details when you contact us or submit forms on our website.',
              },

              {
                title: '3. How We Use Your Information',
                content:
                  'Your information is used to respond to inquiries, discuss product requirements, provide quotations, improve communication, and support export-related business discussions.',
              },

              {
                title: '4. Data Protection',
                content:
                  'We take reasonable measures to help protect your information from unauthorized access, misuse, or disclosure.',
              },

              {
                title: '5. Information Sharing',
                content:
                  'We do not sell or trade your personal information. Information may only be shared when required for communication, shipping coordination, or legal compliance.',
              },

              {
                title: '6. Cookies',
                content:
                  'Our website may use basic cookies or analytics tools to improve website functionality and user experience.',
              },

              {
                title: '7. Third-Party Services',
                content:
                  'Some services on our website may use trusted third-party tools for communication or inquiry handling.',
              },

              {
                title: '8. Your Rights',
                content:
                  'You may contact us anytime to request updates or removal of your personal information from our records.',
              },

              {
                title: '9. Contact Us',
                content:
                  'For privacy-related inquiries, please contact us through our official email or inquiry form available on the website.',
              },
            ].map((section) => (
              <div key={section.title} className="mb-8 last:mb-0">
                <h2 className="font-heading text-xl font-semibold text-[#1C1917] mb-3">
                  {section.title}
                </h2>

                <p className="text-[#78716C] leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}