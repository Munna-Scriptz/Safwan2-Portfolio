import React from 'react'
import FooterLogo from '../assets/images/FooterLogo.png'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router';

const Footer = () => {
  return (
    <>
        <footer className='mt-[90px] pt-[80px] bg-primary'>
            <div className="container">
                <div id="FooterRow" className='flex flex-col items-center justify-center gap-[60px]'>
                    {/* --------First Column--------   */}
                    <Link to={'/'}>
                        <img src={FooterLogo} alt="Logo" />
                    </Link>
                    <div className='text-[#fff] lg:text-[18px] text-sm font-jost font-medium flex lg:gap-[18px] gap-[8px]'>
                        <Link to={'/'}>Features</Link>
                        <span className='bg-[#ffffff34] w-[1px] h-[26px]'></span>
                        <Link to={'/'}>Pricing</Link>
                        <span className='bg-[#ffffff34] w-[1px] h-[26px]'></span>
                        <Link to={'/'}>Case studies</Link>
                        <span className='bg-[#ffffff34] w-[1px] h-[26px]'></span>
                        <Link to={'/'}>Reviews</Link>
                        <span className='bg-[#ffffff34] w-[1px] h-[26px]'></span>
                        <Link to={'/'}>Updates</Link>
                    </div>
                    <div className='flex items-center gap-[24px]'>
                            <div className='p-[13px] bg-second text-[34px] rounded-full duration-[.3s] cursor-pointer text-white hover:bg-white hover:text-primary'>
                                <FaFacebookF/>
                            </div>
                            <div className='p-[13px] bg-second text-[34px] rounded-full duration-[.3s] cursor-pointer text-white hover:bg-white hover:text-primary'>
                                <FaTwitter/>
                            </div>
                            <div className='p-[13px] bg-second text-[34px] rounded-full duration-[.3s] cursor-pointer text-white hover:bg-white hover:text-primary'>
                                <RiInstagramFill />
                            </div>
                        </div>
                    {/* --------second Column--------   */}
                    <div>
                    </div>
                </div>
            </div>
            <div className=' border-t-1 border-[#ffffff41] flex items-center justify-center'>
                <h2 className='text-white opacity-[0.7] font-jost my-[30px] text-sm'>Copyright © 2023 Design By Estiak. All rights reserved.</h2>
            </div>
        </footer>
    </>
  )
}

export default Footer