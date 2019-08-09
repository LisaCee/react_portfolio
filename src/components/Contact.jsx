import React from 'react';
import '../styles/contact.css';

import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container>
      <h3>Contact Me</h3>
      <p>
        Whether you wish to work with me or just want to chat about Prince or
        programming, I'd love to hear from you.
      </p>
      <form action='https://formspree.io/lisaceedesign@gmail.com' method='POST'>
        <Row>
          <Col xs md={6}>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Name'
              required
            />
          </Col>
          <Col xs md={6}>
            <input
              type='hidden'
              name='_next'
              value='http://127.0.0.1:5500/index.html'
            />
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Email'
              required
            />
          </Col>
          <Col>
            <input
              type='text'
              name='subject'
              id='subject'
              placeholder='Subject'
            />
          </Col>
          <Col>
            <textarea
              name='message'
              id='message'
              placeholder='Message'
              rows='6'
            />
          </Col>
          <Col>
            <ul class='actions'>
              <li>
                <input
                  type='submit'
                  class='primary submit'
                  value='Send Message'
                />
              </li>
              <li>
                <input type='reset' value='Reset Form' />
              </li>
            </ul>
          </Col>
        </Row>
      </form>
    </Container>
  );
};

export default Contact;
