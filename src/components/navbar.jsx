import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Navbar() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className='p-6 w-full flex flex-row justify-between items-center fixed top-0 left-0 bg-blue-50 shadow-md z-10'>
      <div className='text-3xl font-bold cursor-pointer' onClick={scrollToTop}>
        Y.A.
      </div>
      <div className='flex flex-row gap-7 justify-between font-bold'>
        <Link to='home' smooth={true} duration={300} className='cursor-pointer'>
          HOME
        </Link>
        <Link to='about' smooth={true} duration={300} className='cursor-pointer'>
          ABOUT
        </Link>
        <Link to='services' smooth={true} duration={300} className='cursor-pointer'>
          SERVICES
        </Link>
        <Link to='portfolio' smooth={true} duration={300} className='cursor-pointer'>
          PORTFOLIO
        </Link>
        <Link to='contacts' smooth={true} duration={300} className='cursor-pointer'>
          CONTACTS
        </Link>
      </div>
      <button className='px-6 py-2 bg-blue-500 rounded-full text-white'>INQUIRE NOW</button>
    </div>
  );
}

