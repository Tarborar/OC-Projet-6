import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Dropdown.scss';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Dropdown({ title, items, className }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <div className={`dropdown-container ${className} ${location.pathname === '/about' ? 'about-dropdown-size' : 'logement-dropdown-size'}`}>
      <h3 onClick={() => setIsOpen(!isOpen)} className='dropdown-container__text'>
        {title}
        {isOpen ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
      </h3>
      {isOpen && (
        <ul className='dropdown-container__dropdown'>
          {items.map((item) => (
            <li className='dropdown-container__dropdown--list'>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;