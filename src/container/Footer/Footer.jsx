import React from 'react';
import { FooterOverlay,Newsletter } from '../../components';
import {FiFacebook ,FiTwitter,FiInstagram } from 'react-icons/fi';
import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>8th Street,New York,USA</p>
        <p className='p__opensans'>+212-344-123</p>
        <p className='p__opensans'>+212-344-123</p>

      </div>
      <div className='app__footer-links_logo'>
        <img src={images.rjjlogo} alt="logo" />
        <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others."</p>
        <img src={images.spoon} alt="spoon" className='spoon__img' style={{marginTop:15}} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />

        </div>
      </div>
      <div className='app__footer-links_work'>
      <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Mon-Fri</p>
        <p className='p__opensans'>8am - 12am</p>
        <p className='p__opensans'>Sat-sun</p>
        <p className='p__opensans'>7am-12am</p>


      </div>

    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2022 Rj. All Rights reserved </p>

    </div>
  </div>
);

export default Footer;
