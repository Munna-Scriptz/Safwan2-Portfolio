import React from 'react'
import Banner from '../components/Banner'
import Blog from '../components/blog'
import MyService from '../components/MyService'
import AboutMe from '../components/AboutMe'
import ReachOut from '../components/ReachOut'
import Projects from '../components/Projects'
import Portfolio from '../components/Portfolio'

const Home = () => {
  return (
    <>
      <Banner/>
      <MyService/>
      <AboutMe/>
      <Projects/>
      <Portfolio/>
      <ReachOut/>
      <Blog/>
    </>
  )
}

export default Home