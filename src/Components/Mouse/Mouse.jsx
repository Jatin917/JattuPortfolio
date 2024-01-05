import React, { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion';
import './mouse.scss'

const Mouse = () => {
    // let  xPos = useMotionValue(0);
    // let yPos = useMotionValue(0);
    const [pos,setPos] = useState({xPos:0,yPos:0});
    // console.log(xDiff,yDiff);
    // let scaleY = useTransform(()=> yPos.get() - yPos.getPrevious(),[10,10000000],[0.8,1.2], { clamp: true });
    // let scaleX = useTransform(()=> xPos.get() - xPos.getPrevious(),[10,10000000],[0.8,1.2], { clamp: true });
    // console.log(scaleX,scaleY)
    useEffect(()=>{
        function handleMouseMove(e){
            // setPos({xPos:e.clientX,yPos:e.clientY})
            // xPos.set(e.clientX);
            // yPos.set(e.clientY);
            setPos({xPos:e.clientX,yPos:e.clientY})
            // console.log(yPos.get()-yPos.getPrevious())
        }
        window.addEventListener("mousemove",handleMouseMove);
        console.log("mouse chala")
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
          };
    },[])
    console.log(pos.xPos);
    const variants = {
        animate:{
            x:pos.xPos+10,
            y:pos.yPos+10,
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }
        ,
        transition:{
            type:"spring",
            // duration:0.3,
            // delay:1.25,
            stiffness:300,
            damping:30,
        }
    }
    
  return (
    <motion.div 
    variants={variants} animate="animate" 
    // style={{scaleX,scaleY}} 
    className='mouse'>

    </motion.div>
  )
}

export default Mouse