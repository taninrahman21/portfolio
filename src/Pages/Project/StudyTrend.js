import React from 'react';
import img1 from '../../assets/study-trend.png';
import img2 from '../../assets/studytrend1.png';
import img3 from '../../assets/studytrend2.PNG';
import img4 from '../../assets/stufytrend3.png';
import img5 from '../../assets/studytrend4.png';
const StudyTrend = () => {
  return (
    <div>
    <img src={img1} className='w-full' alt="website" />
    <div className='w-full xl:p-0 mx-auto flex justify-center items-center xl:items-start flex-col xl:flex-row mt-8 text-justify'>
      <div className='w-full xl:w-[70%] xl:pr-8'>
        <h3 className="font-bold text-xl">Description</h3>
        <div className='mt-5'>
          <h4>This a full stack website.This is a learning platform.This website has lot of feature like...</h4>
          <ul className='list-disc ml-5 mt-3'>
            <li className='mb-2'>Users can create there account.which is created by firebase authentication.</li>
            <li className='mb-2'>If users not login they cannot buy any course.When they click checkout button then redirect login page and after login redirect checkout page.</li>
            <li className='mb-2'>User can download course details with pdf format.</li>
            <li className='mb-2'>Checkout course is a protected route.</li>
            <li className='mb-2'>This site full fully responsive.</li>
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
            <a href="https://github.com/taninrahman21/study-trend-client" rel="noreferrer" target='_blank'>github.com/taninrahman21/-study-trend-client</a>
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

export default StudyTrend;