import React from "react";
import Card from "./Card";
import "../styles/gallery.css";

import netlify from '../images/netlify.png';

import { Container, Row, Col } from "react-bootstrap";

const Gallery = () => {
    return (
        <Container>
            {/* <Row>
        <Col> */}
            <div className="gallery">
                <a href="https://movie-time-machine.netlify.com/" target="_">
                    <Card image={require("../images/movie-time-machine.jpg")} />
                </a>
                <div className="details">
                    <i className="fab fa-react" />
                    <i className="fab fa-css3"></i>
                    <i className="fab fa-bootstrap"></i>
                    <i className="fab fa-github"></i>
                    <img src="https://www.themoviedb.org/assets/2/v4/logos/312x276-primary-blue-fb50dee3bf664c866fd216e6cee64af33d20707ea3091ddc65c5e8aa4c152eb2.png" alt="The movie DB" id="moviedb" />
                    <img src={netlify} alt="netlify" id="netlify" />
                </div>

                <a href="https://lisacee-book-finder.netlify.com/" target="_">
                    <Card image={require("../images/book-finder.jpg")} />
                </a>
                <div className="details">
                    <i className="fab fa-react" />
                    <i className="fab fa-css3"></i>
                    <i className="fab fa-bootstrap"></i>
                    <i className="fab fa-google"></i>
                    <i className="fab fa-github"></i>

                    <img src={netlify} alt="netlify" id="netlify" />
                </div>

                <a href="https://infallible-euler-24eb8a.netlify.com/" target="_">
                    <Card image={require("../images/knowledge-rocket.jpg")} />
                </a>
                <div className="details">
                    <i className="fab fa-react" />
                    <i className="fab fa-css3"></i>
                    <i className="fab fa-bootstrap"></i>
                    <i className="fab fa-github"></i>
                    <i className="fab fa-python"></i>
                    <img src={netlify} alt="netlify" id="netlify" />
                </div>

                <a href="https://infallible-euler-24eb8a.netlify.com/">
                    <Card image={require("../images/lambda-notes.jpg")} />
                </a>
                <div className="details">
                    <i className="fab fa-react" />
                    <i className="fab fa-less"></i>
                    <i className="fab fa-bootstrap"></i>
                    <i className="fab fa-github"></i>
                    <i className="fab fa-python"></i>
                    <img src={netlify} alt="netlify" id="netlify" />
                </div>
            </div>
            {/* </Col>
      </Row> */}
        </Container>
    );
};

export default Gallery;
