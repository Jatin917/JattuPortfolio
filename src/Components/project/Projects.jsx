import React from 'react'
import { properties } from '../../constants/data'
import './Project.scss'
import Link from './Link'

const Projects = () => {
  // Show the latest 3 projects (or adjust as needed)
  const latestProjects = properties.slice(0, 3)
  return (
    <div className="project">
      {latestProjects.map((item, idx) => (
        <Link
          key={item.id}
          img={`/${item.imageUrl}`}
          heading={item.title}
          href={item.link}
          className={idx === latestProjects.length - 1 ? 'lastElem' : ''}
        />
      ))}
    </div>
  )
}

export default Projects