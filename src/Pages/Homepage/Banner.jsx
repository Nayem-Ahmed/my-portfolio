import React from 'react';
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import downloadcv from '../../assets/resume.pdf'
import imgg from '../../assets/bgg.png'
import bpic from '../../assets/nay.jpg'
import nbanner from '../../assets/nayembaner.png'
import imgbg from '../../assets/imgbg.png'

const Banner = () => {
  return (
    <div  style={{backgroundImage: `url(${imgbg})`}}  className="hero min-h-screen">
      <div  className="hero-content flex-col lg:flex-row">
        <img  src={nbanner} className=" md:h-96 md:w-96 rounded-full p-2 hover:-translate-y-3 transition duration-300 border-4 border-[#08d665]" />
        <div className='md:ml-32'>
          <h1 data-aos="fade-down" className="text-5xl font-bold  "><span className='text-[#21bf73]'>Front-End</span> Web Developer</h1>
          <p data-aos="fade-right" className="py-6   text-xl max-w-2xl">Passionate Web Developer creating modern and responsive web applications.Transforming ideas into captivating user experiences. Proficient in HTML, CSS, JavaScript, and modern front-end frameworks.</p>
          <a href={downloadcv} download>
            <button
              type="btn"
              className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-white md:px-7 md:py-4 py-3 px-3 mr-4 rounded transition duration-300 transform hover:scale-105 hover:text-black focus:outline-none focus:ring focus:border-blue-300 flex mb-5"
            >
              Download CV <span> <FaDownload /></span>
            </button>
              </a>
          <a target="_blank" href='https://github.com/Nayem-Ahmed'>
            <button className="btn btn-circle outline outline-[#39dfaa] hover:bg-[#08d665] mr-5">
              <FaGithub className='text-xl'></FaGithub>
            </button>

          </a>
          <a href='https://www.linkedin.com/in/nayem-ahmed-9272652a5/' target="_blank">
            <button className="btn btn-circle outline  outline-[#39dfaa] hover:bg-[#08d665]">
              <FaLinkedin className='text-xl'></FaLinkedin >
            </button>

          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;