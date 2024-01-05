import React from 'react'
import './Nav.scss'
import {motion} from 'framer-motion'
import facebook from '../../../public/facebook.png'
import instagram from '../../../public/instagram.png'
import twitter from '../../../public/twitter.png'
import linkedin from '../../../public/linkedin.png'
import github from '../../../public/github.png'
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
                <motion.a href=""><motion.img variants={logoVariants} src={facebook}/></motion.a>
                <motion.a href=""><motion.img variants={logoVariants}  src={instagram}/></motion.a>
                <motion.a href=""><motion.img variants={logoVariants}  src={twitter}/></motion.a>
                <motion.a href=""><motion.img variants={logoVariants}  src={linkedin}/></motion.a>
                <motion.a href=""><motion.img variants={logoVariants}  src={github}/></motion.a>
            </motion.div>
        </div>
    </div>
  )
}

export default Nav