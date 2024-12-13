import React from 'react';
import img1 from '../../assets/Uifry/uifryHome.png';
import img2 from '../../assets/Uifry/faqUifry.png';
import img3 from '../../assets/Uifry/feedbacksUifry.png';
import img4 from '../../assets/Uifry/featuresUifry.png';
import img5 from '../../assets/Uifry/pricingUifry.png';
const Uifry = () => {
  return (
    <div>
      <img src={img1} className='w-full' alt="website" />
      <div className='w-full xl:p-0 mx-auto flex justify-center items-center xl:items-start flex-col xl:flex-row mt-8 text-justify'>
        <div className='w-full xl:w-[70%] xl:pr-8'>
          <h3 className="font-bold text-xl">Description</h3>
          <div className='mt-5'>
            <h4>This is a visually appealing, responsive landing page designed for a modern user experience. Key features include:</h4>
            <ul className='list-disc ml-5 mt-3'>
              <li className='mb-2'>The entire design is handcrafted using raw HTML and CSS, showcasing meticulous attention to detail.</li>
              <li className='mb-2'>A responsive layout that ensures compatibility across all devices, providing a seamless user experience.</li>
              <li className='mb-2'>Interactive elements to engage users and effectively highlight the platform's purpose.</li>
              <li className='mb-2'>Fast-loading pages, ensuring users can access information quickly and efficiently.</li>
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
              <a href="https://taninrahman21.github.io/uifry-landing-page" rel="noreferrer" target='_blank'>taninrahman21.github.io/uifry-landing-page/</a>
            </div>

            <div>
              <h4 className='font-semibold mt-3'>Code Link</h4>
              <a href="https://github.com/taninrahman21/uifry-landing-page" rel="noreferrer" target='_blank'>github.com/taninrahman21/uifry-landing-page</a>
            </div>

            <div>
              <h4 className='font-semibold mt-3'>Used Technologies</h4>
              <ul className='list-disc ml-5'>
                <li>HTML</li>
                <li>CSS</li>
                <li>Fontawesome Icon</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Uifry;