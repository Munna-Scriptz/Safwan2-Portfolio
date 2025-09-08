import React from 'react'
import CommonHead from './Common/CommonHead'
import Project1 from '../assets/images/Project1.jpg'
import Project2 from '../assets/images/Project2.png'
import Project3 from '../assets/images/Project3.png'
import { Link } from 'react-router'
import { GoArrowRight } from "react-icons/go";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
        const MyProjects = [
            {
                "username" : 'Brian D william' ,
                "date" : 'March 27,2023' ,
                "details" : 'Dolor repellendus temporibus autem rerum quibusdam officiis debitis nece.' ,
                "image" : Project2 ,
                "title" : 'Personalization and Automation for Better Results' ,
            },
            {
                "username" : 'Eric Widget' ,
                "date" : 'October 19,2023' ,
                "details" : 'Dolor repellendus temporibus autem rerum quibusdam officiis debitis nece.' ,
                "image" : Project3 ,
                "title" : 'Digital Agency Typically has a Team Experts in Areas.' ,
            },
            {
                "username" : 'Thomas R. Toe' ,
                "date" : 'April 16,2023' ,
                "details" : 'Dolor repellendus temporibus autem rerum quibusdam officiis debitis nece.' ,
                "image" : Project1 ,
                "title" : 'Unlocking New Opportunities and Insights' ,
            },
        ]
  return (
    <>
        <section id='Projects' className='mt-[120px]'>
            <div className="container">
                <div id="TextHeader" className='lg:flex lg:flex-row flex-col items-end justify-between'>
                    <CommonHead text={'Recent Projects'} bottomText={'My Recent Projects'}/>
                    <div className='flex items-center gap-[20px]' data-aos="fade-up">
                        <button className=' hover:bg-second hover:text-white duration-[.3s] p-[15px] cursor-pointer'>
                            <FaArrowLeft />
                        </button>
                        <button className=' hover:bg-second hover:text-white duration-[.3s] p-[15px] cursor-pointer'>
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
                {/* -----------Project Cards------------ */}
                <div className='flex lg:flex-row flex-col gap-[30px] lg:mt-[53px] mt-[20px]'>
                    {
                        MyProjects.map((items , i)=>(
                            <div key={i} className='lg:w-[370px] w-full' data-aos="fade-up">
                                <img src={items.image} alt="Image" />
                                <div className='flex items-center justify-between mt-[20px]'>
                                    <p className='text-second text-[14px] font-jost'>By {items.username}</p>
                                    <p className='text-primary text-[14px] font-jost'>{items.date}</p>
                                </div>
                                <h2 className='text-primary text-[24px] font-vollkorn font-medium mt-[14px]'>{items.title}</h2>
                                <p className='text-primary text-[14px] font-jost mt-[11px] opacity-[0.7]'>By {items.details}</p>
                                <Link className='text-primary text-[24px] font-vollkorn font-medium flex items-center gap-[6px] mt-[24px]' to={'/'}>View Case Studies <GoArrowRight/></Link>
                            </div>
                        ))
                    }
                </div>
                {/* -----------View More------------ */}
                <div className='flex items-center justify-center mt-[60px]'>
                    <Link className='bg-[#E5745D] text-white lg:py-[12px] py-[12px] px-[39px] font-jost text-[18px] border-2 border-[#fff] outline-4 outline-[#E5745D] hover:bg-primary hover:outline-primary hover:rounded-2xl duration-300' to={'/'}>Explore More</Link>
                </div>

            </div>
        </section>
    </>
  )
}

export default Projects