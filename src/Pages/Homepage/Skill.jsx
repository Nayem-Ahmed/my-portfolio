import React, { useEffect } from 'react';
import express from '../../assets/express.png'
import react from '../../assets/react.png'
import tailwind from '../../assets/Tailwind.png'
import js from '../../assets/js.png'
import bots from '../../assets/bootstrap.png'
import fire from '../../assets/fire.png'
import mongodb from '../../assets/mongodb.png'
import css from '../../assets/css.png'
import Aos from 'aos';

const Skill = () => {
    useEffect(() => {
        Aos.init({
          duration: 1000,
          offset: 200,
        });
      }, []);
    return (
        <div className='p-4'>
            <div data-aos="fade-up" >
                <h1 className='text-center md:text-7xl  font-bold text-gray-200'>Explore My Skills</h1>
                <p className='text-center md:text-3xl font-semibold relative md:-top-14 underline decoration-sky-500'>My Skills</p>
            </div>


            <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Skill Card 1 */}
          <div data-aos="zoom-in-up" className=" p-6 rounded-lg  hover:text-[#1ebbf0] border-b-4 border-sky-500">
            <h3 className="text-xl font-semibold mb-4">JavaScript (JS)</h3>
            <img className='w-16 mb-3' src={js} alt="" />
            <img src="" alt="" srcset="" />
            <div className="flex items-center">
              <div className="flex-1">
                <div className="progress-bar bg-white w-3/4 h-4 rounded-full">
                  <div className="progress-bar-inner bg-yellow-400 h-full rounded-full"></div>
                </div>
              </div>
              <p className="ml-4">75%</p>
            </div>
          </div>

          {/* Skill Card 2 */}
          <div data-aos="zoom-in-up" className=" p-6 rounded-lg   hover:text-[#1ebbf0] border-b-4 border-sky-500">
            <h3 className="text-xl font-semibold mb-4">React.js</h3>
            <img className='w-16 mb-3' src={react} alt="" />
            <div className="flex items-center">
              <div className="flex-1">
                <div className="progress-bar bg-white w-5/6 h-4 rounded-full">
                  <div className="progress-bar-inner bg-green-400 h-full rounded-full"></div>
                </div>
              </div>
              <p className="ml-4">80%</p>
            </div>
          </div>

          {/* Skill Card 3 */}
          <div data-aos="zoom-in-up" className="  p-6 rounded-lg   hover:text-[#1ebbf0] border-b-4 border-sky-500">
            <h3 className="text-xl font-semibold mb-4">CSS</h3>
            <img className='w-12 mb-3' src={css} alt="" srcset="" />
            <div className="flex items-center">
              <div className="flex-1">
                <div className="progress-bar bg-white w-4/5 h-4 rounded-full">
                  <div className="progress-bar-inner bg-red-400 h-full rounded-full"></div>
                </div>
              </div>
              <p className="ml-4">85%</p>
            </div>
          </div>
           {/* Express.js */}
           <div data-aos="zoom-in-up" className="  p-6 rounded-lg  hover:text-[#1ebbf0] border-b-4 border-sky-500">
            <h3 className="text-xl font-semibold mb-4">Express.js</h3>
            <img className='w-20 mb-3' src={express} alt="" />
            <div className="flex items-center">
              <div className="flex-1">
                <div className="progress-bar bg-white w-2/3 h-4 rounded-full">
                  <div className="progress-bar-inner bg-purple-400 h-full rounded-full"></div>
                </div>
              </div>
              <p className="ml-4">66%</p>
            </div>
          </div>
           {/* MongoDB */}
           <div data-aos="zoom-in-up" className="  p-6 rounded-lg   hover:text-[#1ebbf0] border-b-4 border-sky-500">
            <h3 className="text-xl font-semibold mb-4">MongoDB</h3>
            <img className='w-20 mb-3' src={mongodb} alt="" />
            <div className="flex items-center">
              <div className="flex-1">
                <div className="progress-bar bg-white w-2/3 h-4 rounded-full">
                  <div className="progress-bar-inner bg-orange-400 h-full rounded-full"></div>
                </div>
              </div>
              <p className="ml-4">70%</p>
            </div>
          </div>
            {/* Firebase */}
        <div data-aos="zoom-in-up" className=" p-6 rounded-lg   hover:text-[#1ebbf0] border-b-4 border-sky-500">
          <h3 className="text-xl font-semibold mb-4">Firebase</h3>
          <img className='w-20 mb-3' src={fire} alt="Firebase" />
          <div className="flex items-center">
            <div className="flex-1">
              <div className="progress-bar bg-white w-2/3 h-4 rounded-full">
                <div className="progress-bar-inner bg-yellow-400 h-full rounded-full"></div>
              </div>
            </div>
            <p className="ml-4">80%</p>
          </div>
        </div>

        {/* Bootstrap */}
        <div data-aos="zoom-in-up" className=" p-6 rounded-lg   hover:text-[#1ebbf0] border-b-4 border-sky-500">
          <h3 className="text-xl font-semibold mb-4">Bootstrap</h3>
          <img className='w-16 mb-3' src={bots} alt="Bootstrap" />
          <div className="flex items-center">
            <div className="flex-1">
              <div className="progress-bar bg-white w-2/3 h-4 rounded-full">
                <div className="progress-bar-inner bg-purple-400 h-full rounded-full"></div>
              </div>
            </div>
            <p className="ml-4">85%</p>
          </div>
        </div>
           {/* Tailwind */}
           <div data-aos="zoom-in-up" className="  p-6 rounded-lg   hover:text-[#1ebbf0] border-b-4 border-sky-500">
            <h3 className="text-xl font-semibold mb-4">Tailwind</h3>
            <img className='w-16 mb-3' src={tailwind} alt="" />
            <div className="flex items-center">
              <div className="flex-1">
                <div className="progress-bar bg-white w-2/3 h-4 rounded-full">
                  <div className="progress-bar-inner bg-sky-400 h-full rounded-full"></div>
                </div>
              </div>
              <p className="ml-4">95%</p>
            </div>
          </div>
          
        </div>
 
        </div>
    );
};

export default Skill;