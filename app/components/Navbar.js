import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaMoon, FaSun } from 'react-icons/fa';
import '../globals.css'
import 'animate.css';
import { Link } from 'react-scroll';


const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode) {
      setDarkMode(storedDarkMode === 'true');
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('darkMode', true);
    } else {
      root.classList.remove('dark');
      localStorage.setItem('darkMode', false);
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }; 

  return (
    <main className='sticky top-0 animate__animated animate__fadeIn z-50'>
    <nav className='navbar backdrop-blur-lg border-b-2 border-zinc-200 dark:border-zinc-700 bg-zinc-50/80 dark:bg-zinc-700/80'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <FiX className="block h-6 w-6" /> : <FiMenu className="block h-6 w-6" />}
              </button>
            </div>
            <div className="hidden md:block font-sans">
              <div className="ml-10 flex items-baseline space-x-4 dark:text-white">
                <Link to='hero' smooth={true} duration={500} spy={true} exact='true' offset={-70}>
                  <p className="cursor-pointer hover:bg-gray-700 hover:text-white dark:hover:bg-gray-500 transition ease-in px-3 py-2 rounded-md text-sm font-bold">Home</p>
                </Link>
                <Link to='about' smooth={true} duration={500} spy={true} exact='true' offset={-70} >
                  <p className="cursor-pointer hover:bg-gray-700 hover:text-white dark:hover:bg-gray-500 transition ease-in px-3 py-2 rounded-md text-sm font-bold">About</p>
                </Link>
                <Link to='skills' smooth={true} duration={500} spy={true} exact='true' offset={-70}>
                  <p className="cursor-pointer hover:bg-gray-700 hover:text-white dark:hover:bg-gray-500 transition ease-in px-3 py-2 rounded-md text-sm font-bold">Skills</p>
                </Link>
                <Link to='about' smooth={true} duration={500} spy={true} exact='true' offset={-70}>
                  <p className="cursor-pointer hover:bg-gray-700 hover:text-white dark:hover:bg-gray-500 transition ease-in px-3 py-2 rounded-md text-sm font-bold">Projects</p>
                </Link>
                <Link to='about' smooth={true} duration={500} spy={true} exact='true' offset={-70}>
                  <p className="cursor-pointer hover:bg-gray-700 hover:text-white dark:hover:bg-gray-500 transition ease-in px-3 py-2 rounded-md text-sm font-bold">Contact</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center dark:text-white">
            <button className="p-2" onClick={toggleDarkMode}>
              {darkMode ? <FaSun size={23} /> : <FaMoon size={23} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 dark:text-white">
          <Link href="/">
            <p className="hover:bg-gray-700 hover:text-white dark:hover:bg-gray-500 transition ease-in block px-3 py-2 rounded-md text-base font-medium">Home</p>
          </Link>
          <Link href="/about">
            <p className="hover:bg-gray-700 hover:text-white dark:hover:bg-gray-500 transition ease-in block px-3 py-2 rounded-md text-base font-medium">About</p>
          </Link>
          <Link href="/skills">
            <p className="hover:bg-gray-700 hover:text-white dark:hover:bg-gray-500 transition ease-in px-3 py-2 rounded-md text-sm font-medium">Skills</p>
          </Link>
          <Link href="/services">
            <p className="hover:bg-gray-700 hover:text-white dark:hover:bg-gray-500 transition ease-in block px-3 py-2 rounded-md text-base font-medium">Projects</p>
          </Link>
          <Link href="/contact">
            <p className="hover:bg-gray-700 hover:text-white dark:hover:bg-gray-500 transition ease-in block px-3 py-2 rounded-md text-base font-medium">Contact</p>
          </Link>
        </div>
      </div>
    </nav>
    </main>
  );
};

export default Navbar;
