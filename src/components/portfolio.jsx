import SocialNetworkImage from '../images/socialNetwork.png'
import StoryRouletteImage from '../images/storyRoulette.png'
import EmployeeTrackerImage from '../images/employeeTracker.png'
import MovieNightImage from '../images/movieNight.png'
import readmeGenerator from '../images/readmeGenerator.png'
import personalBlog from '../images/personalBlog.png'
import PortfolioList from "./portfolioList";
import '../portfolio.css'

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
      title: 'Professional README Generator',
      projectUrl: 'https://github.com/JohnTD796/Professional-README-Generator.git',
      imageUrl: readmeGenerator
    },
    {
      id: 5,
      title: 'Movie Night',
      projectUrl: 'https://github.com/tawatson02/movie-night.git',
      imageUrl: MovieNightImage
    },
    {
      id: 6,
      title: 'Personal Blog',
      projectUrl: 'https://github.com/JohnTD796/Personal-Blog.git',
      imageUrl: personalBlog
    },
    
  ]

  return(
    <div>
      <div className='pageTitleContainer'>
        <h3 className="pageTitle">My Portfolio</h3>
      </div>
      <div className='portfolio-card-container'>
        <PortfolioList portfolioData={portfolioData} />
      </div>
    </div>
  );
}