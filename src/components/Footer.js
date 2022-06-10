import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'> 
            <a href="https://www.linkedin.com/in/lily-mingthaisong-0867a9154"><InstagramIcon /></a>
            <a href="https://www.linkedin.com/in/lily-mingthaisong-0867a9154"><TwitterIcon /></a>
            <a href="https://www.linkedin.com/in/lily-mingthaisong-0867a9154"><FacebookIcon /></a>
            <a href="https://www.linkedin.com/in/lily-mingthaisong-0867a9154"><LinkedInIcon /></a>
        </div>
        <p> &copy; 2022 Lilyy12.co.uk</p>
    </div>
  )
}

export default Footer