import React from "react";
import Card from "./Card";
import "../styles/gallery.css";

import { Container, Row, Col } from "react-bootstrap";

const Gallery = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="gallery">
                        <a href="https://movie-time-machine.netlify.com/" target="_">
                            <Card image={require("../images/movie-time-machine.jpg")} />
                            <div className="details">
                                <p>candy</p>
                            </div>
                        </a>
                        <a href="https://lisacee-book-finder.netlify.com/" target="_">
                            <Card image={require("../images/book-finder.jpg")} />
                        </a>
                        <a href="https://infallible-euler-24eb8a.netlify.com/" target="_">
                            <Card image={require("../images/knowledge-rocket.jpg")} />
                        </a>
                        <a href="https://infallible-euler-24eb8a.netlify.com/">
                            <Card image={require("../images/lambda-notes.jpg")} />
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Gallery;
