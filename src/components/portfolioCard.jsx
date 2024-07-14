import React from 'react';

export default function PortfolioCard({title, projectUrl, imageUrl}) {
  return (
    <div className="portfolio-card">
      <a href={projectUrl}>
      <h3>{title}</h3>
      <img src={imageUrl} alt={title}/>
      </a>
    </div>
  )
}