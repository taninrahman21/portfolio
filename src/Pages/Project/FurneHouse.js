import React from 'react';
import img2 from '../../assets/FurneHouse/Furne1.png';
import img5 from '../../assets/FurneHouse/furne2.png';
import img3 from '../../assets/FurneHouse/furne3.png';
import img4 from '../../assets/FurneHouse/furne4.png';
import img1 from '../../assets/FurneHouse/furneHome.png';

const FurneHouse = () => {
  return (
    <div>
      <img src={img1} className='w-full' alt="website" />
      <div className='w-full lg:p-0 mx-auto flex justify-center items-center lg:items-start flex-col lg:flex-row mt-8 text-justify'>
        <div className='w-full xl:w-[70%] xl:pr-8'>
          <h3 className="font-bold text-xl">Description</h3>
          <div className='mt-5'>
            <h4>This is a modern furniture e-commerce website created with MERN Stack. Heres some features below:</h4>
            <ul className='list-disc ml-5 mt-3'>
              <li className='mb-2'>A sleek and responsive design, ensuring seamless usability across all devices.</li>
              <li className='mb-2'>Detailed product listings with descriptions, prices, and images for various furniture categories, including living room, bedroom, dining, and kids' room items.</li>
              <li className='mb-2'>User authentication, allowing secure account creation and login.</li>
              <li className='mb-2'>A review system where users can view customer feedback, including timestamps, to help make informed purchase decisions.</li>
              <li className='mb-2'>Personalized user dashboards to manage reviews, with options to edit or delete them.</li>
              <li className='mb-2'>Cart and secure checkout functionality for easy and safe transactions.</li>
            </ul>
          </div>
          <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-5'>
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
          </div>
        </div>

        <div className='w-full my-8 xl:mt-0 xl:w-[30%] xl:pr-5'>
          <h3 className="font-bold text-xl">Details</h3>
          <div>
            <div>
              <h4 className='font-semibold mt-3'>Live Site</h4>
              <a href="https://furne-house.netlify.app/" rel="noreferrer" target='_blank'>furne-house.netlify.app</a>
            </div>

            <div>
              <h4 className='font-semibold mt-3'>Client Side Code</h4>
              <a href="https://github.com/taninrahman21/furne-house-client" rel="noreferrer" target='_blank'>github.com/taninrahman21/-furne-house-client</a>
            </div>

            <div>
              <h4 className='font-semibold mt-3'>Server Side Code</h4>
              <a href="https://github.com/taninrahman21/furne-house-server" rel="noreferrer" target='_blank'>github.com/taninrahman21/-furne-house-server</a>
            </div>

            <div>
              <h4 className='font-semibold mt-3'>Used Technologies</h4>
              <ul className='list-disc ml-5'>
                <li>React Js</li>
                <li>Tailwind CSS</li>
                <li>Node Js</li>
                <li>Mongoose</li>
                <li>Express Js</li>
              </ul>
              <p>And More Advance Technologies</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FurneHouse;