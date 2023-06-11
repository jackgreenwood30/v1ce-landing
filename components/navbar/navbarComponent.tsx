// import Image from 'next/image'
// import Link from 'next/link'
// import NavMenu from './navMenu'

// import navbarData from './navbar.json'

// const NavbarComponent = () => {
//   return (
//     <nav className='w-full h-[75px] z-50 fixed bg-gradient-to-b from-black to-transparent backdrop-blur shadow-lg flex items-center justify-center'>
//       <div className='container mx-auto px-4 flex flex-row items-center justify-between'>
//         <Link href="/">
//           <Image src={navbarData.navbar.logoUrl} alt={navbarData.navbar.logoAlt} width="77" height="32" />
//         </Link>
//         <NavMenu/>
//       </div>
//     </nav>
//   )
// }

// export default NavbarComponent



"use client"

import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image'
import Link from 'next/link'
import NavMenu from './navMenu'

import navbarData from './navbar.json'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`w-full h-[75px] z-50 fixed top-0 ${isOpen ? "bg-black" : ""} bg-gradient-to-b from-black to-transparent backdrop-blur shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
             <Image src={navbarData.navbar.logoUrl} alt={navbarData.navbar.logoAlt} width="77" height="32" />
            </Link>
          </div>
          <div className="flex items-center -mr-2 md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white outline-none"
            >
              {isOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
          <div className="hidden md:flex md:items-center">
            <NavMenu/>
          </div>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out delay-250 duration-200"
        enterFrom="opacity-0 scale-100"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-100"
      >
        {(ref) => (
          <div className="md:hidden drop-shadow-lg">
            <div ref={ref} className=" space-y-1 bg-black">
              {navbarData.buttons.map((button,index) => (
              <a key={index} href="#" className={` ${button.buttonStyle === "light" ? "bg-white text-black" : "bg-black text-white"} block px-3 py-2 text-base font-medium transition-all duration-300`}>
                {button.buttonText}
              </a>
              ))}
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
