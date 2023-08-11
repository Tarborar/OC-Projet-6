import React from 'react';
import Dropdown from '../components/Dropdown';
import Banner from '../components/Banner';
import aboutData from '../datas/about.json'; // Remplacez par le chemin correct
import '../styles/About.scss';

function About() {
  return (
    <div className='about-container'>
        <Banner/>
        <div className='dropdown-container dropdown-container__about'>
            <Dropdown title="Fiabilité" items={[aboutData.Fiabilité]} />
            <Dropdown title="Respect" items={[aboutData.Respect]} />
            <Dropdown title="Service" items={[aboutData.Service]} />
            <Dropdown title="Sécurité" items={[aboutData.Sécurité]} />
      </div>
      
    </div>
  );
}

export default About;