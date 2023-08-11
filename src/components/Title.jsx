import React from 'react';
import '../styles/Title.scss';

function Title({ title }) {
    return (
        <div>
            <h2 className='logement__title'>{title}</h2>
        </div>
    );
}

export default Title;