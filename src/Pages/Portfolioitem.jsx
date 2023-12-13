import Aos from 'aos';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import './Homepage/Portfolio.css'

const Portfolioitem = ({ portfolio }) => {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
      }, []);
    return (
        <div data-aos="flip-left" className="card bg-base-100 shadow-xl image-section hover:translate-y-3 transition duration-300">
            <div className='hover:-translate-y-4 transition duration-300'>
                <img className='w-full md:h-72' src={portfolio.img} alt=" " />
            </div>
            <div className="card-body ">
                <div className='flex justify-between'>
                    <Link className='underline text-sky-500' to = {portfolio.link}> </Link>
                    <Link className='underline text-sky-500' to = {portfolio.github}> </Link>
                    <p><a className='underline text-sky-500' href={portfolio.link}target="_blank">Live link</a></p>
                    <p><a className='underline text-sky-500' href={portfolio.github}target="_blank">Repo link</a></p>


                </div>

            </div>
        </div>

    );
};

export default Portfolioitem;