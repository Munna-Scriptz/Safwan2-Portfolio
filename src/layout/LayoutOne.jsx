import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ResNavbar from '../components/ResNavbar'

const LayoutOne = () => {
  return (
    <>
        <Navbar/>
        <ResNavbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default LayoutOne