import React, { useEffect, useState } from 'react'
import {animate, motion} from 'framer-motion'
import './Project.scss'
import Link from './Link'

const Projects = () => {
  return (
    <div className="project">
            <Link  img="/google.jpg" heading="Google-Search" href="https://github.com/Jatin917/JattuSearch.git"/>
            <Link img="/public/flimpire-logo-zip-file/svg/logo-color.svg" heading="Flimpire" href="https://jattusflimpire.netlify.app/"/>
            <Link className="lastElem" img="/google.jpg" heading="Coming-Soon"  href="#"/>
    </div>
  )
}

export default Projects