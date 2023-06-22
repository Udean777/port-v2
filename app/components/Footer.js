import React from 'react'
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showNavbar, setShowNavbar] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='sticky bottom-0 navbar backdrop-blur-sm bg-white/80 dark:bg-gray-700/80'>
        <div className='w-full py-3 dark:text-white'>
        <p className='text-center text-sm'>KopiKanan&copy;2023 This web made by Udean💙</p>
        </div>
    </div>
  )
}
