import React from 'react';
import { FaGithub, FaLinkedin, FaLocationArrow } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
  <footer className="footer footer-center p-10  bg-[#08d665]  text-base-content rounded">
  <nav className="grid grid-flow-col text-white gap-4">
    <NavLink to = '/' className="link link-hover">Home</NavLink>
    <NavLink to = '/about' className="link link-hover">About</NavLink>
    <NavLink to = '/portfoio' className="link link-hover">Portfolio</NavLink>
    <NavLink to = '/contact' className="link link-hover">Contact</NavLink>
  </nav> 
  <nav>
  <div className="grid grid-flow-col gap-4">
          <a target="_blank" href='https://github.com/Nayem-Ahmed'>
           
              <FaGithub className='text-3xl'></FaGithub>
            

          </a>
          <a href='https://www.linkedin.com/feed/' target="_blank">
              <FaLinkedin className='text-3xl text-blue-400'></FaLinkedin >
          </a>
        </div>
        {/* <div className="join mt-4 hover:scale-105 transition">
          <input className="input input-bordered join-item" placeholder="Email" />
          <button className="btn join-item bg-[#39dfaa] rounded-r-full"><FaLocationArrow className='text-white'></FaLocationArrow></button>
        </div> */}
  </nav> 
  <aside>
    <p className='text-white'>Copyright © {currentYear} - All right reserved by <span className='font-semibold hover:text-sky-500' >Nayem Ahmed</span></p>
  </aside>
</footer>

  );
};

export default Footer;