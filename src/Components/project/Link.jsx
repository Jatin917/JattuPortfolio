import React from 'react'
import {motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react';
import { FiArrowRight } from "react-icons/fi";


const Link = ({heading,img,href}) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const top = useTransform(xSpring, [0.5, -0.5], ["30%", "60%"]);
    const left = useTransform(ySpring, [0.5, -0.5], ["60%", "70%"]);




    const ref = useRef(null);
    function handleMouseMove(e){
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - .2;
    const yPct = mouseY / height - .2;
    
    x.set(xPct);
    y.set(yPct);
    
    
}


  return (
    <motion.a target='__blank' ref={ref} href={href} initial="initial" whileHover="whileHover" className='elem' onMouseMove={handleMouseMove}>
        <h3>
            <motion.span variants={{initial:{x:0}, whileHover:{x:-16} }} transition={{type:"spring",staggerChildren:0.075,delay:1}}>
                {heading.split("").map((l,i)=>(
                            <motion.span variants={{initial:{x:0}, whileHover:{x:16} }} transition={{type:'spring'}} key={i}>{l}</motion.span>
                ))}
            </motion.span>
        </h3>
        <motion.img style={{top,left,translateX:'-50%',translateY:'-50%'}} variants={{initial:{scale:0,rotate:"-15deg"},whileHover:{scale:1,rotate:"15deg"}}} src={img} alt="img" />
        <motion.div variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}>
            <FiArrowRight/>
        </motion.div>
    </motion.a>
  )
}

export default Link