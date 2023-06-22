'use client'
import Navbar from './components/Navbar'
import Hero from './Hero'
import './globals.css'
import About from './about/page'
import Skills from './skills/page'

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-200 dark:bg-zinc-800">
      <Navbar/>

      <Hero/>

      <About/>

      <Skills/>


    </main>
  )
}
