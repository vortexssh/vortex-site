import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Hero } from '@/sections/Hero'
import { Problem, Architecture } from '@/sections/Product'
import { Features } from '@/sections/Features'
import { Security, Start, CtaBand } from '@/sections/Trust'

export default function App() {
  return (
    <div className="min-h-screen bg-void text-fg">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Architecture />
        <Features />
        <Security />
        <Start />
        <CtaBand />
      </main>
      <Footer />
    </div>
  )
}
