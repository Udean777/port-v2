'use client'
import Navbar from './components/Navbar'
import Hero from './Hero'
import './globals.css'
import Head from 'next/head'

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-200 dark:bg-zinc-800">
      <Head>
        <meta property='og:image' content='/hero1.png'/>
      </Head>
      <Navbar/>

      <Hero/>

    </main>
  )
}
