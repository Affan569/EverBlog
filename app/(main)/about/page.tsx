import Container from '@/components/layout/Container'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata(
  'About Us - Our Story & Mission',
  'Learn about EverBlog\'s journey, mission to deliver quality content, and the dedicated team behind our platform.',
  '/about'
)

export default function AboutPage() {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Editor-in-Chief',
      image: '/placeholder-avatar.jpg',
      bio: 'With over 15 years in digital publishing, Sarah leads our editorial vision and content strategy.',
    },
    {
      name: 'Michael Chen',
      role: 'Technology Editor',
      image: '/placeholder-avatar.jpg',
      bio: 'Michael brings deep expertise in tech trends and innovation, ensuring our tech content is cutting-edge.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lifestyle & Wellness Editor',
      image: '/placeholder-avatar.jpg',
      bio: 'Emily specializes in wellness, lifestyle, and personal development content with a focus on practical advice.',
    },
    {
      name: 'David Kim',
      role: 'Business & Finance Editor',
      image: '/placeholder-avatar.jpg',
      bio: 'David provides expert analysis on business trends, market insights, and financial literacy.',
    },
  ]

  const values = [
    {
      title: 'Quality First',
      description: 'We prioritize accuracy, depth, and credibility in every piece of content we publish.',
      icon: '✨',
    },
    {
      title: 'Reader Focus',
      description: 'Our content is crafted with our readers\' needs and interests at the center of everything we do.',
      icon: '🎯',
    },
    {
      title: 'Expert Contributors',
      description: 'We work with industry professionals and subject matter experts to deliver authoritative insights.',
      icon: '👥',
    },
    {
      title: 'Continuous Learning',
      description: 'We believe in growth and evolution, constantly improving our content and platform.',
      icon: '📚',
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 py-20 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl md:text-6xl">
              About EverBlog
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Empowering curious minds with reliable, insightful, and actionable content since 2020.
            </p>
          </div>
        </Container>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white dark:bg-zinc-900">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Our Story
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              <p>
                EverBlog was founded with a simple yet powerful vision: to create a digital space where curious minds could find reliable, well-researched, and thoughtfully crafted content. In an era of information overload and clickbait, we recognized the growing need for a platform that prioritized quality over quantity.
              </p>
              <p>
                What started as a small blog focused on technology trends has evolved into a comprehensive platform covering diverse topics including business, lifestyle, health, science, and education. Our journey has been guided by unwavering commitment to editorial integrity and reader satisfaction.
              </p>
              <p>
                Today, EverBlog serves as a trusted resource for thousands of monthly readers who seek not just information, but understanding. We believe that knowledge should be accessible, engaging, and empowering – and that philosophy drives everything we do.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-950">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Our Mission
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              <p>
                At EverBlog, our mission is to democratize access to high-quality information and expert insights. We strive to bridge the gap between complex topics and everyday understanding, making knowledge approachable without sacrificing depth or accuracy.
              </p>
              <p>
                We are committed to fostering a community of lifelong learners who value critical thinking and evidence-based information. Every article we publish undergoes rigorous research and review to ensure our readers receive content they can trust.
              </p>
              <p>
                Looking forward, we aim to expand our reach while maintaining the standards that have earned our readers\' trust. We continue to invest in our team, our processes, and our platform to better serve our growing community.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white dark:bg-zinc-900">
        <Container>
          <div className="mx-auto max-w-2xl lg:mx-0 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-2 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-950">
        <Container>
          <div className="mx-auto max-w-2xl lg:mx-0 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-2 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              The passionate people behind EverBlog.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
            {team.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="h-32 w-32 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
                  <div className="flex h-full w-full items-center justify-center text-4xl text-zinc-400 dark:text-zinc-600">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  {member.role}
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-zinc-900">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Join Our Community
            </h2>
            <p className="mt-2 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Be part of our growing community of curious minds.
            </p>
            <div className="mt-10">
              <a
                href="/blog"
                className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
              >
                Start Reading
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}