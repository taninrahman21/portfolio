import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/beche-daw.png';
import img2 from '../../assets/smart-tutor.png';
import img3 from '../../assets/study-trend.png';

const Projects = () => {
  return (
    <div className='mt-32 mb-20 mx-auto text-[#333]'>
      <div className='text-center'>
        <h2 className='font-extrabold uppercase text-4xl'>Projects</h2>
        <p>Home / Projects</p>
      </div>

      <div className='my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <div className='hover:text-[#f26b38]'>
          <img className='h-[210px]' src={img1} alt="websiteImage" />
          <h3 className="text-center mt-3 font-extrabold"><Link to='/projects/becheDaw'>Used Products Resale/Buy Zone</Link></h3>
        </div>
        <div className='hover:text-[#f26b38]'>
          <img className='h-[210px]' src={img2} alt="websiteImage" />
          <h3 className="text-center mt-3 font-extrabold"><Link to='/projects/smartTutor'>Service Reviewer</Link></h3>
        </div>
        <div className='hover:text-[#f26b38]'>
          <img className='h-[210px]' src={img3} alt="websiteImage" />
          <h3 className="text-center mt-3 font-extrabold"><Link to='/projects/studyTrend'>A Learning Platform</Link></h3>
        </div>

      </div>
    </div>
  );
};

export default Projects;