import React, { useState } from 'react';
import '../styles/Carousel.scss';

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
            <button className="carousel__arrow left" onClick={goToPreviousSlide}>
                &#8249;
            </button>
            <img className="carousel__image" src={images[currentIndex]} alt={`Image ${currentIndex}`} />
            <button className="carousel__arrow right" onClick={goToNextSlide}>
                &#8250;
            </button>
        </div>
    );
}

export default Carousel;
