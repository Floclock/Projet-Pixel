import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';


import NewsInput from './NewsInput';
import './footer.scss';


const Footer = () => (
  <div id="footer">
    <p className="footer-newsletter-title">s'abonner à la newsletter</p>
    <NewsInput />
    <p className="footer-social-title">nous suivre :</p>
    <div className="footer-social">
      <FaFacebookF className="social-icon" />
      <FaTwitter className="social-icon" />
      <FaInstagram className="social-icon" />
      <FaYoutube className="social-icon" />
    </div>
  </div>
);


export default Footer;
