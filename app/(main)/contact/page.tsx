import Container from '@/components/layout/Container'
import ContactForm from '@/components/ui/ContactForm'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata(
  'Contact Us - Get in Touch',
  'Have questions or feedback? Reach out to the EverBlog team. We\'re here to help and value your input.',
  '/contact'
)

export default function ContactPage() {
  const contactInfo = [
    {
      title: 'Email',
      value: 'contact@everblog.com',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
    {
      title: 'Phone',
      value: '+1 (555) 123-4567',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
    },
    {
      title: 'Location',
      value: 'San Francisco, CA',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
    },
    {
      title: 'Hours',
      value: 'Mon-Fri, 9am-5pm PST',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 py-20 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl md:text-6xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Have questions, feedback, or just want to say hello? We'd love to hear from you. Our team is here to help.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white dark:bg-zinc-900">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
                Send us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                        {info.title}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                  Our Location
                </h3>
                <div className="h-64 w-full rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="mx-auto h-12 w-12 text-zinc-400 dark:text-zinc-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                      Interactive map coming soon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-950">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl text-center">
              Frequently Asked Questions
            </h2>
            <div className="mt-12 space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  How quickly do you respond to inquiries?
                </h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  We typically respond to all inquiries within 24-48 hours during business days. For urgent matters, please indicate the urgency in your message subject line.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  Can I submit a guest post or article idea?
                </h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  Yes! We welcome contributions from expert writers. Please use the contact form to share your article idea, and our editorial team will review it. We prioritize well-researched, original content that provides value to our readers.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  Do you offer advertising opportunities?
                </h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  We offer limited advertising opportunities for brands that align with our values and audience interests. Please contact us with details about your brand and advertising goals for more information.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}