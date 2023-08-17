import React, { useState } from 'react';
import '../styles/Carousel.scss';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="carousel">
            <img className="carousel__image" src={images[currentIndex]} alt={`Image ${currentIndex}`} />
            {images.length > 1 && (
            <button className="carousel__arrow left" onClick={goToPreviousSlide}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            )}
            {images.length > 1 && (
                <div className="carousel__image-number">
                    {currentIndex + 1}/{images.length}
                </div>
            )}
            {images.length > 1 && (
            <button className="carousel__arrow right" onClick={goToNextSlide}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        )}
        </div>
    );
}

export default Carousel;
