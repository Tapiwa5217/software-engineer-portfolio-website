import React from 'react'

const Card = ({title, image, link}) => {
  return (
    <a href={link} target='_blank'>
    <div className='card'>
      <img className='card-img' src={image}/>
      <h2 className='card-title'>{title}</h2>
    </div>
    </a>
  )
}

export default Card
