import React from 'react'
import './Nav.scss'
import {motion} from 'framer-motion'
import gfg from '/gfg.svg'
import Leetcode from '/Leetcode.png'
import twitter from '/twitter.png'
import linkedin from '/linkedin.png'
import github from '/github.png'
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
const logoVariants = {
  initial:{
    y:-20,
    opacity:0
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      type:"spring",
      staggerChildren:0.075
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
                <motion.span variants={variants} >JATIN CHANDEL 😎</motion.span>
            </motion.div>
            <motion.div variants={logoVariants}  initial="initial" animate="animate" className="social">
                <motion.a href="https://leetcode.com/u/Jatin917/" target='_blank'><motion.img variants={logoVariants} src="/LeetCode.png" /></motion.a>
                <motion.a href="https://www.geeksforgeeks.org/user/jkchanoqtv/" target='_blank'><motion.img variants={logoVariants}  src="/gfg.svg"/></motion.a>
                <motion.a href="https://www.linkedin.com/in/jatin-chandel-703a7b1ab?originalSubdomain=in" target='_blank'><motion.img variants={logoVariants}  src="/linkedin.png"/></motion.a>
                <motion.a href="https://x.com/JatinChandel13?s=09" target='_blank'><motion.img variants={logoVariants}  src="/twitter.png"/></motion.a>
                <motion.a href="https://github.com/Jatin917" target='_blank'><motion.img variants={logoVariants}  src="/github.png"/></motion.a>
            </motion.div>
        </div>
    </div>
  )
}

export default Nav