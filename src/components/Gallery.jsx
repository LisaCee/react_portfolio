import React from "react";
import Card from "./Card";
import "../styles/gallery.css";

import { Container } from 'react-bootstrap';


const Gallery = () => {
    return (
        <Container>
            <div className="gallery">
                <Card image={require("../images/movie-time-machine.jpg")} />
                <Card image={require("../images/book-finder.jpg")} />
                <Card image={require("../images/knowledge-rocket.jpg")} />
                <Card image={require("../images/lambda-notes.jpg")} />
            </div>
        </Container>
    );
};

export default Gallery;
