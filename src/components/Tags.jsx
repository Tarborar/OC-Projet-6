import React from 'react';
import '../styles/Tags.scss';

function Tags({ tags }) {
    return (
        <div className='tags-container'>
            {tags.map((tag)=> (
               <p className='tags-container__tag'>{tag}</p> 
            ))}
        </div>
    );
}

export default Tags;