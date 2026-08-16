import Link from 'next/link'
import Container from './Container'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { name: 'Blog', href: '/blog' },
      { name: 'Categories', href: '/blog/categories' },
      { name: 'Newsletter', href: '/#newsletter' },
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Careers', href: '/careers' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms & Conditions', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Disclaimer', href: '/disclaimer' },
    ],
  }

  const socialLinks = [
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ]

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-2 lg:col-span-2">
              <Link href="/" className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900">
                  <span className="text-xl font-bold">E</span>
                </div>
                <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  EverBlog
                </span>
              </Link>
              <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                A professional blogging platform for sharing high-quality content and expert insights.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Product</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Company</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Legal</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Connect</h3>
              <div className="mt-4 flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 transition-colors hover:text-zinc-600 dark:hover:text-zinc-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between border-t border-zinc-200 pt-8 md:flex-row dark:border-zinc-800">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              &copy; {currentYear} EverBlog. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}