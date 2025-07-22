import Link from 'next/link'
import DecryptedText from './DecryptedText'

const navItems = {
  '/': { name: 'home' },
  '/blog': { name: 'blog' },
  '/contact': { name: 'contact' },
  '/projects': { name: 'projects' },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] text-xl mb-16">
      <div className="lg:sticky lg:top-20">
        <nav className="megrim-regular" id="nav">
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="transition-all flex align-middle relative py-1 px-2 m-1"
              >
                <DecryptedText
                  text={name}
                  speed={50}                 // Velocidad de scrambling
                  maxIterations={10}         // Iteraciones antes de revelar
                  characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*"
                  className="text-neutral-900 dark:text-neutral-100"
                  encryptedClassName="opacity-50"
                  animateOn="view"          
                />
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  )
}
