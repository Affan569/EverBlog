import Container from '@/components/layout/Container'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata(
  'Cookie Policy',
  'Learn about how EverBlog uses cookies and similar technologies to enhance your browsing experience.',
  '/cookies'
)

export default function CookiePolicyPage() {
  const lastUpdated = 'January 1, 2024'

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 py-20 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
              Cookie Policy
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
              This Cookie Policy explains how EverBlog uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              1. What Are Cookies?
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide a better browsing experience. Cookies allow a website to recognize your device and remember information about your preferences and previous visits.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              2. Types of Cookies We Use
            </h2>

            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-6 mb-3">
              2.1 Essential Cookies
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. Without these cookies, the website may not function correctly.
            </p>

            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-6 mb-3">
              2.2 Performance Cookies
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              These cookies collect information about how visitors use our website, such as which pages they visit most often and whether they receive error messages. This helps us improve the performance of our website and understand user preferences.
            </p>

            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-6 mb-3">
              2.3 Functionality Cookies
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              These cookies allow our website to remember choices you make and provide enhanced features. For example, they may remember your language preferences, region, or login information to provide a more personalized experience.
            </p>

            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-6 mb-3">
              2.4 Targeting/Advertising Cookies
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              These cookies are used to deliver advertisements that are more relevant to you and your interests. They may also be used to limit the number of times you see an advertisement and measure the effectiveness of advertising campaigns.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              3. How We Use Cookies
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-400 space-y-2">
              <li>To authenticate users and prevent fraudulent use of accounts</li>
              <li>To remember your preferences and settings</li>
              <li>To analyze website traffic and user behavior</li>
              <li>To provide personalized content and recommendations</li>
              <li>To serve relevant advertisements</li>
              <li>To improve website performance and user experience</li>
            </ul>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              4. Third-Party Cookies
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              We may allow third-party service providers to place cookies on your device for the purposes described in this policy. These third parties include:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-400 space-y-2">
              <li><strong>Analytics Services:</strong> Google Analytics and similar tools to analyze website traffic</li>
              <li><strong>Advertising Networks:</strong> To deliver personalized advertisements</li>
              <li><strong>Social Media Platforms:</strong> To enable social sharing and engagement</li>
              <li><strong>Content Delivery Networks:</strong> To improve website performance</li>
            </ul>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              5. Managing Cookies
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though your access to some functionality and areas may be restricted.
            </p>

            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-6 mb-3">
              How to Control Cookies
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Most web browsers allow you to control cookies through their settings. The methods for doing so vary from browser to browser. You can typically find these settings in the "Options," "Settings," or "Preferences" menu of your browser.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              6. Cookie Consent
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              When you first visit our website, we may display a cookie consent banner that allows you to accept or reject non-essential cookies. Your preferences will be saved and respected during future visits. You can change your cookie preferences at any time by accessing your browser settings or using the cookie management tools on our website.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              7. Updates to This Cookie Policy
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              We may update this Cookie Policy from time to time to reflect changes in our use of cookies or applicable laws. We will notify you of any material changes by posting the updated policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              8. Contact Us
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              If you have any questions about this Cookie Policy or our use of cookies, please contact us:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-400 space-y-2">
              <li>By email: privacy@everblog.com</li>
              <li>By visiting this page on our website: everblog.com/contact</li>
            </ul>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              9. Additional Resources
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              For more information about cookies and how to manage them, you may visit the following resources:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-400 space-y-2">
              <li><a href="https://www.allaboutcookies.org" className="text-zinc-900 dark:text-zinc-50 hover:underline" target="_blank" rel="noopener noreferrer">AllAboutCookies.org</a></li>
              <li><a href="https://www.youronlinechoices.com" className="text-zinc-900 dark:text-zinc-50 hover:underline" target="_blank" rel="noopener noreferrer">YourOnlineChoices.com</a></li>
              <li><a href="https://www.networkadvertising.org" className="text-zinc-900 dark:text-zinc-50 hover:underline" target="_blank" rel="noopener noreferrer">Network Advertising Initiative</a></li>
            </ul>
          </div>
        </Container>
      </section>
    </div>
  )
}