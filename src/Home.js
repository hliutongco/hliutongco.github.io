import React from 'react';

const Home = (props) => {
  return (
    <div id="home" className="header-padding">
      <h1>Welcome!</h1>


      <div>
        <img src="./cat.png" alt="cat"/>
        <ul>
          <li>This is Helen's personal website!</li>
          <li>In early 2018, she moved to New York to learn how to code.</li>
          <li>And then she became a technical coach at the coding bootcamp she studied at.</li>
          <li>Use the navbar links to learn more about her and her work. Thanks for dropping by!</li>
        </ul>
      </div>
    </div>
  )
}

export default Home;
