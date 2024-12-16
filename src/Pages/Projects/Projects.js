import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img1 from '../../assets/beche-daw.png';
import uniqueHome from '../../assets/Unique/uniqueHome.png';
import uifryHome from '../../assets/Uifry/uifryHome.png';
import furneHome from '../../assets/FurneHouse/furneHome.png';

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className='mt-32 mb-20 mx-auto text-[#333]'>
      <div className='text-center'>
        <h2 className='font-extrabold uppercase text-4xl'>Projects</h2>
        <p>Home / Projects</p>
      </div>

      <div className='my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <div className='hover:text-[#f26b38] cursor-pointer' onClick={() => navigate("/projects/furne-house")}>
          <img className='h-[210px]' src={furneHome} alt="websiteImage" />
          <h3 className="text-center mt-3 font-extrabold">Furne House - An eCommerce Website</h3>
        </div>
        <div className='hover:text-[#f26b38] cursor-pointer' onClick={() => navigate("/projects/unique")}>
          <img className='h-[210px]' src={uniqueHome} alt="websiteImage" />
          <h3 className="text-center mt-3 font-extrabold">Unique - An Awesome Landing Page</h3>
        </div>
        <div className='hover:text-[#f26b38] cursor-pointer' onClick={() => navigate("/projects/uifry")}>
          <img className='h-[210px]' src={uifryHome} alt="websiteImage" />
          <h3 className="text-center mt-3 font-extrabold">Uifry - A Landing Page</h3>
        </div>
        {/* <div className='hover:text-[#f26b38] cursor-pointer' onClick={() => navigate("/projects/becheDaw")}>
          <img className='h-[210px]' src={img1} alt="websiteImage" />
          <h3 className="text-center mt-3 font-extrabold">Used Products Resale/Buy Zone</h3>
        </div> */}

      </div>
    </div>
  );
};

export default Projects;