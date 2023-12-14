 import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoMdArrowDropright } from 'react-icons/io';
// import '../Homepage/Portfolio.css'

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className='p-4'>
      <h1 data-aos="fade-up" className='text-center md:text-9xl font-bold text-gray-100 z-0'>SERVICES</h1>
      <p data-aos="fade-up" className='text-center md:text-4xl font-semibold relative md:-top-20 underline decoration-sky-500'>What I do</p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
        <div data-aos="fade-up" className="image-section card bg-base-100 shadow-xl border-b-4 border-sky-500">
          <div className="card-body">
            <h2 className="card-title">Website Development</h2>
            <div className='flex gap-2'>
            <div><IoMdArrowDropright className='text-2xl'></IoMdArrowDropright></div>
              <span className='text-[18px] text-gray-500'>Begin by understanding the client's requirements and goals for the website.</span>
            </div>
            <div className='flex gap-2'>
            <div><IoMdArrowDropright className='text-2xl'></IoMdArrowDropright></div>
              <span className='text-[18px] text-gray-500'>Write clean, maintainable code to bring the design to life.
                Utilize appropriate technologies and frameworks based on project requirements.</span>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="card bg-base-100 shadow-xl border-b-4 border-sky-500">
          <div className="card-body">
            <h2 className="card-title">Frontend Development</h2>
            <div className='flex gap-2'>
            <div><IoMdArrowDropright className='text-2xl'></IoMdArrowDropright></div>
              <span className='text-[18px] text-gray-500'>Work closely with designers to translate visual elements into code.Implement responsive and pixel-perfect UI components.</span>
            </div>
            <div className='flex gap-2'>
            <div><IoMdArrowDropright className='text-2xl'></IoMdArrowDropright></div>
              <span className='text-[18px] text-gray-500'>Implement interactive features using JavaScript or frontend frameworks.Add animations or transitions to enhance user engagement.</span>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="card bg-base-100 shadow-xl border-b-4 border-sky-500">
          <div className="card-body">
            <h2 className="card-title">Backend Development</h2>
            <div className='flex gap-2'>
            <div><IoMdArrowDropright className='text-2xl'></IoMdArrowDropright></div>
              <span className='text-[18px] text-gray-500'>Set up the backend server using Node.js, Express.js, or the chosen technology.Design an efficient database structure based on project requirements.</span>
            </div>
            <div className='flex gap-2'>
            <div><IoMdArrowDropright className='text-2xl'></IoMdArrowDropright></div>
              <span className='text-[18px] text-gray-500'>Develop RESTful APIs to handle data requests and responses.Implement CRUD (Create, Read, Update, Delete) operations.Implement secure user authentication and authorization mechanisms.</span>
            </div>
            <div className='flex gap-2'>
            <div><IoMdArrowDropright className='text-2xl'></IoMdArrowDropright></div>
              <span className='text-[18px] text-gray-500'>Integrate middleware for tasks such as logging, error handling, and request processing.Ensure proper handling of HTTP requests and responses.</span>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="card bg-base-100 shadow-xl border-b-4 border-sky-500 ">
          <div className="card-body ">
            <h2 className="card-title ">Responsive Design</h2>
            <div className='flex gap-2'>
            <div><IoMdArrowDropright className='text-2xl'></IoMdArrowDropright></div>
              <span className='text-[18px] text-gray-500'>Start with a mobile-first approach, designing for smaller screens.Ensure a fluid and adaptable layout that scales to larger screens.</span>
            </div>
            <div className='flex gap-2'>
            <div><IoMdArrowDropright className='text-2xl'></IoMdArrowDropright></div>
              <span className='text-[18px] text-gray-500'>Utilize flexible grid systems to create responsive layouts.Implement a fluid grid that adjusts columns and rows dynamically.</span>
            </div>
            <div className='flex gap-2'>
              <div><IoMdArrowDropright className='text-2xl'></IoMdArrowDropright></div>
              <span className='text-[18px] text-gray-500'>Monitor user interactions and feedback on different devices.Make continuous improvements to enhance the responsive design.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
