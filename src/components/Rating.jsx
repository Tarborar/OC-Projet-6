import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Rating.scss';

function Rating({ rating }) {
    const redStars = rating;
    const grayStars = 5 - redStars;
  
    return (
      <div className='rating-container'>
          {Array.from({ length: redStars }, (_) => (
            <FontAwesomeIcon icon="star" className='rating-container__star rating-container__star--note'/>
          ))}
          {Array.from({ length: grayStars }, (_) => (
            <FontAwesomeIcon icon="star" className='rating-container__star rating-container__star--rest'/>
          ))}
      </div>
    );
  }
  
  export default Rating;