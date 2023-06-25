import React from 'react';
import NavPills from '../components/NavPills';
import { FaHtml5, FaBootstrap, FaCss3Alt, FaJs } from 'react-icons/fa';
import {TbBrandTailwind, TbBrandPhp, TbBrandNextjs, TbBrandLaravel} from 'react-icons/tb'
import {RiReactjsFill} from 'react-icons/ri'
import 'animate.css';
import Navbar from '../components/Navbar';

export default function Skills() {
  const tabs = [
    {
      id: 'tech',
      title: 'Tech',
      content: (
        <div className='flex justify-center lg:justify-start font-sans'>
        <div className="justify-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="w-40 my-5 overflow-hidden shadow-sm rounded-3xl
           dark:text-white hover:text-orange-600 dark:hover:text-orange-600  bg-transparent dark:bg-transparent
            hover:bg-transparent  border-2 
             border-zinc-500 hover:border-orange-600 transition ease-in">
          <FaHtml5 className='m-auto w-auto py-5' size={150}/>
          <p className='flex justify-center pb-2 font-sans font-bold'>Expert🔥</p>
        </div>

        <div className="w-40 my-5 overflow-hidden shadow-sm rounded-3xl
           dark:text-white  bg-transparent dark:bg-transparent dark:hover:text-blue-600 
            dark:hover:bg-transparent hover:bg-transparent hover:text-blue-600 border-2
             border-zinc-500 hover:border-blue-600 transition ease-in">
          <FaCss3Alt className='m-auto w-auto py-5' size={150}/>
          <p className='flex justify-center pb-2 font-sans font-bold'>Expert🔥</p>
        </div>

        <div className="w-40 my-5 overflow-hidden shadow-sm rounded-3xl
           dark:text-white dark:hover:text-yellow-400  bg-transparent dark:bg-transparent
            dark:hover:bg-transparent hover:bg-transparent hover:text-yellow-400 border-2
             border-zinc-500 hover:border-yellow-400 transition ease-in">
          <FaJs className='m-auto w-auto py-5' size={150}/>
          <p className='flex justify-center pb-2 font-sans font-bold'>Beginner😁</p>
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
        <div className="justify-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
         
          <div className="w-40 my-5 overflow-hidden shadow-sm rounded-3xl
           dark:text-white dark:hover:text-purple-600  bg-transparent dark:bg-transparent
            dark:hover:bg-transparent hover:bg-transparent hover:text-purple-600 border-2
             border-zinc-500 hover:border-purple-600 transition ease-in">
          <FaBootstrap className='m-auto w-auto py-5' size={150}/>
          <p className='flex justify-center pb-2 font-sans font-bold'>Intermediate💙</p>
        </div>

        <div className="w-40 my-5 overflow-hidden shadow-sm rounded-3xl
           dark:text-white dark:hover:text-blue-600  bg-transparent dark:bg-transparent
            dark:hover:bg-transparent hover:bg-transparent hover:text-blue-600 border-2
             border-zinc-500 hover:border-blue-600 transition ease-in">
          <TbBrandTailwind className='m-auto w-auto py-5' size={150}/>
          <p className='flex justify-center pb-2 font-sans font-bold'>Intermediate💙</p>
        </div>

        <div className="w-40 my-5 overflow-hidden shadow-sm rounded-3xl
           dark:text-white dark:hover:text-gray-500  bg-transparent dark:bg-transparent
            dark:hover:bg-transparent hover:bg-transparent hover:text-gray-500 border-2
             border-zinc-500 hover:border-gray-500 transition ease-in">
          <TbBrandNextjs className='m-auto w-auto py-5' size={150}/>
          <p className='flex justify-center pb-2 font-sans font-bold'>Beginner😁</p>
        </div>

        <div className="w-40 my-5 overflow-hidden shadow-sm rounded-3xl
           dark:text-white dark:hover:text-blue-500  bg-transparent dark:bg-transparent
            dark:hover:bg-transparent hover:bg-transparent hover:text-blue-500 border-2
             border-zinc-500 hover:border-blue-500 transition ease-in">
          <RiReactjsFill className='m-auto w-auto py-5' size={150}/>
          <p className='flex justify-center pb-2 font-sans font-bold'>Beginner😁</p>
        </div>
        </div>
        </div>
      ),
    },
  ];

  return (
    <main className='min-h-screen bg-stone-300 dark:bg-stone-600 overflow-hidden'>
      <Navbar/>
      <div className='text-stone-800 dark:text-stone-200'>
        <div className='animate__animated animate__fadeInDown'>
      <NavPills tabs={tabs}/>
      </div>
      </div>
    </main>
  )
}
