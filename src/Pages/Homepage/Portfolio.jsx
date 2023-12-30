// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import Portfolioitem from '../Portfolioitem';


// const Portfolio = () => {
//     const [data, setData] = useState();
//     useEffect(() => {
//         fetch('portfolio.json')
//             .then(res => res.json())
//             .then((json) => setData(json))
//             console.log(data)

//     },[])
 
//     return (
//         <div className='p-4'>
//             <h1 data-aos="fade-up" className='text-center md:text-9xl font-bold text-gray-100 z-0'>PORTFOLIO</h1>
//             <p data-aos="fade-up" className='text-center md:text-4xl font-semibold relative md:-top-20 underline decoration-[#08d665]'>Discover My Latest Works</p>

//             <div className='grid lg:grid-cols-4 md:grid-cols-3 p-4 gap-6'>
//                 {
//                     data?.map(portfolio => <Portfolioitem key={portfolio.id} portfolio={portfolio}></Portfolioitem>)

//                 }
//             </div>
//         </div>
//     );
// };

// export default Portfolio;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Portfolioitem from '../Portfolioitem';

const Portfolio = () => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch('/portfolio.json')
            .then(res => res.json())
            .then((json) => {
                setData(json);
                console.log(json);  // Log the data after it has been set
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

    }, []);

    return (
        <div className='p-4'>
            <h1 data-aos="fade-up" className='text-center md:text-9xl font-bold text-gray-100 z-0'>PORTFOLIO</h1>
            <p data-aos="fade-up" className='text-center md:text-4xl font-semibold relative md:-top-20 underline decoration-[#08d665]'>Discover My Latest Works</p>

            <div className='grid lg:grid-cols-4 md:grid-cols-3 p-4 gap-6'>
                {
                    data?.map(portfolio => <Portfolioitem key={portfolio.id} portfolio={portfolio}></Portfolioitem>)
                }
            </div>
        </div>
    );
};

export default Portfolio;
