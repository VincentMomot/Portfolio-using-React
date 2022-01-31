import React from 'react';

function home() {
  return (<div>
    <body>
        <content>
          <aside className="bio">
            <div id="Vince-border"><img id="Vince" src="Assets/Vincent.png" alt="This is My Profile Picture" /></div>
            <h2>Biography:</h2>
            <br />
            <p>I graduated from Iowa State University in 2020 with a degree in Aerospace Engineering and a minor in Business. In 2021 
              I moved to Atlanta to take classes at Georgia Tech and become a software developer. This site is to showcase my work.
            </p>
            <p>While on this site you can see some of the games and projects I created, view my resume, and send me a message.
              <br />I look forward to hearing from you!
            </p>
            <img src="Assets/Iowa.png" alt="Iowa State Logo" className="GTISU" id="ISU" />
            <img src="Assets/GATech.png" alt="GA Tech Icon" className="GTISU" />
          </aside>
        </content>
        <footer>
          <div id="contactinfo"> 
            <br />
            <h3><u>My Contact Information:</u></h3>
            <br />
            <p id="email">
              email: <a href="mailto:vincemomot@gmail.com">vincemomot@gmail.com</a>
              <br /><br />
              Phone: (563) 564-6126
            </p>   
            <a id="linkedin" href="https://www.linkedin.com/in/vincent-d-momot/">
              <img src="Assets/Linkedin.png" alt="My LinkedIn Account" />
            </a>
            <a id="github" href="https://github.com/VincentMomot">
            <img alt="My GitHub Account" src="Assets/GitHub.png" />
            </a>
          </div>          
        </footer>    
        </body>  
  </div>);
}

export default home;
// rfce to create elements to be exported