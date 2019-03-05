import React, {useState} from 'react';

const threeKings = (
  <div className="portfolio-cards">
    <img src="https://s3.us-east-2.amazonaws.com/misc-helen/threekings.gif" alt="Demo for Three Kings"/>
    <div>
      <ul>
        <li><strong>Libraries</strong>: React, Redux</li>
        <li><strong>Other Tools</strong>: CSS with Sass, React State Hook, AWS S3 (for file storage), a whole lot of lifecycle methods, my meager creative writing abilities</li>
        <li><strong>Github Repo</strong>: <a rel="noopener noreferrer" target="_blank" href="https://github.com/hliutongco/three-kings">Click here</a></li>
        <li><strong>Live Demo</strong>: <a rel="noopener noreferrer" target="_blank" href="http://three-kings.herokuapp.com">Click here</a></li>
      </ul>
      <p><strong>Three Kings</strong> is an interactive story that takes approximately 15 to 20 minutes to complete. The player can receive multiple endings depending on the choices they make.
      Music and audio clips are triggered during different points in the story.
      Features include a transcript of the story text that you can toggle on and off, as well as the ability to save and load your progress.</p>
    </div>
  </div>
)


const Portfolio = (props) => {
  const [displayProject, changeProject] = useState(null)

  const handleClick = (name) => {
    changeProject(name);
  }

  const handleDisplayProject = () => {
    switch (displayProject) {
      case "threekings":
        return threeKings
      case "keyboardkaraoke":
        return ""
      case "statusquote":
        return ""
      default:
        return ""
    }
  }

  return (
    <div id="portfolio" className="header-padding">
      <h1>Portfolio</h1>

      <div>
        <p>Helen worked on these projects mostly in her free time. Click on one of the names below to see a detailed view.</p>

        <div className="menu-buttons">
          <span className={displayProject === "threekings" ? "active-button" : ""} onClick={() => handleClick("threekings")}>Three Kings</span>
          <span className={displayProject === "keyboardkaraoke" ? "active-button" : ""} onClick={() => handleClick("keyboardkaraoke")}>Keyboard Karaoke</span>
          <span className={displayProject === "statusquote" ? "active-button" : ""} onClick={() => handleClick("statusquote")}>Status Quote</span>
        </div>

        {handleDisplayProject()}

      </div>
    </div>
  )
}

export default Portfolio;
