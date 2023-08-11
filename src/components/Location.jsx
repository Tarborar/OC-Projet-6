import React from 'react';
import '../styles/Location.scss';

function Location({ location }) {
    return (
        <div>
            <p className='location-text'>{location}</p>
        </div>
    );
}

export default Location;