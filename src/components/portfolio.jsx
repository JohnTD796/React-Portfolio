import React from 'react';
import SocialNetworkImage from '../images/SocialNetwork.png'
import StoryRouletteImage from '../images/storyRoulette.png'
import EmployeeTrackerImage from '../images/employeeTracker.png'
import MovieNightImage from '../images/movieNight.png'
import PortfolioList from "./portfolioList";

export default function portfolio() {
  let portfolioData = [
    {
      id: 1,
      title: 'Social Network API',
      projectUrl: 'https://github.com/JohnTD796/Social-Network-API.git',
      imageUrl: SocialNetworkImage
    },
    {
      id: 2,
      title: 'Story Roulette',
      projectUrl: 'https://github.com/deepblueseas/Story-Roulette.git',
      imageUrl: StoryRouletteImage
    },
    {
      id: 3,
      title: 'Employee Tracker',
      projectUrl: 'https://github.com/JohnTD796/Employee-Tracker.git',
      imageUrl: EmployeeTrackerImage
    },
    {
      id: 4,
      title: 'Movie Night',
      projectUrl: 'https://github.com/tawatson02/movie-night.git',
      imageUrl: MovieNightImage
    }
  ]

  return(
    <div>
      <h3>My Portfolio</h3>
      <PortfolioList portfolioData={portfolioData} />
    </div>
  );
};