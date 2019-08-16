import React from 'react';
import '../styles/about.css';

import { Container } from 'react-bootstrap';

const About = () => {
  return (
    <div>
      <Container>
        <h1>Hi. I'm Lisa Cee.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget
          convallis nulla, in pulvinar nulla. Suspendisse tincidunt consequat
          ipsum vel pulvinar. Morbi at euismod nisi, quis vestibulum turpis. In
          in volutpat ipsum, sit amet commodo odio. Etiam sed dui ac quam
          porttitor finibus. Duis id vulputate lorem. In pharetra dui vitae
          ipsum consequat, non dictum quam vestibulum. In luctus aliquet nulla,
          in finibus est.
        </p>

        {/* <p>
          I am a full stack developer passionate about creating websites that
          remove barriers to accessing information and make that information
          readily available to everyone. I am experienced with
          HTML/CSS/JavaScript, React, MongoDB, Node and more after completing an
          intensive 13-month mastery-based program at Lambda School.
        </p> */}
        <div>
          <h3>Skills</h3>
          {/* <p>
            Lisa is a valuable member of any team. She has great curiosity and
            the resolve to find solutions. While her focus is in front end
            development, Lisa has a full stack education in order to better
            understand what makes a site work and how she can make it better.
          </p> */}
          <ul className='iconSkills'>
            <li className='fab fa-react'>
              <span className='icon'>React</span>
            </li>
            <li className='fas fa-users'>
              <span className='icon'>Works well solo or with a team</span>
            </li>
            <li className='fas fa-code'>
              <span className='icon'>HTML & CSS</span>
            </li>
            <li className='fab fa-google'>
              <span className='icon'>Excellent Google-fu</span>
            </li>
            <li className='fab fa-js-square'>
              <span className='icon'>JavaScript</span>
            </li>
            <li className='fas fa-music'>
              <span className='icon'>Prince fan</span>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default About;
