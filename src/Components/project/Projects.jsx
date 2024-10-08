import React, { useEffect, useState } from 'react'
import {animate, motion} from 'framer-motion'
import './Project.scss'
import Link from './Link'

const Projects = () => {
  return (
    <div className="project">
            <Link  img="/public/hostelManagement.png" heading="jattuHostel" href="https://jattuhostelmanagement.netlify.app/"/>
            <Link img="/flimpire.png" heading="Flimpire" href="https://jattusflimpire.netlify.app/"/>
            <Link className="lastElem" img="/ecommerce.png" heading="eCommerce"  href="https://jattusecommerce.netlify.app/"/>
    </div>
  )
}

export default Projects