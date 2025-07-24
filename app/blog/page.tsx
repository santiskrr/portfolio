import Link from 'next/link'
import DecryptedText from '../components/DecryptedText'
import BlurText from '../components/BlurText'

export const metadata = {
  title: 'Blog',
  description: 'Reflexiones, experiencias y aprendizajes de mi viaje como desarrollador.',
}

const blogPosts = [
  {
    title: 'De HTML y CSS a Next.js: mi evolución en el desarrollo web',
    excerpt: 'Una mirada a mi recorrido aprendiendo las bases del frontend, desde las primeras líneas de HTML hasta crear proyectos con Next.js.',
    href: '/blog/html-a-nextjs',
    date: '2024-05-10',
    tags: ['HTML', 'CSS', 'Next.js'],
  },
  {
    title: 'React, Vite y Tailwind: el combo que me cambió la forma de trabajar',
    excerpt: 'Exploro por qué estas tecnologías se convirtieron en mi stack favorito y cómo me ayudan a crear interfaces más rápidas y atractivas.',
    href: '/blog/react-vite-tailwind',
    date: '2024-06-22',
    tags: ['React', 'Vite', 'Tailwind'],
  },
  {
    title: 'Experiencia colaborando en un proyecto real con otra persona',
    excerpt: 'Reflexiones sobre comunicación, división de tareas y aprendizajes tras desarrollar un único proyecto en equipo.',
    href: '/blog/proyecto-colaborativo',
    date: '2024-08-15',
    tags: ['Teamwork', 'Proyecto', 'Supabase'],
  },
]

export default function Page() {
  return (
    <section className="mx-auto max-w-3xl px-4">
      <h1 className="mb-8 text-4xl font-extrabold text-white drop-shadow-[0_0_6px_rgba(255,255,255,.6)]">
        <DecryptedText
          text="Blog / Experiencias"
          animateOn="view"
          revealDirection="center"
          speed={40}
          className="text-inherit"
          encryptedClassName="opacity-40"
        />
      </h1>
      <BlurText
        text="Bienvenido a mi espacio personal donde comparto experiencias, aprendizajes y un poco de todo."
        delay={150}
        animateBy="words"
        direction="top"
        className="text-neutral-300 leading-relaxed mb-12"
      />
      <div className="space-y-10">
        {blogPosts.map((post) => (
          <article
            key={post.href}
            className="rounded-xl border border-white/10 bg-black/40 p-6 backdrop-blur-sm transition hover:border-cyan-400/50 hover:shadow-[0_0_12px_#00f9ff77]"
          >
            <h2 className="mb-2 text-2xl font-bold text-white">
              <Link href={post.href} className="hover:text-cyan-400">
                <DecryptedText
                  text={post.title}
                  animateOn="view"
                  maxIterations={8}
                  speed={30}
                  characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
                  className="text-inherit"
                  encryptedClassName="opacity-40"
                />
              </Link>
            </h2>
            <p className="text-sm text-neutral-300 mb-4">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2 text-xs mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-white/10 px-2 py-1 text-neutral-200 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
