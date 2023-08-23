'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiArrowDropDownLine } from 'react-icons/ri'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  }

  {
    //for hamburger menu during window resize
  }
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav id='navbar-wrapper' className='grid grid-cols-2 xl:grid-cols-3 text-white bg-slate-700 py-3 h-auto'>
      <div id='logo' className='px-3'>
        <Link href={'/'}>
          <Image src={'/logo_transparent.png'} alt='logo' width={60} height={60}></Image>
        </Link>
      </div>
      
      <div className='xl:flex xl:justify-center hidden'>
      <div id='navigation' className='grid xl:w-full grid-cols-5 max-w-xl'>
        <Link 
          href={'/'}         
          onMouseEnter={handleMouseLeave}
          className='text-lg flex items-center justify-center h-auto rounded-xl hover:bg-slate-500 py-3 transition-all'
        >
          Home
        </Link>

        <div 
        onMouseEnter={() => setIsDropdownOpen(true)}
        className='text-lg flex items-center justify-center h-auto rounded-xl hover:bg-slate-500 py-3 transition-all'
        >
          <Link href={'/portfolio'}>
            Portfolio
          </Link>
          {isDropdownOpen && (
            <div className='absolute mt-80 text-white bg-slate-500 rounded w-36 h-42' onMouseLeave={handleMouseLeave}>
              <Link href={'/portfolio/directorygpt'} className='block text-center text-md py-2 hover:bg-slate-300 '>
                DirectoryGPT
              </Link>

              <Link href={'/portfolio/spotcheckai'} className='block text-center text-md py-2 hover:bg-slate-300 '>
                SpotCheckAI
              </Link>

              <Link href={'/portfolio/accidentme'} className='block text-center text-md py-2 hover:bg-slate-300 '>
                Accident.Me
              </Link>

              <Link href={'/portfolio/animalz'} className='block text-center text-md py-2 hover:bg-slate-300 '>
                Animalz
              </Link>

              <Link href={'/portfolio/opart'} className='block text-center text-md py-2 hover:bg-slate-300 '>
                Op Art
              </Link>

              <Link href={'/portfolio/etchasketch'} className='block text-center text-md py-2 hover:bg-slate-300 '>
                Etch a Sketch
              </Link>
            </div>
          )}
        </div>

        <Link 
          href={'/resume'} 
          onMouseEnter={handleMouseLeave}
          className='text-lg flex items-center justify-center h-auto rounded-xl hover:bg-slate-500 py-3 transition-all'
        >
          Resume
        </Link>

        <Link 
          href={'/aviation'} 
          onMouseEnter={handleMouseLeave}
          className='text-lg flex items-center justify-center h-auto rounded-xl hover:bg-slate-500 py-3 transition-all'
        >
          Aviation
        </Link>

        <Link 
          href={'/contact'}
          onMouseEnter={handleMouseLeave}
          className='text-lg flex items-center justify-center h-auto rounded-xl hover:bg-slate-500 py-3 transition-all'
        >
          Contact
        </Link>
      </div>
      </div>

      <div id='socials' className='justify-end items-center px-3 hidden xl:flex'>
        <div id='socials-container'>
          <Link href={'https://www.linkedin.com/in/raffertyleung/'} target='_blank'>
            <AiFillLinkedin class='inline mx-1' size={30}/>
          </Link>
          <Link href={'https://github.com/raleung2'} target='_blank'>
            <AiFillGithub class='inline' size={30}/>
          </Link>
        </div>
      </div>

      <div className='flex justify-end items-center px-4 xl:hidden'>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <GiHamburgerMenu size={30}/>
        </button>
      </div>

      {
        isMenuOpen && (
          <div className='col-span-2 transition duration-700'>

          <Link href={'/'} className='text-lg flex items-center justify-center h-auto rounded-xl hover:bg-slate-500 py-3 transition-all'>
            Home
          </Link>

          <Link href={'/portfolio'} className='text-lg flex items-center justify-center h-auto rounded-xl hover:bg-slate-500 py-3 transition-all'>
            Portfolio
            <RiArrowDropDownLine size={30}/>
          </Link>

          <Link href={'/portfolio/directorygpt'} className='text-xs flex items-center justify-center h-auto rounded-xl hover:bg-slate-500 py-3 transition-all'>
          Directory GPT
          </Link>

          <Link href={'/portfolio/spotcheckai'} className='text-xs flex items-center justify-center h-auto rounded-xl hover:bg-slate-500 py-3 transition-all'>
          SpotCheckAI
          </Link>

          <Link href={'/portfolio/accidentme'} className='text-xs flex items-center justify-center h-auto rounded-xl hover:bg-slate-500 py-3 transition-all'>
          Accident.Me
          </Link>

          <Link href={'/portfolio/animalz'} className='text-xs flex items-center justify-center h-auto rounded-xl hover:bg-slate-500 py-3 transition-all'>
          Animalz
          </Link>

          <Link href={'/portfolio/opart'} className='text-xs flex items-center justify-center h-auto rounded-xl hover:bg-slate-500 py-3 transition-all'>
          Op Art
          </Link>

          <Link href={'/portfolio/etchasketch'} className='text-xs flex items-center justify-center h-auto rounded-xl hover:bg-slate-500 py-3 transition-all'>
          Etch a Sketch
          </Link>

          <Link href={'/resume'} className='text-lg flex items-center justify-center h-auto rounded-xl hover:bg-slate-500 py-3 transition-all'>
            Resume
          </Link>

          <Link href={'/aviation'} className='text-lg flex items-center justify-center h-auto rounded-xl hover:bg-slate-500 py-3 transition-all'>
            Aviation
          </Link>

          <Link href={'/contact'} className='text-lg flex items-center justify-center h-auto rounded-xl hover:bg-slate-500 py-3 transition-all'>
            Contact
          </Link>

          <div className='flex justify-center items-center py-3'>
            <div className='hover:bg-slate-500 transition-all'>
            <Link href={'https://www.linkedin.com/in/raffertyleung/'} target='_blank'>
              <AiFillLinkedin class='inline mx-1' size={30}/>
            </Link>
            </div>

            <div className='hover:bg-slate-500 transition-all'>
            <Link href={'https://github.com/raleung2'} target='_blank'>
              <AiFillGithub class='inline mx-1' size={30}/>
            </Link>
            </div>
          </div>
          </div>
        )
      }
    </nav>
  );
};

export default Navbar;