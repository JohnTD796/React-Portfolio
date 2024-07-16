import React from 'react';
import '../portfolio.css'

export default function PortfolioCard({title, projectUrl, imageUrl}) {
  return (
      <div className="portfolio-card">
        <a className="portfolio-link" href={projectUrl}>
        <h3 className='portfolio-card-title'>{title}</h3>
        <img className="portfolio-card-image" src={imageUrl} alt={title}/>
        </a>
      </div>
  )
}