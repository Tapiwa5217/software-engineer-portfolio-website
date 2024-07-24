import React from 'react'
import htmlIcon from '../images/tech stack/html-144.png'
import cssIcon from '../images/tech stack/css-144.png'
import javascriptIcon from '../images/tech stack/javascript-144.png'
import cIcon from '../images/tech stack/c-144.png'
import pythonIcon from '../images/tech stack/python-144.png'
import reactIcon from '../images/tech stack/react-144.png'
import postgresqlIcon from '../images/tech stack/postgresql-144.png'
import unityIcon from '../images/tech stack/unity-144.png'

function TechStack() {
  return (
    <div className='tech-stack-section'>
      <h1>Tech Stack</h1>
      <div className='tech-stack-grid'>
        <img src={htmlIcon}/>
        <img src={cssIcon}/>
        <img src={javascriptIcon}/>
        <img src={cIcon}/>
        <img src={pythonIcon}/>
        <img src={reactIcon}/>
        <img src={postgresqlIcon}/>
        <img src={unityIcon}/>
      </div>
    </div>
  )
}

export default TechStack
