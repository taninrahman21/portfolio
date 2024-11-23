import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaAt, FaFontAwesomeFlag, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm('service_w90c3hv', 'template_l0tlpev', form.current, 'ZPA2BhMvww5EeyZa4')
      .then(
        (response) => {
          toast.success('Got your message. Thank you.');
          e.target.reset();
        },
        (error) => {
          console.error('FAILED...', error.text);
        }
      );
  };

  return (
    <div className='mt-32 mb-20 mx-auto text-[#333]'>
      <Toaster position="top-center" reverseOrder={false} />
      <div className='text-center'>
        <h2 className='font-extrabold uppercase text-4xl'>Contacts</h2>
        <p>Home / Contact Me</p>
      </div>

      <div className='mt-28'>
        <h3 className='font-extrabold uppercase text-xl'>Contact info</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-5'>

          <div className='p-4'>
            <div className='flex items-center'>
              <FaPhone className='text-[#f26b38] text-3xl mr-3 mb-2' />
              <h2 className='font-semibold mb-2.5'>Phone</h2>
            </div>
            <p>+880 1784933595</p>
          </div>

          <div className='p-4'>
            <div className='flex items-center'>
              <FaAt className='text-[#f26b38] text-3xl mr-3 mb-2' />
              <h2 className='font-semibold mb-2.5'>Email</h2>
            </div>
            <p><a className='text-[#f26b38] hover:underline' href="mailto:taninrahman21@gmail.com">taninrahman21@gmail.com</a></p>
          </div>

          <div className='p-4'>
            <div className='flex items-center'>
              <FaFontAwesomeFlag className='text-[#f26b38] text-3xl mr-3 mb-2' />
              <h2 className='font-semibold mb-2.5'>Address</h2>
            </div>
            <p>Dhaka, Bangladesh</p>
          </div>

        </div>
      </div>

      <div className='mt-16'>
        <h3 className='font-extrabold uppercase text-xl'>Hire Me</h3>
        <form ref={form} onSubmit={sendEmail}>
          <input name='name' className='block bg-transparent border-b focus:outline-none my-8 w-full py-4' type="text" placeholder='Name' />
          <input name="user_email" className='block bg-transparent border-b focus:outline-none my-8 w-full py-4' type="email" placeholder='Email' />
          <textarea className='block bg-transparent border-b focus:outline-none mb-5 w-full' name="message" placeholder='Massage'></textarea>
          <input className='bg-[#f26b38] text-white px-6 py-2 cursor-pointer' type="submit" value="Send Message" />
        </form>

      </div>
    </div>
  );
};

export default Contact;