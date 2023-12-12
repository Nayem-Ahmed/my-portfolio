import React from 'react';
import { MdOutlineWifiCalling3,MdMail ,MdLocationPin  } from "react-icons/md";


const Contact = () => {
    return (
        <div className='bg-gray-100 py-9 p-4 md:p-0 lg:p-0'>
            <h2 className="md:text-3xl font-bold mb-6 text-center">Contact Me</h2>
            <p className="text-gray-600 mb-8 text-center max-w-md mx-auto">If you're interested in working together or have any questions, feel free to reach out to me.</p>
            <div className='flex gap-5 flex-col md:flex-row'>
                <div className='py-8 bg-white text-center flex-1 shadow-sm  my-auto'>
                    <div className='mb-8'>
                        <MdOutlineWifiCalling3 className='mx-auto text-2xl mb-3 text-[#39dfaa]'></MdOutlineWifiCalling3>
                        <h3 className='text-[#1ebbf0]'>Call us</h3>
                        <h1 className='text-xl'>+880 1861495973</h1>
                 
                    </div>
                    <div className='mb-8'>
                        <MdMail className='mx-auto text-2xl mb-3 text-[#39dfaa]'></MdMail >
                        <h3 className='text-[#1ebbf0]'>Mail us</h3>
                        <h1 className='text-xl'>webdevnayem@gmail.com</h1>
                 
                    </div>
                    <div className='mb-8'>
                        <MdLocationPin className='mx-auto text-2xl mb-3 text-[#39dfaa]'></MdLocationPin  >
                        <h3 className='text-[#1ebbf0]'>My Location</h3>
                        <h1 className='text-xl'>Mymensingh, Bangladesh</h1>
                 
                    </div>
               

                </div>
                <div  className="py-6 flex-grow">
                    <form id="contact-form" className="max-w-md mx-auto shadow-sm bg-white p-6">
                        <label htmlFor="name" className="block text-gray-700 mb-2">Your Name:</label>
                        <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500" />

                        <label htmlFor="email" className="block text-gray-700 mb-2">Your Email:</label>
                        <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500" />

                        <label htmlFor="message" className="block text-gray-700 mb-2">Your Message:</label>
                        <textarea id="message" name="message" rows="4" required className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500"></textarea>

                        <button type="submit" className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-white px-6 py-3 rounded hover:text-violet-600	">
                            Send Message
                        </button>


                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
