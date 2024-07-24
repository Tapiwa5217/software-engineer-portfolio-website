import React from 'react'
import Card from './Card'
import timeZoneAppImg from '../images/project-images/time-zone-app.png';
import toDoListImg from '../images/project-images/to-do-list.png';
import guessingGameImg from '../images/project-images/guessing-game.png';
import greenwoodCityBuilderImg from '../images/project-images/greenwood-city-builder.png';
import spaceTourismImg from '../images/project-images/space-tourism.png';
import imageFilterImg from '../images/project-images/image-filter.jpg';

const Projects = () => {
    const projects = [
        {
            title: 'time zone app',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image: timeZoneAppImg,
            link: 'https://github.com/Tapiwa5217/global-time-app',
            preview: false

        },
        {
            title: 'to-do list',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image: toDoListImg,
            link: 'https://github.com/Tapiwa5217/to-do-app',
            preview: true

        },
        {
            title: 'guessing game',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image: guessingGameImg,
            link: 'https://github.com/Tapiwa5217/javascript-guessing-game',
            preview: true

        },
        {
            title: 'greenwood city builder',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image: greenwoodCityBuilderImg,
            link: 'https://github.com/Tapiwa5217/greenwood-city-builder',
            preview: true

        },
        {
            title: 'space tourism',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image: spaceTourismImg,
            link: 'https://github.com/Tapiwa5217/space-tourism-website-main',
            preview: true

        },
        {
            title: 'image filter',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image: imageFilterImg,
            link: 'https://github.com/Tapiwa5217/image-filter',
            preview: true

        }
    ]

  return (
    <div className='projects-section' id='projects'>
      <h1>Projects</h1>
      <div className='cards-section'>
        {projects.map((project)=> <Card title={project.title} image={project.image} link={project.link} />)}
      </div>  
    </div>
  )
}

export default Projects
