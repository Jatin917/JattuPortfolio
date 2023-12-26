import React from 'react'
import {motion} from 'framer-motion'

const arr = [
    'Homepage',
    'Portfolio',
    'Contact Me',
    'About Me'
]
const variants = {
    open:{
        transition:{
            staggerChildren:.1
        },
    },
    closed:{
        transition:{
            staggerChildren:.05,
            staggerDirection:-1
        }
    }
}
const itemVariants = {
    open:{
        y:0,
        opacity:1
    },
    closed:{
        y:50,
        opacity:0,
    }
}

const Links = () => {
  return (
    <motion.div variants={variants} className='links'>
        {arr.map((item)=>{
            return(
                <motion.a variants={itemVariants} href={`#${item.toLowerCase().replace(/ /g,'')}`} whileHover={{scale:1.1}} whileTap={{scale:.95}} key={item}>{item}</motion.a>
            )
        })}
    </motion.div>
  )
}

export default Links