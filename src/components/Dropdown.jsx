import React, { useState } from 'react';
import '../styles/Dropdown.scss';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Dropdown({ title, items, className }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`dropdown-container ${className}`}>
      <h3 onClick={() => setIsOpen(!isOpen)} className='dropdown-container__text'>
        {title}
        {isOpen ? <FontAwesomeIcon icon={faChevronUp} className='dropdown-container__text--chevronDown'/> : 
        <FontAwesomeIcon icon={faChevronUp} className='dropdown-container__text--chevronUp'/>}
      </h3>
      {isOpen && (
        <ul className='dropdown-container__dropdown'>
          {items.map((item, id) => (
            <li key={id} className='dropdown-container__dropdown--list'>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;