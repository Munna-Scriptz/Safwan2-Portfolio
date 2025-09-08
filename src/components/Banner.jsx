import React from 'react'
import { Link } from 'react-router'
const Banner = () => {
  return (
    <>
        <section id='Banner' className='lg:h-[850px] h-[600px] lg:bg-center bg-left'>
            <div className="container">
                <div className='BannerDiv'>
                    <div id="bannerLeftSide" className='lg:pt-[221px] pt-[100px] lg:ml-[160px]'>
                        <div id="bannerText">
                            <h1 className='text-white font-vollkorn font-bold lg:text-[100px] text-[40px] lg:leading-[110px]'>Hello! <br/> I’m Zarror Nibors</h1>
                            <p className='text-[#FFFFFF80] lg:w-[834px] font-jost font-normal lg:text-[20px] text-base mb-[80px] mt-[14px]'>I’am freelance <span>UI/UX Designer</span> based in Indonesia who loves to craft attractive design experiences for the web.</p>
                            <Link className='bg-[#E5745D] text-white lg:py-[18px] py-[9px] px-[39px] font-jost text-[18px] border-2 border-[#fff] outline-4 outline-[#E5745D] hover:bg-primary hover:outline-primary hover:rounded-2xl duration-300' to={'/'}>Contact Me</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner