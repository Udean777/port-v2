'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import 'animate.css';

export default function About() {
  return (
    <main className='min-h-screen bg-zinc-100 dark:bg-zinc-800 animate__animated animate__fadeIn'>
<Navbar/>
    <div className='py-28 dark:text-white font-sans' id='about'>
      <div>
        <h1 className='border-b-2 border-blue-500 text-3xl font-sans font-bold flex justify-center w-40 m-auto'>About me</h1>
      </div>
      <div className='text-center m-auto py-5 w-96 md:w-98 lg:w-100'>
        <p>Im a Junior<span className='text-blue-500 font-bold'> FrontEnd Developer</span>, i love designing a website and makes it responsive, so the users can use my application in mobile & desktop.
          I just graduated from Vocational High School <strong>SMKN 1 Binjai</strong>, my vocational program is <strong>RPL</strong>. So... programming is like my 
          love at the first sight, i suddenly enjoy it, i like making things with it, it brings joys to me whenever i feel sad, but it can makes me depressed so hard. 
          So the point is, i love programming, programming is fun😇👍.
        </p>
        <p className='py-5'>Despite programming, i also have hobbies. My hobbies is listening to music, wacthing films, anime & korean drama, a little bit of singing, and programming.
        You must be wondering what's programming language do i use. Well.. i mainly using JavaScript, and a little bit knowledge of PHP, And an expert in HTML & CSS (Markup Language).
        You can see my other skills in <Link href='/skills' className='font-bold hover:text-blue-500 transition ease-in'>skills section</Link>.
        </p>
      </div>
    </div>
    </main>
  )
}
