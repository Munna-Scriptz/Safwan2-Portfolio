import React from 'react'
import CommonHead from './Common/CommonHead'
import { Link } from 'react-router'
import portfolioImg1 from '../assets/images/PortfolioImg1.png'
import portfolioImg2 from '../assets/images/PortfolioImg2.png'
import portfolioImg3 from '../assets/images/PortfolioImg3.png'
import portfolioImg4 from '../assets/images/PortfolioImg4.png'

const Portfolio = () => {
  return (
    <>
        <section id='Portfolio' className='mt-[120px]'>
            <div className="container">
                <div id="TextHeader">
                    <CommonHead text={'My Portfolio'} bottomText={'My Work Example'} align={'items-center'}/>
                    <div id="NavLinks" className='flex items-center justify-center mt-[24px]'>
                        <ul className='flex items-center lg:gap-[30px] gap-3 text-base text-primary font-vollkorn' data-aos="fade-up">
                            <li><Link to={'/'}>All</Link></li>
                            <li><Link to={'/'}>Branding</Link></li>
                            <li><Link to={'/'}>Photography</Link></li>
                            <li><Link to={'/'}>Fashion</Link></li>
                            <li><Link to={'/'}>Product</Link></li>
                        </ul>
                    </div>
                </div>
                {/* ------------Project Cards-------- */}
                <div className='mt-[40px] flex items-center justify-center flex-wrap gap-[30px]'>
                    <div className='relative w-[570px] lg:h-[520px]' data-aos="fade-up">
                        <img src={portfolioImg1} alt="Image" />
                        <div className='absolute bottom-0 left-0 w-full py-[22px] px-[18px] bg-primary text-white'>
                            <h2 className='font-vollkorn font-semibold text-[24px]'>Motion Graphics</h2>
                            <p className='font-jost font-normal text-[16px] opacity-[0.7]'>Website</p>
                        </div>
                    </div>
                    <div className='relative w-[570px] lg:h-[520px]' data-aos="fade-up">
                        <img src={portfolioImg2} alt="Image" />
                        <div className='absolute bottom-0 left-0 w-full py-[22px] px-[18px] bg-primary text-white'>
                            <h2 className='font-vollkorn font-semibold text-[24px]'>Motion Graphics</h2>
                            <p className='font-jost font-normal text-[16px] opacity-[0.7]'>Website</p>
                        </div>
                    </div>
                    <div className='relative w-[570px] lg:h-[520px]' data-aos="fade-up">
                        <img src={portfolioImg3} alt="Image" />
                        <div className='absolute bottom-0 left-0 w-full py-[22px] px-[18px] bg-primary text-white'>
                            <h2 className='font-vollkorn font-semibold text-[24px]'>Motion Graphics</h2>
                            <p className='font-jost font-normal text-[16px] opacity-[0.7]'>Website</p>
                        </div>
                    </div>
                    <div className='relative w-[570px] lg:h-[520px]' data-aos="fade-up">
                        <img src={portfolioImg4} alt="Image" />
                        <div className='absolute bottom-0 left-0 w-full py-[22px] px-[18px] bg-primary text-white'>
                            <h2 className='font-vollkorn font-semibold text-[24px]'>Motion Graphics</h2>
                            <p className='font-jost font-normal text-[16px] opacity-[0.7]'>Website</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Portfolio