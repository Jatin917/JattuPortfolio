import React from 'react'
import './Nav.scss'
import {motion} from 'framer-motion'
import facebook from '../../../public/facebook.png'
import instagram from '../../../public/instagram.png'
import dribbble from '../../../public/dribbble.png'
import youtube from '../../../public/youtube.png'
import logo from '../../resources/j-logo-zip-file/png/logo-color.png'
import Sidebar from '../sidebar/Sidebar'
const variants = {
  initial:{
    y:-20,
    opacity:0
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      type:"spring",
      staggerChildren:0.1
    }
  }
}
const Nav = () => {
  return (
    <div className='Navbar'>
        {/* sidebar */}
        <Sidebar/>
        <div className="wrapper">
            <motion.div className="nameDetails" variants={variants} initial="initial" animate="animate">
                <motion.img variants={variants} src={logo} alt="logo" />
                <motion.span variants={variants} className='line'></motion.span>
                <motion.span variants={variants} >JATIN CHANDEL</motion.span>
            </motion.div>
            <div className="social">
                <a href=""><img src={facebook}/></a>
                <a href=""><img src={instagram}/></a>
                <a href=""><img src={dribbble}/></a>
                <a href=""><img src={youtube}/></a>
            </div>
        </div>
    </div>
  )
}

export default Nav