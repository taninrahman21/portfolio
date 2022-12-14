import React from 'react';
import { FaAt, FaFontAwesomeFlag, FaPhone } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';

const Contact = () => {
  const sendMail = event => {
    event.preventDefault(); 
       

    emailjs.sendForm('service_gglur1k', 'template_p6jbn2a', event.target, 'CWptppKFInt4dU_tl')
    .then(res => {
      toast.success('Got your message.Thank You.');
      event.target.reset();
    }).catch(error => console.error(error));

  }
  return (
    <div className='mt-44 mb-20 w-3/4 mx-auto'>
    <Toaster position="top-center" reverseOrder={false}/>
       <div className='text-center'>
        <h2 className='font-extrabold uppercase text-4xl'>Contacts</h2>
        <p>Home / Contact Me</p>
       </div>

       <div className='mt-28'>
        <h3 className='font-extrabold uppercase text-xl'>Contact info</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5'>

          <div className='p-4'>
           <div className='flex items-center'>
            <FaPhone className='text-[#f26b38] text-3xl mr-3 mb-2'/>
            <h2 className='font-bold mb-2.5'>Phone</h2>
           </div>
           <p>+880 1784933595</p>
          </div>

          <div className='p-4'>
           <div className='flex items-center'>
            <FaAt className='text-[#f26b38] text-3xl mr-3 mb-2'/>
            <h2 className='font-bold mb-2.5'>Email</h2>
           </div>
           <p><a className='text-[#f26b38] hover:underline' href="mailto:taninrahman21@gmail.com">taninrahman21@gmail.com</a></p>
          </div>

          <div className='p-4'>
           <div className='flex items-center'>
            <FaFontAwesomeFlag className='text-[#f26b38] text-3xl mr-3 mb-2'/>
            <h2 className='font-bold mb-2.5'>Address</h2>
           </div>
           <p>Dhaka, Bangladesh</p>
          </div>

        </div>
       </div>

       <div className='mt-16'>
        <h3 className='font-extrabold uppercase text-xl'>Hire Me</h3>
        <form onSubmit={sendMail}>
          <input name='name' className='block border-b my-8 w-full py-4' type="text" placeholder='Name'/>
          <input name='user-email' className='block border-b my-8 w-full py-4' type="email" placeholder='Email'/>
          <textarea className='block border-b mb-5 w-full' name="message" placeholder='Massage'></textarea>
          <input className='bg-[#f26b38] text-white px-6 py-2' type="submit" value="Send Message" />
        </form>
       </div>
    </div>
  );
};

export default Contact;