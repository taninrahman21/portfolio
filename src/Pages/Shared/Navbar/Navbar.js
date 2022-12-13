import React, { useState } from 'react';
import { NavLink, NavNavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="sticky top-0 bg-white z-20 px-8">
      <nav className="px-2 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto">
          <NavLink to="/" className="text-xl font-semibold lg:text-3xl">
            Tanin Rahman
          </NavLink>
          <button
            onClick={() => setOpen(!open)}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
              open ? "w-full md:block md:w-auto" : "hidden lg:block md:w-auto"
            }
            id="navbar-sticky"
          >
            {/* make sure will add animation last time */}
            <ul className="flex flex-col p-4  text-gray-500 text-sm mt-4 rounded-lg border border-gray-100 lg:flex-row md:space-x-8 md:mt-0 xl:text-lg md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/home"
                  className={`block py-2 pr-4 pl-3 hover:text-[#f26b38] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700`}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className="block py-2 pr-4 pl-3 hover:text-[#f26b38] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="block py-2 pr-4 pl-3 hover:text-[#f26b38] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className='block py-2 pr-4 pl-3 hover:text-[#f26b38] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700'
                >
                  Contact Me
                </NavLink>
              </li>
              <li>
                <a
                  href='https://drive.google.com/file/d/1mml-5tbGmERS65eaqPaRmj8-_e1sMJl1/view?usp=share_link'
                  className='block py-2 pr-4 pl-3 hover:text-[#f26b38] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700'
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