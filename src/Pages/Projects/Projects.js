import React from 'react';
import img1 from '../../assets/beche-daw.png';
import img2 from '../../assets/smart-tutor.png';
import img3 from '../../assets/study-trend.png';

const Projects = () => {
  const projects = [
    {
      img: img1,
      name: 'Used Products Resale/Buy Zone'
    },
    {
      img: img2,
      name: 'Service Reviewer'
    },
    {
      img: img3,
      name: 'A Learning Platform'
    },
  ]
  return (
    <div className='mt-44 mb-20 w-3/4 mx-auto'>
      <div className='text-center'>
        <h2 className='font-extrabold uppercase text-4xl'>Projects</h2>
        <p>Home / Projects</p>
       </div>
       <div className='my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {
            projects.map(project => <div key={project.img}>
              <img className='h-[210px]' src={project.img} alt="websiteImage" />
            <h3 className="text-center mt-3 font-extrabold hover:text-[#f26b38]">{project.name}</h3>
            </div>)
          }
       </div>
    </div>
  );
};

export default Projects;