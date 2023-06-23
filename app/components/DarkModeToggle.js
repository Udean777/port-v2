'use client'
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  return (
    <button
      className="bg-gradient-to-t from-blue-500 to-purple-600 p-2 rounded-full"
      onClick={toggleDarkMode}
    >
      {darkMode ? <FaSun size={25}/> : <FaMoon size={25}/>}
    </button>
  );
};

export default DarkModeToggle;
