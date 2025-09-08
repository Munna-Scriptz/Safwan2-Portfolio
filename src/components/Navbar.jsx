import React from 'react'
import Logo from '../assets/images/logo.png'
import { Link } from 'react-router'
import { FiSearch } from "react-icons/fi";
import { HiMiniBars3BottomRight } from "react-icons/hi2";

const Navbar = () => {
  return (
    <>
        <nav className='py-[37px] border-[1px] border-[#D3DCD4] hidden lg:block'>
            <div className="container">
                <div id="NavRow" className='flex items-center justify-between'>
                    {/* ------Nav Img----- */}
                    <Link to={'/'}><img src={Logo} alt="Logo" /></Link>

                    {/* ------Nav Links----- */}
                    <div>
                        <ul className='flex items-center gap-[88px] font-jost text-[18px] font-normal text-primary'>
                            <li><Link className=' hover:text-[#E5745D] duration-[.3s]' to={'/'}>Home</Link></li>
                            <li><Link className=' hover:text-[#E5745D] duration-[.3s]' to={'/'}>Pages</Link></li>
                            <li><Link className=' hover:text-[#E5745D] duration-[.3s]' to={'/'}>Services</Link></li>
                            <li><Link className=' hover:text-[#E5745D] duration-[.3s]' to={'/'}>Blog</Link></li>
                            <li><Link className=' hover:text-[#E5745D] duration-[.3s]' to={'/'}>Contact</Link></li>
                        </ul>
                    </div>
                    {/* ------Nav Buttons----- */}
                    <div>
                        <Link className='bg-[#E5745D] text-white lg:py-[14px] py-[12px] px-[39px] font-jost text-[18px] border-2 border-[#fff] outline-4 outline-[#E5745D] hover:bg-primary hover:outline-primary hover:rounded-2xl duration-300' to={'/'}>Download Cv</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar