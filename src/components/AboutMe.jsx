import React from 'react'
import AboutMeImg from '../assets/images/AboutMEImg.png'
import CommonHead from './Common/CommonHead'
import { Link } from 'react-router'
import Skill1 from '../assets/images/Skill85.png'
import Skill2 from '../assets/images/Skill70.png'
import Skill3 from '../assets/images/Skill60.png'
import Skill4 from '../assets/images/Skill40.png'

const AboutMe = () => {
  return (
    <>
        <section id='AboutMe' className='mt-[120px]'>
            <div className="container">
                <div id="AllDiv" className='flex lg:flex-row flex-col items-center justify-between'>
                    <div id="LeftSide">
                        <img src={AboutMeImg} alt="GalleryImg" />
                    </div>
                    <div id="RightSide" className='lg:w-[570px] lg:mt-0 mt-5 w-full'>
                        <CommonHead text={'About Me'} bottomText={'I Enjoy Solving Problems With Scalable Solutions'}/>
                        <p className='text-[16px] text-primary opacity-[0.7]'>Quisruam est, qui dolorem ipsum quia dolor sit amet, consecteaur aeci velit, sed quia non numquam eius modi tempora incidunt lao magnam aliquam quaerat voluptatem reprehenderit.</p>
                        <p className='text-[16px] text-primary opacity-[0.7] mt-[50px] mb-[67px]'>Modi tempora incidunt ut lao magnam aliquam quaerat voluptatem reprehenderit non numquam eius.</p>
                        <Link className='bg-[#E5745D] text-white lg:py-[16px] py-[12px] px-[39px] font-jost text-[18px] border-2 border-[#fff] outline-4 outline-[#E5745D] hover:bg-primary hover:outline-primary hover:rounded-2xl duration-300' to={'/'}>Download Cv</Link>
                    </div>
                </div>
                {/* -------------Skill Meters----------- */}
                <div className='mt-[80px] flex lg:flex-row flex-col lg:gap-0 gap-5 items-center justify-between'>
                    <div className='flex flex-col gap-[24px] items-center'>
                        <img src={Skill2} alt="SkillMeter" />
                        <h2 className='text-[26px] text-primary font-semibold font-vollkorn'>Brand Design</h2>
                    </div>
                    <div className='flex flex-col gap-[24px] items-center'>
                        <img src={Skill1} alt="SkillMeter" />
                        <h2 className='text-[26px] text-primary font-semibold font-vollkorn'>Web Designing</h2>
                    </div>
                    <div className='flex flex-col gap-[24px] items-center'>
                        <img src={Skill3} alt="SkillMeter" />
                        <h2 className='text-[26px] text-primary font-semibold font-vollkorn'>Adobe Photoshop</h2>
                    </div>
                    <div className='flex flex-col gap-[24px] items-center'>
                        <img src={Skill4} alt="SkillMeter" />
                        <h2 className='text-[26px] text-primary font-semibold font-vollkorn'>Web Development</h2>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutMe