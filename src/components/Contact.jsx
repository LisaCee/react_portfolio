import React from 'react';
import '../styles/contact.css';

import { Container, Row, Button, Form } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container id='contact'>
      <Form action='https://formspree.io/lisaceedesign@gmail.com' method='POST'>
        <h3>Contact Me</h3>
        <p>
          Whether you wish to work with me or just want to chat about Prince or
          programming, I'd love to hear from you.
        </p>
        <Row>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Name'
            required
          />
        </Row>
        <Row>
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

          <input
            type='text'
            name='subject'
            id='subject'
            placeholder='Subject'
          />

          <textarea
            name='message'
            id='message'
            placeholder='Message'
            rows='6'
          />

          <div className='actions'>
            <Button
              type='submit'
              className='primary submit'
              value='Send Message'
              block
            >
              Submit
            </Button>

            <Button type='reset' value='Reset Form' block>
              Reset
            </Button>
          </div>
        </Row>
      </Form>
    </Container>
  );
};

export default Contact;
