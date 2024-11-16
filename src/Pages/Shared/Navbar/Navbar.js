import { Twirl as Hamburger } from 'hamburger-react';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import taninImage from '../../../assets/authorImage.jpeg';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-[25px] left-[25px] right-[25px] h-16 bg-white z-40 px-8">
      <nav className="h-full">
        <div className="flex flex-wrap justify-between items-center h-full">
          {/* Brand Name */}
          <Link
            to="/"
            className="text-xl uppercase md:text-[20px] font-bold lg:text-2xl tracking-[8px]"
          >
            Tanin
          </Link>

          {/* Toggler Button for Mobile */}
          <div className="rounded-lg md:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700">
            <Hamburger
              color="#000" toggled={open} toggle={setOpen}
              size={24}
            />
          </div>


          {/* Links Section for Large Screens */}
          <div className="hidden md:flex md:w-auto">
            <ul className="flex space-x-8 text-gray-500 text-[14px] md:text-base md:font-medium">
              <li>
                <NavLink to="/home" className="hover:text-[#f26b38]">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className="hover:text-[#f26b38]">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-[#f26b38]">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-[#f26b38]">
                  Contact Me
                </NavLink>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1mml-5tbGmERS65eaqPaRmj8-_e1sMJl1/view?usp=share_link"
                  className="hover:text-[#f26b38]"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed top-20 bottom-20 bg-white w-[200px] transition-right duration-700 ease-in-out ${open ? 'right-[25px]' : 'right-[-9999px]'
            }`}
        >
          {/* Author Image */}
          <div className="mt-10 mb-10 flex justify-end mr-5">
            <img src={taninImage} alt="Author" className="w-2/5" />
          </div>
          {/* Nav Links */}
          <ul className="flex flex-col items-end pr-5 justify-center space-y-4 text-gray-500 text-lg">
            <li>
              <NavLink
                to="/home"
                className="hover:text-[#f26b38]"
                onClick={() => setOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className="hover:text-[#f26b38]"
                onClick={() => setOpen(false)}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:text-[#f26b38]"
                onClick={() => setOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover:text-[#f26b38]"
                onClick={() => setOpen(false)}
              >
                Contact Me
              </NavLink>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1mml-5tbGmERS65eaqPaRmj8-_e1sMJl1/view?usp=share_link"
                className="hover:text-[#f26b38]"
                onClick={() => setOpen(false)}
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
