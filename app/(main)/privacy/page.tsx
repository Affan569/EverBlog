import Container from '@/components/layout/Container'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata(
  'Privacy Policy',
  'Learn how EverBlog collects, uses, and protects your personal information. Your privacy is important to us.',
  '/privacy'
)

export default function PrivacyPolicyPage() {
  const lastUpdated = 'January 1, 2024'

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 py-20 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              Last updated: {lastUpdated}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white dark:bg-zinc-900">
        <Container>
          <div className="mx-auto max-w-3xl prose prose-zinc dark:prose-invert">
            <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              At EverBlog, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website everblog.com. Please read this policy carefully.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              1. Information We Collect
            </h2>

            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-6 mb-3">
              1.1 Personal Information
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              We may collect personal identification information (Name, email address, postal address, telephone number) that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-400 space-y-2">
              <li>Subscribe to our newsletter</li>
              <li>Fill out a contact form</li>
              <li>Create an account on our platform</li>
              <li>Participate in surveys or promotions</li>
            </ul>

            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-6 mb-3">
              1.2 Automatically Collected Information
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              When you visit our website, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you navigate the site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the site, and information about how you interact with the site.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              We use the information we collect in various ways, including to:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-400 space-y-2">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you, either directly or through one of our partners</li>
              <li>Send you emails and newsletters</li>
              <li>Provide technical support and respond to your inquiries</li>
            </ul>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              3. Information Sharing
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              We may share information we collect with third parties in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-400 space-y-2">
              <li><strong>With Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf (e.g., analytics, email delivery, hosting).</li>
              <li><strong>For Business Transfers:</strong> We may share or transfer your information in connection with a merger, sale of company assets, financing, or acquisition of all or a portion of our business.</li>
              <li><strong>With Affiliates:</strong> We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy.</li>
              <li><strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with your consent.</li>
            </ul>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              4. Third-Party Services
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Our website may include links to third-party websites, plugins, and applications. Clicking on those links may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy policy of every website you visit.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              5. Cookies and Tracking Technologies
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              We use cookies and similar tracking technologies to track the activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              6. Data Security
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              7. Data Retention
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              We retain your personal information for as long as necessary to provide the services requested by you and for other essential purposes such as maintaining security, preventing fraud, and complying with our legal obligations. We may retain your information for a longer period if required by law or as needed for legitimate business purposes.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              8. Your Privacy Rights
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-400 space-y-2">
              <li>The right to access, correct, or delete your personal information</li>
              <li>The right to object to processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
              <li>The right to lodge a complaint with a supervisory authority</li>
            </ul>
            <p className="text-zinc-600 dark:text-zinc-400">
              To exercise these rights, please contact us using the information provided below.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              9. Children's Privacy
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will delete such information.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              10. Changes to This Privacy Policy
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              11. Contact Us
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-400 space-y-2">
              <li>By email: privacy@everblog.com</li>
              <li>By visiting this page on our website: everblog.com/contact</li>
            </ul>
          </div>
        </Container>
      </section>
    </div>
  )
}