import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdLocationPin, MdMail, MdOutlineWifiCalling3 } from 'react-icons/md';
import { toast } from 'react-toastify';

const ContactHome = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_kyqm5v8', 'template_w7z723v', form.current, 'DcihI3RTUabNYG9Ad')
          .then((result) => {
              console.log(result.text);
              toast("Request successful");


          }, (error) => {
              console.log(error.text);
          });
      };
    return (
       <div className='py-9'>
       <h1 data-aos="fade-up"  className='text-center md:text-8xl font-bold text-gray-200'>CONTACT ME</h1>
      <p data-aos="fade-up"  className='text-center md:text-2xl font-semibold relative md:-top-16 underline decoration-sky-500'>Let's start a project together!</p>
         <div data-aos="fade-right" className='flex flex-col md:flex-row py-7  p-4'>
            <div className='py-8 bg-[#1ebbf0] text-center flex-1 md:max-w-md md:mx-auto   my-auto'>
                <div className='mb-8'>
                <div className='h-16 w-16 bg-white mx-auto text-center flex items-center justify-center rounded-full'>
                    <MdOutlineWifiCalling3 className='text-2xl text-green-500' ></MdOutlineWifiCalling3>
                    </div>
                    <h3 className='text-white'>Call us</h3>
                    <h1 className='text-xl text-gray-200'>+880 1861495973</h1>

                </div>
                <div className='mb-8'>
                    <div className='h-16 w-16 bg-white mx-auto text-center flex items-center justify-center rounded-full'>
                        <MdMail className='text-2xl text-red-500' />
                    </div>

                    <h3 className='text-white'>Mail us</h3>
                    <h1 className='text-xl text-gray-200'>webdevnayem@gmail.com</h1>

                </div>
                <div className='mb-8'>
                <div className='h-16 w-16 bg-white mx-auto text-center flex items-center justify-center rounded-full'>
                       
                    <MdLocationPin className='text-2xl text-blue-500'></MdLocationPin  >
                    </div>
                    <h3 className='text-white'>My Location</h3>
                    <h1 className='text-xl text-gray-200'>Mymensingh, Bangladesh</h1>

                </div>


            </div>
            <div className="py-5 flex-1">
                <form  ref={form} onSubmit={sendEmail} id="contact-form" className="max-w-md mx-auto shadow-md  bg-white p-6">
                    <h2 className='text-center font-semibold text-2xl my-4'>Send A Message</h2>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Your Name:</label>
                    <input type="text" id="name" name="name" required className="w-full px-4 py-2 border hover:-translate-y-1 transition  border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500" />

                    <label htmlFor="email" className="block text-gray-700 mb-2">Your Email:</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 hover:-translate-y-1 transition rounded mb-4 focus:outline-none focus:border-blue-500" />

                    <label htmlFor="message" className="block text-gray-700 mb-2">Your Message:</label>
                    <textarea id="message" name="message" rows="4" required className="w-full px-4 py-2 border border-gray-300 hover:-translate-y-1 transition rounded mb-4 focus:outline-none focus:border-blue-500"></textarea>

                    <button type="submit" className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-white px-6 py-3 rounded hover:text-violet-600	btn-block hover:scale-105 transition duration-300">
                        Send Message
                    </button>


                </form>
            </div>
        </div>
       </div>
    );
};

export default ContactHome;