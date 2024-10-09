import '../about.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
import PortfolioPicture from '../assets/images/PortfolioPicture.jpeg'

export default function aboutMe() {
 return (
  <div>
    <div className='pageTitleContainer'>
      <h3 className="pageTitle">About Me</h3>
    </div>
    <div className='imageContainer'>
        <img src={PortfolioPicture} className='portfolioPicture'></img>
        {/* <p className='faIcon'><FontAwesomeIcon icon={faUser} /></p> */}
    </div>
    <div>
      <p className="aboutMeText"> With a bachelor’s in computer information systems, I originally didn’t know what I wanted to do with my degree after I graduated. I had always thought about web development but wasn’t sure if I wanted to jump into it until I took a position as a fulfillment specialist at vox mobile in 2023. This job helped push me over the edge and sign up for a Full Stack Web Development Boot Camp (focused around the MERN stack) because I wanted to see the impact I was having with my work. </p>
      {/* <p className="aboutMeText">Ut at tortor quam. Phasellus eleifend tellus vel justo gravida, in aliquet nulla auctor. Integer tristique urna id velit aliquet, at aliquam eros volutpat. Mauris nec semper nibh. Suspendisse potenti. Curabitur accumsan, nisl quis condimentum bibendum, quam lorem pulvinar ligula, at interdum nulla felis sed massa. Vivamus maximus mi et enim facilisis, vel tristique ligula euismod.Mauris nec semper nibh. Suspendisse potenti. Curabitur accumsan, nisl quis condimentum bibendum, quam lorem pulvinar ligula, at interdum nulla felis sed massa. Vivamus maximus mi et enim facilisis, vel tristique ligula euismod. Proin sodales auctor dui, sed vulputate arcu pulvinar id. In nec est a ligula gravida mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam non augue sit a.Mauris nec semper nibh. Suspendisse potenti. Curabitur accumsan, nisl quis condimentum bibendum, quam lorem pulvinar ligula, at interdum nulla felis sed massa. Vivamus maximus mi et enim facilisis, vel tristique ligula euismod. Proin sodales auctor dui, sed vulputate arcu pulvinar id. In nec est a ligula gravida mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam non augue sit a</p>
      <p className="aboutMeText">Mauris nec semper nibh. Suspendisse potenti. Curabitur accumsan, nisl quis condimentum bibendum, quam lorem pulvinar ligula, at interdum nulla felis sed massa. Vivamus maximus mi et enim facilisis, vel tristique ligula euismod. Proin sodales auctor dui, sed vulputate arcu pulvinar id. In nec est a ligula gravida mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fam. Ut at tortor quam. Phasellus eleifend tellus vel justo gravida, in aliquet nulla auctor. Integer tristique urna id velit aliquet, at aliquam eros volutpat. Mauris nec semper nibh. Suspendisse potenti. Curabitur accumsan, nisl quis condimentum bibendum, quam lorem pulvinar ligula, at interdum nulla felis sed massa. Vivamus maximus mi et enim facilisis, vel tristique ligula euismod.Mauris nec semper nibh. Suspendisse potenti. Curabitur accumsan, nisl quis condimentum bibendum, quam lorem pulvinar ligula, at interdum nulla felis sed massa. Vivamus maximus mi et enim facilisis, vel tristique ligula euismod. Proin sodales auctor dui, sed vulputate arcu pulvinar id. In nec est a ligula gravida mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam non augue sit a.Mauris nec semper nibh. Suspendisse potenti. Curabitur accumsan, nisl quis condimentum bibendum, quam lorem pulvinar ligula, at interdum nulla felis sed massa. Vivamus maximus mi et enim facilisis, vel tristique ligula euismod. Proin sodales auctor dui, sed vulputate arcu pulvinar id. In nec est a ligula gravida mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam non augue sit a</p> */}
    </div>
  </div>
 )
}