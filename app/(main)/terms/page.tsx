import Container from '@/components/layout/Container'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata(
  'Terms and Conditions',
  'Read EverBlog\'s terms and conditions. By using our website, you agree to these terms.',
  '/terms'
)

export default function TermsPage() {
  const lastUpdated = 'January 1, 2024'

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 py-20 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
              Terms and Conditions
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
              Welcome to EverBlog. These Terms and Conditions govern your use of our website everblog.com and the services we provide. By accessing or using our website, you agree to be bound by these terms. Please read them carefully.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              By accessing and using EverBlog, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use our website or services.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              2. Changes to Terms
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              We reserve the right to modify these terms at any time. All changes are effective immediately when we post them. Your continued use of the website following the posting of revised terms means that you accept and agree to the changes.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              3. Use License
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Permission is granted to temporarily download one copy of the materials on EverBlog for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-400 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              4. User Accounts
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              If you create an account on EverBlog, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your account. You agree to accept responsibility for all activities that occur under your account or password. We reserve the right to terminate accounts that violate these terms.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              5. User Conduct
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              You agree not to use the website for any unlawful purpose or in any way that could damage the website or impair its availability or accessibility. You must not use the website in a manner that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              6. Content and Intellectual Property
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              All content on EverBlog, including text, graphics, logos, images, and software, is the property of EverBlog or its content suppliers and is protected by international copyright laws. You may not use, reproduce, or distribute any content without our prior written consent.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              7. User-Generated Content
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              If you submit comments, articles, or other content to EverBlog, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, display, reproduce, and distribute such content. You represent and warrant that you own or have the necessary rights to submit such content and that it does not violate any third-party rights.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              8. Privacy Policy
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Your use of EverBlog is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the website and informs users of our data collection practices.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              9. Disclaimer
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              The materials on EverBlog are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              10. Limitation of Liability
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              In no event shall EverBlog or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on EverBlog, even if EverBlog or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              11. Indemnification
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              You agree to indemnify, defend, and hold harmless EverBlog and its affiliates, officers, directors, employees, agents, licensors, and suppliers from and against all losses, expenses, damages, and costs, including reasonable attorneys' fees, arising out of or related to your use of the website or violation of these terms.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              12. Third-Party Links
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              EverBlog may contain links to third-party websites or services that are not owned or controlled by EverBlog. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. We strongly advise you to read the terms and conditions and privacy policies of any third-party websites that you visit.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              13. Termination
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              We may terminate or suspend your account and access to the website immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the website will immediately cease.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              14. Governing Law
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which EverBlog is based, without regard to its conflict of law provisions. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of that jurisdiction.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              15. Severability
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              If any provision of these terms is found to be unlawful, void, or unenforceable, such provision shall be deemed severable from these terms and shall not affect the validity and enforceability of any remaining provisions.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              16. Entire Agreement
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              These terms constitute the entire agreement between you and EverBlog regarding your use of the website and supersede all prior or contemporaneous communications, proposals, and agreements, whether oral or written.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              17. Contact Information
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-400 space-y-2">
              <li>By email: legal@everblog.com</li>
              <li>By visiting this page on our website: everblog.com/contact</li>
            </ul>
          </div>
        </Container>
      </section>
    </div>
  )
}