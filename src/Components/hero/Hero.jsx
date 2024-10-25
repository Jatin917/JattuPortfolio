import React from 'react'
import {motion} from 'framer-motion'
import './Hero.scss'

const textVariants = {
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:2,
            type:"spring",
            staggerChildren:0.3,
            // stiffness:60
        }
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            repeat:Infinity,
            duration:1
        }
    }
}
const sliderVariants = {
    initial:{
        x:0,
    },
    animate:{
        x:"-220%",
        transition:{
            duration:20,
            repeat:Infinity,
            repeatType:"mirror"
            // stiffness:60
        }
    },
}

const Hero = () => {
  return (
    <div className='hero'>
        <div className="wrapper">
            <motion.div variants={textVariants} className="textContainer" initial="initial" animate="animate">
                <motion.h2 variants={textVariants}>Jatin Chandel</motion.h2>
                <motion.h1 variants={textVariants}>Web Developer and Programmer</motion.h1>
                <motion.div variants={textVariants} className="buttons">
                    <motion.button variants={textVariants}>See the Latest Works</motion.button>
                    <motion.button variants={textVariants}>Contact Me</motion.button>
                </motion.div>
                <motion.img variants={textVariants} animate="scrollButton" src="/assets/scroll.png" alt="" />
            </motion.div>
        </div>
        <motion.div variants={sliderVariants} initial="initial" animate="animate" className="slidingTextContainer">
            Programmer WebDeveloper
        </motion.div>
        <motion.div variants={textVariants} initial={{x:500}} animate="animate" className="imageContainer">
            <img src="/assets/hero.png" alt="" />
        </motion.div>
    </div>
  )
}

export default Hero