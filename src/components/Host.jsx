import React from 'react';
import '../styles/Host.scss'

function Host({ host }) {
    const fullName = host.name;
    const [firstName, lastName] = fullName.split(' '); //divise le nom pour mettre un retour à la ligne

    return (
        <div className='host-container'>
            <p className='host-container__text'>{firstName} <br /> {lastName}</p>
            <img src={host.picture} alt={host.name} className='host-container__image'/>
        </div>
    );
}

export default Host;