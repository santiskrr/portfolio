'use client'

import Link from 'next/link'
import TextType from './components/TextType'
import DecryptedText from './components/DecryptedText'
import { ReactNode, ElementType, ComponentPropsWithoutRef } from 'react'

const COLORS = {
  neonViolet: '#8800ff',
  neonPink: '#ff00d4',
  neonCyan: '#00f9ff',
  neonLime: '#b6ff00',
} as const

function glowText(base: string = ''): string {
  return `drop-shadow-[0_0_6px_rgba(255,255,255,.6)] ${base}`
}

interface NeonBoxProps<T extends ElementType = 'div'> {
  as?: T
  children: ReactNode
  className?: string
  color?: (typeof COLORS)[keyof typeof COLORS]
}

function NeonBox<T extends ElementType = 'div'>({
  as,
  children,
  className = '',
  color = COLORS.neonCyan,
  ...rest
}: NeonBoxProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof NeonBoxProps>) {
  const Tag = as || 'div'
  return (
    <Tag
      className={`relative rounded-xl p-[1px] ${className}`}
      style={{
        background: `linear-gradient(135deg, ${color} 0%, ${COLORS.neonPink} 100%)`,
        boxShadow: `0 0 12px ${color}AA, 0 0 32px ${color}55`,
      }}
      {...rest}
    >
      <div className="rounded-xl bg-black/60 backdrop-blur-sm p-4">
        {children}
      </div>
    </Tag>
  )
}

interface NeonButtonProps {
  href: string
  children: ReactNode
  color?: (typeof COLORS)[keyof typeof COLORS]
  className?: string
}

function NeonButton({ href, children, color = COLORS.neonViolet, className = '' }: NeonButtonProps) {
  return (
    <Link
      href={href}
      className={`relative inline-flex items-center justify-center rounded-md px-5 py-2 text-sm font-semibold uppercase tracking-wider transition-transform duration-150 hover:scale-105 active:scale-95 focus:outline-none ${className}`}
      style={{
        color: '#fff',
        textShadow: `0 0 6px ${color}, 0 0 12px ${color}`,
        boxShadow: `0 0 8px ${color}AA, inset 0 0 8px ${color}AA`,
        border: `1px solid ${color}`,
        background: 'rgba(0,0,0,0.4)',
      }}
    >
      {children}
    </Link>
  )
}

interface ProjectCardProps {
  title: string
  description: string
  href: string
  tags?: string[]
  color?: (typeof COLORS)[keyof typeof COLORS]
}

function ProjectCard({ title, description, href, tags = [], color = COLORS.neonPink }: ProjectCardProps) {
  return (
    <NeonBox color={color} className="h-full w-full">
      <h3 className={glowText('mb-2 text-lg font-bold text-white')}>{title}</h3>
      <p className="mb-4 text-sm text-neutral-300">{description}</p>
      {tags.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2 text-xs">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded bg-white/10 px-2 py-1 text-neutral-200 backdrop-blur-sm"
            >
              {t}
            </span>
          ))}
        </div>
      )}
      <NeonButton href={href} color={color} className="mt-auto text-xs">
        Ver proyecto
      </NeonButton>
    </NeonBox>
  )
}

interface SectionHeadingProps {
  text: string
  colorClass?: string
}
function SectionHeading({ text, colorClass = 'text-white' }: SectionHeadingProps) {
  return (
    <h2 className={`mb-6 text-center text-2xl font-bold ${colorClass} ${glowText()}`}>
      <DecryptedText
        text={text}
        animateOn="view"
        sequential
        revealDirection="center"
        speed={40}
        className="text-inherit"
        encryptedClassName="opacity-40"
      />
    </h2>
  )
}

export default function Page() {
  const heroLines = ['Mi PortFolio', 'Santiago Caripan', 'Front‑End / HotFix / Cyber UX']

  const projectsDemo: ProjectCardProps[] = [
    {
      title: 'Manejo Avanzado de IA',
      description: 'Soluciones inteligentes aplicadas al desarrollo de experiencias digitales.',
      href: '/projects/ia-advanced',
      tags: ['React', 'Next.js', 'Tailwind'],
      color: COLORS.neonCyan,
    },
    {
      title: 'Bases de Datos Modernas',
      description: 'Gestión eficiente y escalable utilizando tecnologías en la nube.',
      href: '/projects/databases',
      tags: ['Supabase', 'React', 'Next.js'],
      color: COLORS.neonPink,
    },
    {
      title: 'Proyectos Web para Tiendas',
      description: 'Desarrollo de plataformas rápidas y optimizadas para e-commerce.',
      href: '/projects/web-shops',
      tags: ['React Bits', 'Tailwind', 'Next.js'],
      color: COLORS.neonViolet,
    },
  ]

  const blogDemo = [
    { title: 'Cómo crear efectos neon con Tailwind + CSS', href: '/blog/neon-tailwind' },
    { title: 'Integrando shaders en Next.js con R3F', href: '/blog/shaders-nextjs' },
    { title: 'Animaciones de texto futuristas con Framer', href: '/blog/framer-text' },
  ]

  return (
    <>
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center gap-6 text-center">
        <div className="text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
          <TextType
            text={heroLines}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="|"
          />
        </div>
        <div className="text-lg sm:text-xl text-neutral-200 max-w-[32ch]">
          <DecryptedText
            text="Construyendo experiencias digitales con vibra cyberpunk"
            animateOn="view"
            maxIterations={15}
            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/*-+"
            className="text-neutral-200"
            encryptedClassName="opacity-40"
          />
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <NeonButton href="/projects" color={COLORS.neonCyan}>
            Ver Proyectos
          </NeonButton>
          <NeonButton href="/contact" color={COLORS.neonPink}>
            Contacto
          </NeonButton>
        </div>
      </section>
      <section className="mx-auto mt-32 max-w-2xl px-4 text-center">
        <SectionHeading text="Sobre mí" />
        <p className="mx-auto max-w-prose text-neutral-300 leading-relaxed">
          Soy un desarrollador enfocado en interfaces experimentales, visualizaciones 3D y estética futurista. Me gusta mezclar tecnología web moderna (Next.js, React Three Fiber, WebGL) con diseño inspirado en videojuegos y sci‑fi.
        </p>
      </section>
      <section className="mx-auto mt-32 max-w-5xl px-4">
        <SectionHeading text="Proyectos Destacados" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectsDemo.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <NeonButton href="/projects" color={COLORS.neonLime}>
            Ver todos los proyectos
          </NeonButton>
        </div>
      </section>
      <section className="mx-auto mt-32 max-w-3xl px-4">
        <SectionHeading text="Últimos Posts" />
        <ul className="space-y-4">
          {blogDemo.map((post) => (
            <li key={post.href}>
              <Link
                href={post.href}
                className="group inline-block w-full rounded-md border border-transparent px-4 py-3 text-left transition hover:border-neutral-700 hover:bg-white/5"
              >
                <DecryptedText
                  text={post.title}
                  animateOn="view"
                  maxIterations={8}
                  speed={30}
                  characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
                  className="text-neutral-100 group-hover:text-white"
                  encryptedClassName="opacity-40"
                />
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <NeonButton href="/blog" color={COLORS.neonViolet}>
            Ir al Blog
          </NeonButton>
        </div>
      </section>
      <section className="mx-auto mt-40 mb-32 max-w-xl px-4 text-center">
        <SectionHeading text="Trabajemos juntos" />
        <p className="mb-6 text-neutral-300">¿Tenés una idea? Hablemos.</p>
        <NeonButton href="/contact" color={COLORS.neonPink}>
          Enviar mensaje
        </NeonButton>
      </section>
      <style jsx global>{`
        .text-neon-violet { color: ${COLORS.neonViolet}; text-shadow: 0 0 8px ${COLORS.neonViolet}, 0 0 16px ${COLORS.neonViolet}; }
        .text-neon-pink   { color: ${COLORS.neonPink};   text-shadow: 0 0 8px ${COLORS.neonPink},   0 0 16px ${COLORS.neonPink}; }
        .text-neon-cyan   { color: ${COLORS.neonCyan};   text-shadow: 0 0 8px ${COLORS.neonCyan},   0 0 16px ${COLORS.neonCyan}; }
        .text-neon-lime   { color: ${COLORS.neonLime};   text-shadow: 0 0 8px ${COLORS.neonLime},   0 0 16px ${COLORS.neonLime}; }
        @keyframes neon-flicker {
          0%, 18%, 22%, 25%, 53%, 57%, 100% { opacity: 1; }
          20%, 24%, 55% { opacity: 0.4; }
          23% { opacity: 0.1; }
        }
        .neon-flicker { animation: neon-flicker 3s infinite linear; }
      `}</style>
    </>
  )
}
