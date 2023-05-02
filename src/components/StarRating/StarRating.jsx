import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StarRating = ({ rating }) => {
  const starArray = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      starArray.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className="faStarChecked faStar"
        />
      );
    } else {
      starArray.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className="faStarUnchecked faStar"
        />
      );
    }
  }
  return <div>{starArray}</div>;
};
