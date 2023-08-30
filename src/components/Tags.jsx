import React from 'react';
import '../styles/Tags.scss';

function Tags({ tags }) {
    return (
        <div className='tags-container'>
            {tags.map((tag, id)=> (
               <p key={id} className='tags-container__tag'>{tag}</p> 
            ))}
        </div>
    );
}

export default Tags;