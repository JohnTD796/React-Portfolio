import '../resume.css'

export default function Resume() {
  return (
    <div>
      <div className='pageTitleContainer'>
        <h3 className="pageTitle">Resume</h3>
      </div>
      <div className='resumeBodyContainer'>
        <div>
          <div className='downloadResume'>Download my Resume:</div>
          <h4 className="resumeTitle">Front-End Proficiencies</h4>
          <ul className='resumeUl'>
            <li className="resumeLi">HTML</li>
            <li className="resumeLi">CSS</li>
            <li className="resumeLi">JavaScript</li>
            <li className="resumeLi">JQuery</li>
            <li className="resumeLi">responsive design</li>
            <li className="resumeLi">React</li>
            <li className="resumeLi">Bootstrap</li>
          </ul>
        </div>
        <div>
          <h4 className="resumeTitle">Back-End Proficiencies</h4>
          <ul className='resumeUl'>
            <li className="resumeLi">API's</li>
            <li className="resumeLi" >Node</li>
            <li className="resumeLi">Express</li>
            <li className="resumeLi">MySQL, Sequelize</li>
            <li className="resumeLi">MongoDB, Mongoose</li>
            <li className="resumeLi">REST</li>
            <li className="resumeLi">GraphQL</li>
          </ul>
        </div>
      </div>
    </div>
  )
}