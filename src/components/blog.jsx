import React from 'react'
import BlogImg1 from '../assets/images/BlogImg1.png'
import BlogImg2 from '../assets/images/BlogImg2.png'
import BlogImg3 from '../assets/images/BlogImg3.png'
import { Link } from 'react-router'
import { GoArrowRight } from "react-icons/go";
import CommonHead from './Common/CommonHead'

const blog = () => {

    const MyBlog = [
        {
            "username" : 'Brian D william' ,
            "date" : 'March 27,2023' ,
            "details" : 'Dolor repellendus temporibus autem rerum quibusdam officiis debitis nece.' ,
            "image" : BlogImg1 ,
            "title" : 'Personalization and Automation for Better Results' ,
        },
        {
            "username" : 'Eric Widget' ,
            "date" : 'October 19,2023' ,
            "details" : 'Dolor repellendus temporibus autem rerum quibusdam officiis debitis nece.' ,
            "image" : BlogImg2 ,
            "title" : 'Digital Agency Typically has a Team Experts in Areas.' ,
        },
        {
            "username" : 'Thomas R. Toe' ,
            "date" : 'April 16,2023' ,
            "details" : 'Dolor repellendus temporibus autem rerum quibusdam officiis debitis nece.' ,
            "image" : BlogImg3 ,
            "title" : 'Unlocking New Opportunities and Insights' ,
        },
    ]

  return (
    <>
        <section id='Blog' className='mt-[140px]'>
            <div className="container">
                <div id="TextHeader">
                    <CommonHead text={'Latest Blogs'} bottomText={'Blog & Articles'} align={'items-center'}/>
                </div>
                {/* ------------Blog---------- */}
                <div className='flex lg:flex-row flex-col gap-[30px] mt-[53px]'>
                    {
                        MyBlog.map((items , i)=>(
                            <div key={i} className='lg:w-[370px] w-full'>
                                <img src={items.image} alt="Image" />
                                <div className='flex items-center justify-between mt-[20px]'>
                                    <p className='text-second text-[14px] font-jost'>By {items.username}</p>
                                    <p className='text-primary text-[14px] font-jost'>{items.date}</p>
                                </div>
                                <h2 className='text-primary text-[24px] font-vollkorn font-medium mt-[14px]'>{items.title}</h2>
                                <p className='text-primary text-[14px] font-jost mt-[11px] opacity-[0.7]'>By {items.details}</p>
                                <Link className='text-primary text-[24px] font-vollkorn font-medium flex items-center gap-[6px] mt-[24px]' to={'/'}>Read More <GoArrowRight/></Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    </>
  )
}

export default blog