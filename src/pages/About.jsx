import React from 'react';
import Dropdown from '../components/Dropdown';
import Banner from '../components/Banner';
import aboutData from '../datas/about.json'; // Remplacez par le chemin correct
import '../styles/About.scss';

function About() {
  return (
    <div className='about-container'>
      <Banner bannerClass="about-banner"/>
      <div className='dropdown-container dropdown-container__about'>
        <Dropdown title="Fiabilité" items={[aboutData.Fiabilité]} className="about-dropdown-size" />
        <Dropdown title="Respect" items={[aboutData.Respect]} className="about-dropdown-size" />
        <Dropdown title="Service" items={[aboutData.Service]} className="about-dropdown-size" />
        <Dropdown title="Sécurité" items={[aboutData.Sécurité]} className="about-dropdown-size" />
      </div>
    </div>
  );
}

export default About;