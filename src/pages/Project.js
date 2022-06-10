import React from 'react'
import ProjectItem from '../components/ProjectItem'
import "../styles/Project.css";
import { projectList } from "../helpers/ProjectList"

function Project() {
  return (
    <div className='projects'>
    <h1>My Personal Project</h1>
    <div className='projectList'>
      {projectList.map((project, idx) => {
        return <ProjectItem id={idx} name={project.name} image={project.image}/>
      })}
    </div>
    </div>
  )
}

export default Project