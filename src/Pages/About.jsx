import React from 'react';
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import ContactHome from './Homepage/ContactHome';
import Typewriter from 'typewriter-effect';
import nay from "../assets/nayemabout.jpg"
import cv from "../assets/resume.pdf"


// Import AOS CSS
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';
import nayem from "../assets/nayem.png"
import Skill from './Homepage/Skill';

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-5 py-10'>
                <div data-aos="fade-up" className='flex-1'>
                    <h1 className="md:text-4xl font-bold mb-6  text-[#21bf73] ">About me</h1>
                    {/* <Typewriter                  
                        options={{
                            strings:  ['<h1 style="color: bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500" class="md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">About me |</h1>'],
                            autoStart: true,
                            loop: true,
                        }}
                    /> */}
                    <img className='w-32 mb-3' src={nay} alt="" />
                    <p className="text-lg text-gray-600 mb-8">
                        Hi there! I'm <span className="text-[#21bf73] font-semibold">Nayem Ahmed</span>, a passionate frontend developer based in <span className="text-[#21bf73] font-semibold">Mymensingh,Bangladesh</span>. I specialize in crafting beautiful and responsive web experiences.
                    </p>
                    <div data-aos="fade-up" >
                        <div className='flex'>
                            <a href={cv} download>
                                <button
                                    type="btn"
                                    className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-white md:px-7 md:py-4 py-3 px-3 mr-4 rounded transition duration-300 transform hover:scale-105 hover:text-violet-600 focus:outline-none focus:ring focus:border-blue-300 flex"
                                >
                                    Download CV <span> <FaDownload /></span>
                                </button></a>
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
                <div className='flex-1'>
                    <p data-aos="fade-up" className="text-lg text-gray-600 mb-8">
                        My journey in web development began with a fascination for creating elegant and user-friendly interfaces. Armed with a degree in <span className="text-[#21bf73] font-semibold">B.Sc.(Hon's) ,Department of Zoology</span> from <span className="text-[#21bf73] font-semibold">Sherpur Govt. College</span>, I've honed my skills in HTML, CSS, and JavaScript.
                    </p>
                    <p data-aos="fade-up" className="text-lg text-gray-600 mb-8">
                        I thrive on building scalable web applications using modern frameworks like <span className="text-[#21bf73] font-semibold">React.js.</span> My goal is to deliver delightful user experiences that leave a lasting impression.
                    </p>
                    <p data-aos="fade-up" className="text-lg text-gray-600 mb-8">
                        Let's collaborate and bring your ideas to life! Explore my portfolio and feel free to reach out for inquiries or opportunities.
                    </p>
                    <img className='text-black w-32 -mt-10 relative' src={nayem} alt="" />
                </div>
            </div>

            <Skill></Skill>
            <ContactHome ></ContactHome>

        </div>
    );
};

export default About;