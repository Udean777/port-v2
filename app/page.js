'use client'
import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './Hero'
import './globals.css'
import About from './about/page'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-100 dark:bg-zinc-800">
      <Navbar/>

      <Hero/>

    </main>
  )
}
