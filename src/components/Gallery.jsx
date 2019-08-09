import React from 'react';
import Card from './Card';
import '../styles/gallery.css';

import movieDB from '../images/movieDB.png';

import { Container, Row, Col } from 'react-bootstrap';

const Gallery = () => {
  return (
    <Container>
      <div className='gallery'>
        <Row>
          <Col>
            <a href='https://movie-time-machine.netlify.com/' target='_'>
              <Card image={require('../images/movie-time-machine.jpg')} />
            </a>
            <div className='details'>
              <i className='fab fa-react fa-2x' />
              <i className='fab fa-css3 fa-2x' />
              <i className='fab fa-bootstrap fa-2x' />
              <i className='fab fa-github fa-2x' />
              <img src={movieDB} alt='The movie DB' id='moviedb' />
            </div>

            <a href='https://lisacee-book-finder.netlify.com/' target='_'>
              <Card image={require('../images/book-finder.jpg')} />
            </a>
            <div className='details'>
              <i className='fab fa-react fa-2x' />
              <i className='fab fa-css3 fa-2x' />
              <i className='fab fa-bootstrap fa-2x' />
              <i className='fab fa-google fa-2x' />
              <i className='fab fa-github fa-2x' />
            </div>

            <a href='https://infallible-euler-24eb8a.netlify.com/' target='_'>
              <Card image={require('../images/knowledge-rocket.jpg')} />
            </a>
            <div className='details'>
              <i className='fab fa-react fa-2x' />
              <i className='fab fa-css3 fa-2x' />
              <i className='fab fa-bootstrap fa-2x' />
              <i className='fab fa-github fa-2x' />
              <i className='fab fa-python fa-2x' />
            </div>

            <a href='https://infallible-euler-24eb8a.netlify.com/'>
              <Card image={require('../images/lambda-notes.jpg')} />
            </a>
            <div className='details'>
              <i className='fab fa-react fa-2x' />
              <i className='fab fa-less fa-2x' />
              <i className='fab fa-bootstrap fa-2x' />
              <i className='fab fa-github fa-2x' />
              <i className='fab fa-python fa-2x' />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Gallery;
