import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="sticky top-0 bg-white z-20 px-8">
      <nav className="px-2 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto">
          <Link to="/" className="text-xl md:text-[20px] font-semibold lg:text-2xl">
            Tanin Rahman
          </Link>
          <button
            onClick={() => setOpen(!open)}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="true"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={
              open ? "w-full md:block lg:w-auto" : "hidden md:block md:w-auto"
            }
            id="navbar-sticky"
          >
            {/* make sure will add animation last time */}
            <ul className="flex flex-col text-gray-500 md:py-2 text-[14px] lg:text-sm mt-4 md:flex-row md:space-x-8 md:mt-0 xl:text-lg md:font-medium">
              <li className=' pb-3 md:pb-0'>
                <NavLink
                  to="/home"
                  className='hover:text-[#f26b38]'
                >
                  Home
                </NavLink>
              </li>
              <li className=' pb-3 md:pb-0'>
                <NavLink
                  to="/projects"
                  className="hover:text-[#f26b38]"
                >
                  Projects
                </NavLink>
              </li>
              <li className=' pb-3 md:pb-0'>
                <NavLink
                  to="/about"
                  className="hover:text-[#f26b38]"
                >
                  About
                </NavLink>
              </li>
              <li className=' pb-3 md:pb-0'>
                <NavLink
                  to="/contact"
                  className='hover:text-[#f26b38]'
                >
                  Contact Me
                </NavLink>
              </li>
              <li className=' pb-3 md:pb-0'>
                <a
                  href='https://drive.google.com/file/d/1mml-5tbGmERS65eaqPaRmj8-_e1sMJl1/view?usp=share_link'
                  className='hover:text-[#f26b38]'
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;