import React from 'react'
import ReachImg from '../assets/images/ReachImg.png'
import CommonHead from './Common/CommonHead'
import { Link } from 'react-router'

const ReachOut = () => {
  return (
    <>
        <section id='ReachOut' className='mt-[120px]'>
            <div className="container">
                <div id="AllDiv" className='flex items-center gap-[30px]'>
                    <div id="LeftSide">
                        <img src={ReachImg} alt="Image" />
                    </div>
                    <div id="RightSide">
                        <CommonHead text={'Get In Touch'} bottomText={'Feel Free to Contact'}/>
                        <div className='flex items-center gap-[70px] mt-[40px]'>
                            <input className='w-[300px] h-[40px] outline-none border-b-1 border-[#00413D1A] font-jost' placeholder='Enter Name' type="user" />
                            <input className='w-[300px] h-[40px] outline-none border-b-1 border-[#00413D1A] font-jost' placeholder='Enter Email' type="email" />
                        </div>
                        <div className='flex items-center gap-[70px] mt-[57px]'>
                            <input className='w-[300px] h-[40px] outline-none border-b-1 border-[#00413D1A] font-jost' placeholder='Phone' type="number" />
                            <input className='w-[300px] h-[40px] outline-none border-b-1 border-[#00413D1A] font-jost' placeholder='Subject' type="text" />
                        </div>
                        <div className='flex flex-col items-start gap-[70px] mt-[57px]'>
                            <input className='w-full h-[40px] outline-none border-b-1 border-[#00413D1A] font-jost' placeholder='Message' type="text" />
                            <Link className='bg-[#E5745D] text-white lg:py-[12px] py-[12px] px-[39px] font-jost text-[18px] border-2 border-[#fff] outline-4 outline-[#E5745D]' to={'/'}>Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ReachOut