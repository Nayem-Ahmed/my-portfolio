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
                    <Link to = "">Live link</Link>
                    <Link to = "">Repo link</Link>

                </div>

            </div>
        </div>

    );
};

export default Portfolioitem;