'use client'
import Navbar from './components/Navbar'
import Hero from './Hero'
import './globals.css'
import Head from 'next/head';

export default function Home() {
  return (
    <>
    <Head>
        <meta property="og:image" content={process.env.OG_IMAGE} />
        {/* Tambahkan meta tag lainnya jika diperlukan */}
      </Head>
    <main className="min-h-screen bg-zinc-200 dark:bg-zinc-800">
      <Navbar/>

      <Hero/>

    </main>
    </>
  )
}
