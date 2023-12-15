import React from 'react';
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import downloadcv from '../../assets/SCIC ASSIGNMENT_2.pdf'

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <a href={downloadcv} download>
            <button
              type="btn"
              className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-white md:px-7 md:py-4 py-3 px-3 mr-4 rounded transition duration-300 transform hover:scale-105 hover:text-violet-600 focus:outline-none focus:ring focus:border-blue-300 flex mb-5"
            >
              Download CV <span> <FaDownload /></span>
            </button></a>
          <a target="_blank" href='https://github.com/Nayem-Ahmed'>
            <button className="btn btn-circle outline outline-[#39dfaa] hover:bg-[#08d665] mr-5">
              <FaGithub className='text-xl'></FaGithub>
            </button>

          </a>
          <a href='https://www.linkedin.com/feed/' target="_blank">
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