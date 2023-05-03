import logements from "../../data/logements.json";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const Carrousel = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const logement = logements.find((logement) => logement.id === id);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!logement) {
    navigate("/404");
    return null;
  }

  const goToPreviousImage = () => {
    setCurrentImageIndex(
      (currentImageIndex + logement.pictures.length - 1) %
        logement.pictures.length
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % logement.pictures.length);
  };

  const images = logement.pictures.map((picture, index) => (
    <img
      key={index}
      src={picture}
      className={index === currentImageIndex ? "active" : ""}
      alt="carousel"
    />
  ));

  return (
    <div className="carousel-container">
      <div className="carousel-images">{images}</div>
      {logement.pictures.length > 1 && (
        <>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="buttonCarousel previous"
            onClick={goToPreviousImage}
          />

          <FontAwesomeIcon
            icon={faChevronRight}
            className="buttonCarousel next"
            onClick={goToNextImage}
          />
        </>
      )}
      <p className="carouselIndex">
        {currentImageIndex + 1} / {logement.pictures.length}
      </p>
    </div>
  );
};
