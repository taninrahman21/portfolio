import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="mt-auto fixed bottom-[25px] left-[25px] h-16 right-[25px] bg-white z-20 flex justify-center items-center md:justify-between px-8 py-2">
            <div className='hidden md:block'>
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">Tanin Rahman</a>. All rights reserved.
                </span>
            </div>
            <ul className="flex flex-wrap items-center text-base text-gray-800 sm:mt-0">
                <li className='mr-10'>
                    <a href="https://www.linkedin.com/in/taninrahman21/" rel="noreferrer" target='_blank'><FaLinkedin /></a>
                </li>
                <li className="mr-10">
                    <a href="https://github.com/taninrahman21" rel="noreferrer" target='_blank'><FaGithub /></a>
                </li>
                <li className="mr-10">
                    <a href="https://facebook.com/taninrahman21" rel="noreferrer" target='_blank' ><FaFacebook /></a>
                </li>
                <li className="mr-10">
                    <a href="https://instagram.com/taninrahman21" rel="noreferrer" target='_blank' ><FaInstagram /></a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;