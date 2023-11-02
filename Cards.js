import React from "react";
import "./Card.css";
import PropTypes from "prop-types";

export default function Cards(props) {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <img src="./download.jpeg" alt="shoe-img" />
        </div>
        <div className="card-text">
          <div className="card-title">{props.title} </div>
          <div className="card-rating">{props.purchase}</div>
          <div className="card-description">{props.description}</div>
        </div>
      </div>
    </div>
  );
}

// Cards.PropTypes = {
//   title: PropTypes.string,
//   description: PropTypes.string,
// };

Cards.defaultProps = {
  title: "Name of shoe",
  purchase: "price of shoe",
  description: "this is the description of shoe",
};
