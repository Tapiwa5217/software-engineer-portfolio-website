import React from 'react'
import heroImg from '../images/hero-image.png'
import TechStack from './TechStack'


function AboutMeSection() {
  return (
    <>
    <div id='about-me' className='about-me-section'>
        <h1>About Me</h1>
     <div className='about-me-content'>
     <div className='about-me-img-section'>
        <img src={heroImg} />
     </div> 
     <div className='about-me-text-section'>
        <h2>Hi! I'm Tapiwa Musinga, a dedicated Computer Science student in my sophomore year at Alabama A&M University.</h2>
        <p>I am passionate about building software solutions and leveraging business insights to address real-world challenges in our evolving world. My academic journey has provided me with strong programming and communication skills, while my hands-on experience in game development and business hackathons has sharpened my problem-solving abilities. I have proficiency in web development, C++ programming, and Python programming. In my free time, I enjoy watching motorsport racing, investing in the stock market, and watching documentaries.</p>      
     </div> 
     </div>     
     
    </div>
    <TechStack />
    </>
  )
}

export default AboutMeSection
