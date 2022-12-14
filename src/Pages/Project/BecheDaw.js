import React from 'react';
import img1 from '../../assets/beche-daw.png';
import img2 from '../../assets/beche-daw-login.png';
import img3 from '../../assets/bechedaw-dashboard.png';
import img4 from '../../assets/becheDawfull.png';
import img5 from '../../assets/bechedawphones.png';

const BecheDaw = () => {
  return (
    <div>
      <img src={img1} className='w-full' alt="website" />
      <div className='w-full px-4 md:px-10 lg:p-0 lg:w-4/5 mx-auto flex justify-center items-center lg:items-start flex-col lg:flex-row mt-8 text-justify'>
        <div className='w-full lg:w-[80%] lg:pr-8'>
          <h3 className="font-bold text-xl">Description</h3>
          <div className='mt-5'>
            <h4>This a full stack website for used product sell or buy there used mobile phones easily.This website has lot of feature like...</h4>
            <ul className='list-disc ml-5 mt-3'>
              <li className='mb-2'>Users can create there account.which is created by firebase authentication.</li>
              <li className='mb-2'>If users not login they cannot buy or book any products.When they click book button they will see a toast.</li>
              <li className='mb-2'>This site has dashboard system.</li>
              <li className='mb-2'>Users/Buyer will see My Orders, Buyer will see My Products, and seller will see All Users and All Buyers and Reported Products Route.</li>
              <li className='mb-2'>Seller can advertise a product and Buyer can report a product</li>
              <li className='mb-2'>All dashboard route is protected by jwt.</li>
              <li>Admin can delete or make admin a user or buyer.</li>
            </ul>
          </div>
          <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-5'>
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
          </div>
        </div>

        <div className='w-full mt-8 lg:mt-0 lg:w-1/4 lg:pr-5'>
          <h3 className="font-bold text-xl">Details</h3>
          <div>
            <div>
              <h4 className='font-semibold mt-3'>Live Site</h4>
              <a href="https://beche-daw.web.app" rel="noreferrer" target='_blank'>beche-daw.web.app</a>
            </div>

           <div>
            <h4 className='font-semibold mt-3'>Client Side Code</h4>
              <a href="https://github.com/taninrahman21/used-product-resale-client" rel="noreferrer" target='_blank'>github.com/taninrahman21/used-product-resale-client</a>
           </div>

           <div>
             <h4 className='font-semibold mt-3'>Server Side Code</h4>
             <a href="https://github.com/taninrahman21/used-product-resale-server" rel="noreferrer" target='_blank'>github.com/taninrahman21/used-product-resale-server</a>
           </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BecheDaw;