import React from 'react'
import { Link } from 'react-router'
const Banner = () => {
  return (
    <>
        <section id='Banner' className='h-[850px]'>
            <div className="container">
                <div className='BannerDiv'>
                    <div id="bannerLeftSide" className='pt-[221px] ml-[160px]'>
                        <div id="bannerText">
                            <h1 className='text-white font-vollkorn font-bold text-[100px] leading-[110px]'>Hello! <br/> I’m Zarror Nibors</h1>
                            <p className='text-[#FFFFFF80] w-[834px] font-jost font-normal text-[20px] mb-[80px] mt-[14px]'>I’am freelance <span>UI/UX Designer</span> based in Indonesia who loves to craft attractive design experiences for the web.</p>
                            <Link className='bg-[#E5745D] text-white lg:py-[21px] py-[12px] px-[39px] font-jost text-[18px] border-2 border-[#fff] outline-4 outline-[#E5745D]' to={'/'}>Contact Me</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner