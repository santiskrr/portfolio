import './global.css'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import Footer from './components/footer'
import Silk from './components/Silk'

const cx = (...classes: string[]) => classes.filter(Boolean).join(' ')

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cx(GeistSans.variable, GeistMono.variable)}>
      <body className="antialiased relative max-w-xl mx-4 mt-8 lg:mx-auto">
        <div className="fixed inset-0 -z-10">
          <Silk
            speed={5}
            scale={1}
            color="#8800ff"
            noiseIntensity={1.5}
            rotation={0}
          />
        </div>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
