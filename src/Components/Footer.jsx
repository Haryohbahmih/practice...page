// Footer.js
import React from 'react';
import '../Styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="footer-section">
                    <h3>About</h3>
                    <li>Privacy Policy</li>
                    <li>Terms and Conditions</li>
                </div>

                <div className="footer-section">
                    <h3>Help</h3>
                    <li>FAQs</li>
                    <li>Help desk</li>
                    <li>How it works</li>
                </div>

                <div className="footer-section">
                    <h3>Contact</h3>
                    <li>Email: notneeded@gmail.com</li>
                    <li>Phone num: 0000-000-000</li>
                    <li>Whatsapp: 0000-000-000</li>
                    <li>Address: 1099 Main Street, apt 4B San Diego CA, 91900, </li>
                </div>

                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <li><FontAwesomeIcon icon={faFacebook} /></li>
                        <li><FontAwesomeIcon icon={faTwitter} /></li>
                        <li><FontAwesomeIcon icon={faInstagram} /></li>
                    </div>
                </div>
            </div>

            {/* Separate container for the title */}
            <div className="footer-title">
                <p className='title'>Copyright &copy; 2023 harrybie.com. All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;



