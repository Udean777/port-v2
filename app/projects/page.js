import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import 'animate.css'

export default function Projects() {
  return (
    <div className='min-h-screen bg-gradient-to-r from-zinc-200 to-purple-200 dark:bg-gradient-to-r dark:from-zinc-950 dark:to-purple-950'>
      <Navbar />
      <div className='m-auto py-10 sm:py-20 md:py-28 max-w-6xl px-4 sm:px-6 md:px-8 animate__animated animate__fadeInDown dark:text-white'>
        <h1 className='font-bold border-l-4 border-blue-500 text-3xl sm:text-4xl md:text-3xl mb-6 sm:mb-8'>PROJECTS</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8'>
          
          <Link href='https://sajudin.vercel.app/'>
            <div className="block w-full group hover:scale-105 transition ease-in rounded-xl overflow-hidden shadow-lg backdrop-blur-sm bg-zinc-200/30">
              <img loading='lazy' className="w-full rounded-sm" src="/project.jpeg" alt="Card Image" />
              <div className="px-6 py-4">
                <div className="font-bold text-md mb-2">My First Portfolio</div>
                <p className="text-gray-700 dark:text-gray-100 text-sm">I made my first ever portfolio website, using only bootstrap + vanilla css.</p>
              </div>
            </div>
          </Link>

          <Link href='https://sajudin.vercel.app/'>
            <div className="block w-full group hover:scale-105 transition ease-in rounded-xl overflow-hidden shadow-lg backdrop-blur-sm bg-zinc-200/30">
              <img loading='lazy' className="w-full rounded-sm" src="/projects2.png" alt="Card Image" />
              <div className="px-6 py-4">
                <div className="font-bold text-md mb-2">Clone Landing Page</div>
                <p className="text-gray-700 dark:text-gray-100 text-sm">I'm cloning JKT48 Official website Landing Page (Not responsive yet).</p>
              </div>
            </div>
          </Link>

          <Link href='https://sajudin.vercel.app/'>
            <div className="block w-full group hover:scale-105 transition ease-in rounded-xl overflow-hidden shadow-lg backdrop-blur-sm bg-zinc-200/30">
              <img loading='lazy' className="w-full rounded-sm" src="/project3.png" alt="Card Image" />
              <div className="px-6 py-4">
                <div className="font-bold text-md mb-2">My Second Portfolio</div>
                <p className="text-gray-700 dark:text-gray-100 text-sm">I made my second portfolio, using React + Next JS + Tailwind CSS.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}