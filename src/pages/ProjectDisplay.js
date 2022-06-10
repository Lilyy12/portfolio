import React from 'react';
import { useParams } from 'react-router-dom';
import { projectList } from '../helpers/ProjectList';
import GitHubIcon from '@material-ui/icons/GitHub';
import "../styles/ProjectDisplay.css";
import {Link} from 'react-router-dom';

function ProjectDisplay() {
    const { id } = useParams();
    const project = projectList[id];

  return (
    
    <div className='project'>
        <h1> {project.name} </h1>
        <img src= {project.image} />
        <p><b>Skills: </b> {project.skill}</p>
        <a href={project.link}><GitHubIcon /></a>
        <h2><Link to="/project">Back</Link></h2>
    </div>
  )
}

export default ProjectDisplay