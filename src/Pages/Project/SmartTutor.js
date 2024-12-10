import React from 'react';
import img1 from '../../assets/smart-tutor.png';
import img4 from '../../assets/smarttutor1.png';
import img3 from '../../assets/smarttutor2.png';
import img2 from '../../assets/smarttutor3.png';
import img5 from '../../assets/smarttutor4.png';

const SmartTutor = () => {
  return (
    <div>
    <img src={img1} className='w-full' alt="website" />
    <div className='w-full lg:p-0 mx-auto flex justify-center items-center lg:items-start flex-col lg:flex-row mt-8 text-justify'>
        <div className='w-full xl:w-[70%] xl:pr-8'>
        <h3 className="font-bold text-xl">Description</h3>
        <div className='mt-5'>
          <h4>This a full stack website for service provider.This website has lot of feature like...</h4>
          <ul className='list-disc ml-5 mt-3'>
            <li className='mb-2'>Users can create there account.which is created by firebase authentication.</li>
            <li className='mb-2'>If users not login they cannot buy any course.</li>
            <li className='mb-2'>A user can see others review and review time.</li>
            <li className='mb-2'>Users can see them all review and they can delete or update any review.</li>
            <li className='mb-2'>My Review route is protected via JWT.</li>
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
            <a href="https://study-trend-ecdf6.web.app/" rel="noreferrer" target='_blank'>study-trend.web.app</a>
          </div>

         <div>
          <h4 className='font-semibold mt-3'>Client Side Code</h4>
            <a href="https://github.com/taninrahman21/study-trend-client" rel="noreferrer" target='_blank'>github.com/taninrahman21/-study-trend-tutor-client</a>
         </div>

         <div>
           <h4 className='font-semibold mt-3'>Server Side Code</h4>
           <a href="https://github.com/taninrahman21/study-trend-server" rel="noreferrer" target='_blank'>github.com/taninrahman21/-study-trend-server</a>
         </div>
        </div>
      </div>
    </div>

  </div>
  );
};

export default SmartTutor;