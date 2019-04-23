import React, {useState} from 'react';

const threeKings = (
  <div className="portfolio-cards">
    <img src="https://s3.us-east-2.amazonaws.com/misc-helen/threekings.gif" alt="Demo for Three Kings"/>
    <div>
      <ul>
        <li><strong>Libraries</strong>: React, Redux</li>
        <li><strong>Other Tools</strong>: CSS with Sass, React state hook, a whole lot of lifecycle methods, my meager creative writing abilities</li>
        <li><strong>Github Repo</strong>: <a rel="noopener noreferrer" target="_blank" href="https://github.com/hliutongco/three-kings">Click here</a></li>
        <li><strong>Live Demo</strong>: <a rel="noopener noreferrer" target="_blank" href="http://three-kings.herokuapp.com">Click here</a></li>
        <li><strong>Video</strong>: <a rel="noopener noreferrer" target="_blank" href="https://youtu.be/VVC6SQAcM6k">Click here</a></li>
      </ul>
      <p><strong>Three Kings</strong> is an interactive story that takes approximately 15 to 20 minutes to complete. The player can receive multiple endings depending on the choices they make.
      Music and audio clips are triggered during different points in the story.
      Features include a transcript of the story text that you can toggle on and off, as well as the ability to save and load your progress.</p>
    </div>
  </div>
)

const keyboardKaraoke = (
  <div className="portfolio-cards">
    <img src="https://s3.us-east-2.amazonaws.com/misc-helen/keyboard-karaoke.gif" alt="Demo for Keyboard Karaoke"/>
    <div>
      <ul>
        <li><strong>Libraries</strong>: Node.js, Express</li>
        <li><strong>Other Tools</strong>: Javascript, CSS, MongoDB</li>
        <li><strong>Github Repo</strong>: <a rel="noopener noreferrer" target="_blank" href="https://github.com/hliutongco/keyboard-karaoke-frontend">Click here</a></li>
        <li><strong>Live Demo</strong>: <a rel="noopener noreferrer" target="_blank" href="http://keyboard-karaoke.herokuapp.com">Click here</a></li>
        <li><strong>Video</strong>: <a rel="noopener noreferrer" target="_blank" href="https://youtu.be/0GLkBanSJCY">Click here</a></li>
      </ul>
      <p><strong>Keyboard Karaoke</strong> is a typing game where you type the lyrics to a song as the song plays.
      This app uses a Javascript frontend and a simple Node.js/Express/MongoDB backend for video and audio streaming, as well as saving scores.
      Features include high scores for each song and a selection of five songs of varying difficulties.</p>
    </div>
  </div>
)

const statusQuote = (
  <div className="portfolio-cards">
    <img src="https://s3.us-east-2.amazonaws.com/misc-helen/status-quote-example.gif" alt="Demo for Status Quote"/>
    <div>
      <ul>
        <li><strong>Libraries</strong>: React, Redux, Node.js, Express</li>
        <li><strong>Other Tools</strong>: CSS, MongoDB, React state and useEffect hooks, React speech-to-text node package</li>
        <li><strong>Github Repo</strong>: <a rel="noopener noreferrer" target="_blank" href="https://github.com/hliutongco/status-quote-v2-frontend">Click here</a></li>
        <li><strong>Live Demo</strong>: <a rel="noopener noreferrer" target="_blank" href="https://status-quote-v2.firebaseapp.com/">Click here</a></li>
        <li><strong>Video</strong>: <a rel="noopener noreferrer" target="_blank" href="https://youtu.be/ZQ4zOA_05EY">Click here</a></li>
      </ul>
      <p><strong>Status Quote</strong> is a game where players guess famous movie lines. The app plays a series of movie clips, and when each clip pauses, the player says their guess out loud.
      This app uses a simple Node.js/Express/MongoDB backend for video streaming, as well as saving scores.
      Features include a high scores table, the ability to receive hints, and the ability to re-record guesses.</p>
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
        return keyboardKaraoke
      case "statusquote":
        return statusQuote
      default:
        return null
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
