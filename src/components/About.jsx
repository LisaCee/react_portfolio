import React from 'react';
import '../styles/about.css';

import { Container } from 'react-bootstrap';

const About = () => {
  return (
    <div>
      <Container>
        <h1>Hi. I'm Lisa Cee.</h1>
        <p>
          I am a full stack developer passionate about creating websites that
          remove barriers to accessing information and make that information
          readily available to everyone. I am experienced with
          HTML/CSS/JavaScript, React, MongoDB, Node and more after completing an
          intensive 13-month mastery-based program at Lambda School.
        </p>
        <div>
          <h3>Skills</h3>
          <p>
            Lisa is a valuable member of any team. She has great curiosity and
            the resolve to find solutions. While her focus is in front end
            development, Lisa has a full stack education in order to better
            understand what makes a site work and how she can make it better.
          </p>
          <ul className='feature-icons'>
            <li className='fab fa-react'>React</li>
            <li className='fas fa-users'>Works well solo or with a team</li>
            <li className='fas fa-code'>HTML & CSS</li>
            <li className='fab fa-google'>Excellent Google-fu</li>
            <li className='fab fa-js-square'>JavaScript</li>
            <li className='fas fa-music'>Prince fan</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default About;
