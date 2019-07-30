import React from "react";
import Card from "./Card";
import "../styles/gallery.css";

const Gallery = () => {
    return (
        <div className="gallery">
            <Card image="https://cdn.cnn.com/cnnnext/dam/assets/160217090722-prince-passport-photo-super-169.jpg" />
            <Card image="https://pmcvariety.files.wordpress.com/2016/04/prince-dead1.jpg?w=1000" />
        </div>
    );
};

export default Gallery;
