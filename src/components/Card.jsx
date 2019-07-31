import React from "react";
import "../styles/card.css";

const Card = props => {
    return (
        <div className="item">
            <img src={props.image} alt="test" />
        </div>

    );
};

export default Card;
