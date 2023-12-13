import React from 'react';
import { FaDownload } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img  src="" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button
            type="btn"
            className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-white md:px-7 md:py-4 py-3 px-3 mr-4 rounded transition duration-300 transform hover:scale-105 hover:text-violet-600 focus:outline-none focus:ring focus:border-blue-300 flex"
          >
            Download CV <span> <FaDownload /></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;