'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import NavPills from '../components/NavPills';
import Image from 'next/image';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaJs } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';
import {TbBrandTailwind} from 'react-icons/tb'
import { TbBrandNextjs } from 'react-icons/tb';
import { TbBrandPhp } from 'react-icons/tb';
import {RiReactjsFill} from 'react-icons/ri'
import { TbBrandLaravel } from 'react-icons/tb';
import 'animate.css';

export default function Skills() {
  const tabs = [
    {
      id: 'tech',
      title: 'Tech',
      content: (
        <div className='flex justify-center lg:justify-start font-sans'>
        <div className="justify-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
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

        <div className="w-44 my-5 overflow-hidden shadow-sm rounded-3xl
           dark:text-gray-900 dark:bg-zinc-400 dark:hover:text-purple-700 bg-zinc-200
            dark:hover:bg-zinc-200 hover:bg-zinc-100 hover:text-purple-700 border-2
             border-zinc-300 transition ease-in">
          <TbBrandPhp className='m-auto w-auto py-5' size={150}/>
        </div>
        </div>
        </div>
      ),
    },
    {
      id: 'framework',
      title: 'Framework & Library',
      content: (
        <div className='flex justify-center lg:justify-start font-sans'>
        <div className="justify-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
          <div className="w-44 my-5 overflow-hidden shadow-sm rounded-3xl
           dark:text-gray-900 dark:bg-zinc-400 dark:hover:text-purple-600 bg-zinc-200
            dark:hover:bg-zinc-200 hover:bg-zinc-100 hover:text-purple-600 border-2
             border-zinc-300 transition ease-in">
          <FaBootstrap className='m-auto w-auto py-5' size={150}/>
        </div>

        <div className="w-44 my-5 overflow-hidden shadow-sm rounded-3xl
           dark:text-gray-900 dark:bg-zinc-400 dark:hover:text-blue-600 bg-zinc-200
            dark:hover:bg-zinc-200 hover:bg-zinc-100 hover:text-blue-600 border-2
             border-zinc-300 transition ease-in">
          <TbBrandTailwind className='m-auto w-auto py-5' size={150}/>
        </div>

        <div className="w-44 my-5 overflow-hidden shadow-sm rounded-3xl
           dark:text-gray-900 dark:bg-zinc-400 dark:hover:text-gray-500 bg-zinc-200
            dark:hover:bg-zinc-200 hover:bg-zinc-100 hover:text-gray-500 border-2
             border-zinc-300 transition ease-in">
          <TbBrandNextjs className='m-auto w-auto py-5' size={150}/>
        </div>

        <div className="w-44 my-5 overflow-hidden shadow-sm rounded-3xl
           dark:text-gray-900 dark:bg-zinc-400 dark:hover:text-blue-500 bg-zinc-200
            dark:hover:bg-zinc-200 hover:bg-zinc-100 hover:text-blue-500 border-2
             border-zinc-300 transition ease-in">
          <RiReactjsFill className='m-auto w-auto py-5' size={150}/>
        </div>

        <div className="w-44 my-5 overflow-hidden shadow-sm rounded-3xl
           dark:text-gray-900 dark:bg-zinc-400 dark:hover:text-red-700 bg-zinc-200
            dark:hover:bg-zinc-200 hover:bg-zinc-100 hover:text-red-700 border-2
             border-zinc-300 transition ease-in">
          <TbBrandLaravel className='m-auto w-auto py-5' size={150}/>
        </div>
        </div>
        </div>
      ),
    },
  ];
  return (
    <main className='min-h-screen animate__animated animate__fadeIn relative' id='skills'>
      <div className='dark:text-white'>
      <NavPills tabs={tabs}/>
      </div>
    </main>
  )
}
