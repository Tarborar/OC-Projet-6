import React, { useState } from 'react';
import '../styles/Dropdown.scss';

function Dropdown({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='dropdown-container'>
      <h3 onClick={() => setIsOpen(!isOpen)} className='dropdown-container__text'>{title}</h3>
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