import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import "../styles/Home.css";

function Home() {
  return (
    <div className='home'>
        <div className='about'>
            <h2>It's Lily Portfolio.</h2> 
        <div className='prompt'>
            <p>
                I'm a CS recent graduated with a passion for learning and creating.
            </p>
            <a href="https://www.linkedin.com/in/lily-mingthaisong-0867a9154"><LinkedInIcon /></a>
            <a href="mailto: lily.mingt@gmail.com"><EmailIcon/></a>
            <a href="https://github.com/Lilyy12"><GithubIcon/></a>
        </div>
        </div>
        <div className='skills'>
            {" "}
            <h1> Skills </h1>
            <ol className="list">
                <li className='item'>
                    <h2> Front-End </h2>
                    <span> 
                        ReactJS, Angular, HTML, CSS 
                    </span>
                </li>
                <li className='item'>
                    <h2> Back-End </h2>
                    <span> 
                        NodeJS, Java, MySQL
                    </span>
                </li>
                <li className='item'>
                    <h2> Languages </h2>
                    <span> 
                        JavaScript, Java
                    </span>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default Home