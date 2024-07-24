import React from 'react'
import heroImg from '../images/hero-image.png'

function HeroSection() {
  return (
    <div className='hero-section'>
      <div className='hero-text-section'>
        <div className='role'>
            <p>Software Engineer</p>
        </div>
        <div className='hero-text'>
            <h1 className='hero-header'>Hi! My name is Tapiwa Musinga. I'm an aspiring Software Engineer.</h1>
            <p className='hero-body'>
                I'm a sophmore at Alabama A&M University majoring in computer science and looking to focus on artificial intelligence engineering.
            </p>
            {/*<p className='hero-cta-text'>see more about me!</p>*/}
        </div>
        <div className='hero-cta-btns'>
            <button className='btn porfolio-hero-btn'>Portfolio</button>
            <button className='btn resume-hero-btn'><a href='https://drive.google.com/file/d/1bY-i-bOzQ9n85UXLc5YKNOmX85azZ2LF/view?usp=sharing' target='_blank'>Resume</a></button>
        </div>
      </div>
      <div className='hero-image-section'>
        <img className='hero-img' src={heroImg} alt='hero image'/>
      </div>
    </div>
  )
}

export default HeroSection
