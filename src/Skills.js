import React from 'react';

const Skills = (props) => {
  return (
    <div id="skills" className="header-padding">
      <h1>Helen's Skills</h1>


      <div>
        <img src="https://s3.us-east-2.amazonaws.com/misc-helen/expertise.png" alt="helen's skills"/>
        <ul>
          <li>This chart depicts Helen's skills and her level of mastery over each.</li>
          <li>The x-axis denotes how much expertise she has in each topic.</li>
          <li>This page was most recently updated on March 2019.</li>
        </ul>
      </div>
    </div>
  )
}

export default Skills;
