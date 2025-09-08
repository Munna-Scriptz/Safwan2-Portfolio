import React from 'react'
import CommonHead from './Common/CommonHead'
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router';
import Service1 from '../assets/images/Service1.png'
import Service2 from '../assets/images/Service2.png'
import Service3 from '../assets/images/Service3.png'

const MyService = () => {
  return (
    <>
        <section id='My-Service' className='lg:mt-[220px] mt-[120px]'>
            <div className="container">
                <div className='flex items-center justify-center'>
                    <div className='w-[517px] text-center'>
                        <CommonHead text={'MY SERVICES'} bottomText={'Provide Wide Range of Digital Services'} align={'items-center'}/>
                    </div>
                </div>
                {/* -------------Cards------------- */}
                <div id='Cards' className='mt-[30px] flex lg:flex-row flex-col items-center gap-[30px] justify-center'>
                    <div className='lg:w-[410px] w-full bg-white lg:p-[50px] p-[20px] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:duration-[.3s]' data-aos="fade-up">
                        <img src={Service1} alt="Image" />
                        <h2 className='font-vollkorn font-extrabold text-[24px] text-primary mt-[64px]'>Graphic Design</h2>
                        <p className='font-jost font-normal text-base opacity-[0.7] text-primary mt-[16px]'>Facilizes sed odic morbid quiz commodore odic nexus et malasadas fames research and brand strategy system.</p>
                        <Link to={'/'}><GoArrowRight className='text-[30px] text-primary mt-[75px]'/></Link>
                    </div>
                    <div className='lg:w-[410px] w-full bg-white lg:p-[50px] p-[20px] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:duration-[.3s]' data-aos="fade-up">
                        <img src={Service2} alt="Image" />
                        <h2 className='font-vollkorn font-extrabold text-[24px] text-primary mt-[64px]'>Web & Development</h2>
                        <p className='font-jost font-normal text-base opacity-[0.7] text-primary mt-[16px]'>Facilizes sed odic morbid quiz commodore odic nexus et malasadas fames research and brand strategy system.</p>
                        <Link to={'/'}><GoArrowRight className='text-[30px] text-second mt-[75px]'/></Link>
                    </div>
                    <div className='lg:w-[410px] w-full bg-white lg:p-[50px] p-[20px] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:duration-[.3s]' data-aos="fade-up">
                        <img src={Service3} alt="Image" />
                        <h2 className='font-vollkorn font-extrabold text-[24px] text-primary mt-[64px]'>Writing and Marketing</h2>
                        <p className='font-jost font-normal text-base opacity-[0.7] text-primary mt-[16px]'>Facilizes sed odic morbid quiz commodore odic nexus et malasadas fames research and brand strategy system.</p>
                        <Link to={'/'}><GoArrowRight className='text-[30px] text-primary mt-[75px]'/></Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default MyService