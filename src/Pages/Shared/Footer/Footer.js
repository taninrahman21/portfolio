import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-auto sticky bottom-0 bg-white z-20 flex justify-center md:justify-between px-8 py-2">
    <div className='hidden md:block'>
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">Tanin Rahman</a>. All rights reserved.
    </span>
    </div>
    <ul className="flex flex-wrap items-center text-base text-gray-800 sm:mt-0">
        <li>
            <a href="https://www.linkedin.com/in/taninrahman21/" rel="noreferrer" target='_blank' className="mr-10"><FaLinkedin/></a>
        </li>
        <li>
            <a href="https://github.com/taninrahman21" rel="noreferrer" target='_blank' className="mr-10"><FaGithub/></a>
        </li>
        <li>
            <a href="https://facebook.com/taninrahman21" rel="noreferrer" target='_blank' className="mr-10"><FaFacebook/></a>
        </li>
        <li>
            <a href="https://instagram.com/taninrahman21" rel="noreferrer" target='_blank' className="mr-10"><FaInstagram/></a>
        </li>
    </ul>
</footer>
  );
};

export default Footer;