import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img src={image.img} alt={image.title} />
            <div className="carousel-caption">
              <h3>{image.title}</h3>
              <h4>{image.subtitle}</h4>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button className="carousel-control" onClick={goToPrevious}>
          <ArrowBackIosIcon />
        </button>
        <button className="carousel-control" onClick={goToNext}>
          <ArrowForwardIosIcon />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
