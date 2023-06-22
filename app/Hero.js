import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className='min-h-screen flex justify-center animate__animated animate__fadeIn pb-20' id='hero'>
      <div className='flex flex-col md:flex-row justify-center items-center'>
        <div className='mb-8 md:mb-0'>
          <Image src='/hero1.jpeg' priority={true} width={300} height={300} alt='hero' className='rounded-full w-64 md:w-72 lg:w-80' />
        </div>
        <div className='text-center lg:text-start md:ms-5 lg:ms-0 md:text-start lg:px-10 font-sans'>
          <div className='dark:text-white'>
            <h3 className='text-2xl'>Hello! My name is</h3>
            <h1 className='text-4xl font-bold font-sans'>Sajudin <span className='text-blue-500'>Ma'ruf</span></h1>
            <h3 className='text-lg'>a Junior <span className='text-blue-500 font-bold font-mono'>FrontEnd Developer</span></h3>
          </div>
        </div>
      </div>
    </div>
  )
}
