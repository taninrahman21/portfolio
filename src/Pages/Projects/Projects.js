import React from 'react';
import { useNavigate } from 'react-router-dom';
import furneHousePage from '../../assets/FurneHouse/furneHousePage.png';
import uifryPage from '../../assets/Uifry/uifryPage.png';
import uniquePage from '../../assets/Unique/uniquePage.png';

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
          <div className='h-[210px] bg-top bg-no-repeat bg-cover hover:bg-bottom transition-all duration-[1.5s] ease-linear' style={{ backgroundImage: `url(${furneHousePage})` }} ></div>
          <h3 className="text-center mt-3 font-extrabold">Furne House - An eCommerce Website</h3>
        </div>
        <div className='hover:text-[#f26b38] cursor-pointer' onClick={() => navigate("/projects/unique")}>
          <div className='h-[210px] bg-top bg-no-repeat bg-cover hover:bg-bottom transition-all duration-[3s] ease-linear' style={{ backgroundImage: `url(${uniquePage})` }} ></div>
          <h3 className="text-center mt-3 font-extrabold">Unique - An Awesome Landing Page</h3>
        </div>
        <div className='hover:text-[#f26b38] cursor-pointer' onClick={() => navigate("/projects/uifry")}>
          <div className='h-[210px] bg-top bg-no-repeat bg-cover hover:bg-bottom transition-all duration-[1.5s] ease-linear' style={{ backgroundImage: `url(${uifryPage})` }} ></div>
          <h3 className="text-center mt-3 font-extrabold">Uifry - A Landing Page</h3>
        </div>

      </div>
    </div>
  );
};

export default Projects;