import React from 'react';
import { FaGithub, FaLinkedin, FaLocationArrow } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer p-10  bg-[#08d665]  text-base-content">
      <nav>
        <header className="footer-title">About Us</header>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Social</header>
        <div className="grid grid-flow-col gap-4">
          <a target="_blank" href='https://github.com/Nayem-Ahmed'>
           
              <FaGithub className='text-2xl'></FaGithub>
            

          </a>
          <a href='https://www.linkedin.com/feed/' target="_blank">
              <FaLinkedin className='text-2xl'></FaLinkedin >
          </a>
        </div>
        <div className="join mt-4 hover:scale-105 transition">
          <input className="input input-bordered join-item" placeholder="Email" />
          <button className="btn join-item bg-[#39dfaa] rounded-r-full"><FaLocationArrow className='text-white'></FaLocationArrow></button>
        </div>

      </nav>
      <div>

      </div>
    </footer>

  );
};

export default Footer;