import React from 'react'
import ArrowImg from '../../assets/images/ArrowImg.png'

const CommonHead = ({text , bottomText ,align}) => {
  return (
    <section className={`flex flex-col gap-[12px] ${align}`}>
        <div className='flex items-center gap-[12px]'>  
            <img src={ArrowImg} alt="Icon" />
            <p className='font-vollkorn font-medium text-[18px] md:w-[170px] w-full text-second'>{text}</p>
        </div>
        <div>
            <h2 className='font-vollkorn font-medium lg:text-[50px] text-[34px] text-primary leading-[60px]'>{bottomText}</h2>
        </div>
    </section>
  )
}

export default CommonHead