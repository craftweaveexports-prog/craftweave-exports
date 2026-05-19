import { motion } from 'framer-motion';

export default function TermsConditions() {
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
              Terms & Conditions
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#FFFEF9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                title: '1. Acceptance of Terms',
                content:
                  'By using the CraftWeave Exports website, you agree to these Terms & Conditions and our business policies.',
              },

              {
                title: '2. Business Nature',
                content:
                  'CraftWeave Exports focuses on textile sourcing, bulk manufacturing support, and export-related inquiries for business customers.',
              },

              {
                title: '3. Product Information',
                content:
                  'Product images, descriptions, colors, and designs shown on the website are for reference purposes and may vary slightly depending on customization and production requirements.',
              },

              {
                title: '4. Pricing & Quotations',
                content:
                  'Pricing for products may vary depending on quantity, customization, materials, and shipping requirements. Final quotations are shared during inquiry discussions.',
              },

              {
                title: '5. Orders & Production',
                content:
                  'Production timelines and order processing may vary depending on product type, customization, and order volume.',
              },

              {
                title: '6. Shipping Support',
                content:
                  'We may assist buyers with export coordination and shipping-related communication for international orders.',
              },

              {
                title: '7. Communication',
                content:
                  'By submitting inquiries through our website, you agree that we may contact you regarding your inquiry or business discussion.',
              },

              {
                title: '8. Intellectual Property',
                content:
                  'Website content, product images, branding, and designs displayed on this website should not be copied or reused without permission.',
              },

              {
                title: '9. Limitation of Liability',
                content:
                  'CraftWeave Exports is not responsible for indirect losses, delays caused by shipping partners, or issues beyond reasonable operational control.',
              },

              {
                title: '10. Website Usage',
                content:
                  'Users agree not to misuse the website, submit false inquiries, or attempt unauthorized access to website systems.',
              },

              {
                title: '11. Changes to Terms',
                content:
                  'We may update these Terms & Conditions from time to time without prior notice.',
              },

              {
                title: '12. Contact',
                content:
                  'For business inquiries or questions regarding these terms, please contact us through our official website contact form or business email.',
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