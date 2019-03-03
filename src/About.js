import React, {useState} from 'react';

const seventeen = (
  <div className="about-cards">
      <img src="https://s3.us-east-2.amazonaws.com/misc-helen/future.png" alt="Error showing that the future is undefined"/>
      <h3>Future is undefined</h3>
      <p>
      In 2017, Helen decided to switch careers. After several years working in digital marketing in Chicago, she felt it was time for some momentous change in her life.
      </p>
      <p>
      Unfortunately, she was clueless as to which career she should switch to. She dabbled in freelance writing for a bit but felt that her chances of earning a living wage were slim.
      There was International Affairs, which she majored in during college, but she never honestly knew what to do with that degree.
      </p>
      <p>
      It was a year of feeling adrift. She received her first solid clue at debugging this error in the autumn, when her father encouraged her to try coding.
      She had never envisioned herself as a coder, but past experiences had taught her that the best things in life were often unplanned. With little to lose, she asked herself, why not?
      </p>
  </div>
)

const eighteen = (
  <div className="about-cards">
      <img src="https://s3.us-east-2.amazonaws.com/misc-helen/impostersyndrome.png" alt="Error showing that confidence doesn't come from imposter syndrome"/>
      <h3>Imposter syndrome</h3>
      <p>In 2018, Helen started to code. She attended Flatiron, a bootcamp in Manhattan, and after graduating, she was fortunate enough to be chosen as a technical coach for the Brooklyn campus.</p>
      <p>As a student, she had often heard of imposter syndrome—the feeling that one has not truly earned their position or title. But at the time, she felt that it was perfectly natural to feel like a novice. Why guilt yourself over it?</p>
      <p>However, as a technical coach, she began to feel it: a creeping insecurity, one that seemed to grow with each of her students' confounding queries or unresolved errors. When panicked, she reminded herself that it was impossible to know everything. The only thing she could do was try her best.</p>
  </div>
)

const nineteen = (
  <div className="about-cards">
      <img src="https://s3.us-east-2.amazonaws.com/misc-helen/interviewanswer.png" alt="Error showing that good interview answer can't be found"/>
      <h3>Job interviews</h3>
      <p>In 2019, Helen wrapped up her time as a technical coach at Flatiron and began to prepare for the job search ahead. She approached this new venture with some trepidation. After all, she had no computer science background nor any experience with technical interviews.</p>
      <p>She imagined there would be times when she would feel completely lost, perhaps even foolish. She knew she wouldn't have answers to all the questions thrown her way.</p>
      <p>Even so, it wouldn't be the first time she received this error. She would tackle it the same she had in the past: by picking herself up, learning what she could from the experience, and trying again.</p>
  </div>
)


const About = (props) => {
  const [displayYear, changeYear] = useState(null)

  const handleClick = (year) => {
    changeYear(year);
  }

  const handleDisplayYear = () => {
    switch (displayYear) {
      case "2017":
        return seventeen
      case "2018":
        return eighteen
      case "2019":
        return nineteen
      default:
        return ""
    }
  }

  return (
    <div id="about" className="header-padding">
      <h1>About Helen</h1>
      <h2>(a.k.a. The Error Log)</h2>

      <div>
        <p>This document provides context to some common errors Helen encountered from 2017 onwards and the life lessons learned from each. This is by no means an exhaustive list. Please click on a year to see the error most commonly associated with that year.</p>

        <div className="menu-buttons">
          <span className={displayYear === "2017" ? "active-button" : ""} onClick={() => handleClick("2017")}>2017</span>
          <span className={displayYear === "2018" ? "active-button" : ""} onClick={() => handleClick("2018")}>2018</span>
          <span className={displayYear === "2019" ? "active-button" : ""} onClick={() => handleClick("2019")}>2019</span>
        </div>

        {handleDisplayYear()}

      </div>
    </div>
  )
}

export default About;
