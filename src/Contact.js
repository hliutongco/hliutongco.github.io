import React from 'react';

const Contact = (props) => {
  return (
    <div id="contact" className="header-padding">
      <h1>Contact</h1>

      <div>
        <img src="./helen.png" alt="helen liutongco"/>
        <div>
          <p>Yes, finally, a real picture of Helen. Congratulations on making it this far! Feel free to contact her using any of the following:</p>
          <p><a rel="noopener noreferrer" target="_blank" href="https://github.com/hliutongco">Github</a>
          • <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/liutongcoh/">LinkedIn</a>
          • <a rel="noopener noreferrer" target="_blank" href="https://medium.com/@liutongcoh">Medium</a>
          • <a href="mailto:liutongcoh@gmail.com">Email</a></p>
        </div>
      </div>
    </div>
  )
}

export default Contact;
