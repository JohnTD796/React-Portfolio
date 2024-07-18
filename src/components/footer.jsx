import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import '../footer.css'

const GithubLink = 'https://github.com/JohnTD796'
const LinkedinLink = 'https://www.linkedin.com/in/jdoyle5/'

export default function Footer() {
  return(
    <footer>
      <div className='footerContainer'>
        <a className='footerLinks' href={GithubLink}>
          <p className='footerIcon'>
            <FontAwesomeIcon icon={faGithub} />
          </p>
        </a>
        <a className='footerLinks' href={LinkedinLink}>
          <p className='footerIcon'>
            <FontAwesomeIcon icon={faLinkedin}/>
          </p>
        </a>
        <a className='footerLinks' href={GithubLink}>
          <p className='footerIcon'>
          <FontAwesomeIcon icon={faStackOverflow} />
          </p>
        </a>
      </div>
    </footer>
  )
}