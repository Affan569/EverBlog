import Container from '@/components/layout/Container'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata(
  'Disclaimer',
  'Important disclaimer about the content and information provided on EverBlog. Read before using our website.',
  '/disclaimer'
)

export default function DisclaimerPage() {
  const lastUpdated = 'January 1, 2024'

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 py-20 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
              Disclaimer
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
              The information provided by EverBlog on this website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              1. General Information Disclaimer
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              The content on EverBlog is intended for informational and educational purposes only. It should not be construed as professional advice. The information is provided "as is" and without warranties of any kind, either expressed or implied.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              2. Professional Advice Disclaimer
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site. Your use of the site and your reliance on any information on the site is solely at your own risk. For professional advice, please consult with qualified experts in the relevant field.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              3. Health and Medical Disclaimer
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              The health-related content on EverBlog is for informational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              4. Financial and Legal Disclaimer
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Any financial or legal information provided on EverBlog is for general informational purposes only and should not be considered as professional financial or legal advice. You should consult with a qualified professional advisor before making any financial or legal decisions based on the information provided on this website.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              5. Technology and Product Reviews
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Product and technology reviews and recommendations on EverBlog are based on our research and opinions at the time of publication. Products and technologies change rapidly, and information may become outdated. We do not guarantee the performance, quality, or suitability of any products or services mentioned on our website.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              6. External Links Disclaimer
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Through this website, you may be able to link to other websites that are not under the control of EverBlog. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              7. Accuracy of Information
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              While we strive to keep the information on this website up-to-date and accurate, we make no representations about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              8. Availability and Errors
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              EverBlog is not responsible for any technical failures, interruptions, or delays in the operation of the website. We are not liable for any loss or damage that may result from the use of this website, including but not limited to direct, indirect, incidental, punitive, and consequential damages.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              9. User-Generated Content
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              User-generated content, including comments and forum posts, represents the opinions of the individual authors and does not necessarily reflect the views of EverBlog. We do not endorse or guarantee the accuracy of user-generated content and are not responsible for any losses or damages resulting from reliance on such content.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              10. Copyright and Intellectual Property
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              All content on EverBlog, including text, graphics, logos, and images, is protected by copyright and other intellectual property laws. Unauthorized use of any content may violate copyright laws, trademark laws, or other applicable laws.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              11. Limitation of Liability
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              In no event shall EverBlog, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the website.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              12. Indemnification
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              You agree to indemnify, defend, and hold harmless EverBlog and its affiliates, officers, directors, employees, agents, licensors, and suppliers from and against all claims, losses, expenses, damages, and costs, including reasonable attorneys' fees, arising out of or related to your use of the website or violation of this disclaimer.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              13. Changes to This Disclaimer
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              We reserve the right to modify this disclaimer at any time. Any changes will be posted on this page with an updated revision date. Your continued use of the website after any changes constitutes acceptance of the new disclaimer.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              14. Governing Law
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              This disclaimer shall be governed by and construed in accordance with the laws of the jurisdiction in which EverBlog is based, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">
              15. Contact Information
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              If you have any questions about this disclaimer, please contact us:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-400 space-y-2">
              <li>By email: legal@everblog.com</li>
              <li>By visiting this page on our website: everblog.com/contact</li>
            </ul>

            <div className="mt-12 p-6 bg-zinc-50 dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700">
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                By using EverBlog, you acknowledge that you have read, understood, and agree to this disclaimer.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}