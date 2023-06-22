'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import NavPills from '../components/NavPills';
import Image from 'next/image';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaJs } from 'react-icons/fa';
import styles from 'animate.css';

export default function page() {
  const tabs = [
    {
      id: 'tab1',
      title: 'Tech',
      content: (
        <div className='flex justify-center lg:justify-start font-sans'>
        <div className="justify-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
          <div className="w-44 my-5 overflow-hidden shadow-sm rounded-3xl
           dark:text-gray-900 dark:bg-zinc-400 dark:hover:text-orange-600 bg-zinc-200
            dark:hover:bg-zinc-200 hover:bg-zinc-100 hover:text-orange-600 border-2
             border-zinc-300 transition ease-in">
          <FaHtml5 className='m-auto w-auto py-5' size={150}/>
        </div>

        <div className="w-44 my-5 overflow-hidden shadow-sm rounded-3xl
           dark:text-gray-900 dark:bg-zinc-400 dark:hover:text-blue-600 bg-zinc-200
            dark:hover:bg-zinc-200 hover:bg-zinc-100 hover:text-blue-600 border-2
             border-zinc-300 transition ease-in">
          <FaCss3Alt className='m-auto w-auto py-5' size={150}/>
        </div>

        <div className="w-44 my-5 overflow-hidden shadow-sm rounded-3xl
           dark:text-gray-900 dark:bg-zinc-400 dark:hover:text-yellow-500 bg-zinc-200
            dark:hover:bg-zinc-200 hover:bg-zinc-100 hover:text-yellow-500 border-2
             border-zinc-300 transition ease-in">
          <FaJs className='m-auto w-auto py-5' size={150}/>
        </div>
        </div>
        </div>
      ),
    },
    {
      id: 'tab2',
      title: 'Framework',
      content: (
        <div className="bg-green-200 text-green-800 p-4">
          Konten tab 2
        </div>
      ),
    },
    {
      id: 'tab3',
      title: 'Library',
      content: (
        <div className="bg-yellow-200 text-yellow-800 p-4">
          Konten tab 3
        </div>
      ),
    },
  ];
  return (
    <main className='min-h-screen bg-zinc-100 dark:bg-zinc-800 animate__fadeIn'>
      <Navbar/>
      <div className='dark:text-white'>
      <NavPills tabs={tabs}/>
      </div>
    </main>
  )
}
