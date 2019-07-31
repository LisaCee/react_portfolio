import React from "react";
import Card from "./Card";
import "../styles/gallery.css";

const Gallery = () => {
    return (
        <div className="gallery">
            <Card image="https://www.lisaceedesign.com/images/movie-time-machine.jpg" />
            <Card image="https://pmcvariety.files.wordpress.com/2016/04/prince-dead1.jpg?w=1000" />
        </div>
    );
};

export default Gallery;
