import React from 'react';
import './glass.css';
import { FaFacebook, FaInstagram, FaYoutube, FaGoogle, FaTiktok } from 'react-icons/fa';
import SocialMedia from './images/socialmedia.png';

function Links() {
  return (
    <div className="links-main-container">
      <meta name='description' content='Social Media EV Chargers Community'/>
      <div className="links-container">
        <div className="glass-rect">
          <nav className="links-nav-bar">
            <div className="links-nav-brand">
              <span>MEV Chargers Social Media Accounts</span>
            </div>
          </nav>
          <div className="links-main">
            <h2 className="links-main-title">
              Follow us on EV social media!<br />
            </h2>
            <p className="links-main-desc">
              <a href="https://www.instagram.com/mevchargers">
                <FaInstagram width={75} />
                <span>Instagram</span>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100083713912513">
                <FaFacebook width={75} />
                <span>Facebook</span>
              </a>
              <a href="https://goo.gl/maps/5knCB3ppMbToiAXN7">
                <FaGoogle width={75} />
                <span>Google Map Location</span>
              </a>
              <a href='https://www.youtube.com/channel/UCewLNN8tpwUE2vM9Rb7_5qA'>
                <FaYoutube width={75} />
                <span>YouTube</span>
              </a>
              <a href='https://www.tiktok.com/@mevchargers'>
                <FaTiktok width={75} />
                <span>TikTok</span>
              </a>
            </p>
            <button className="links-btn-boost">Home Page</button>
          </div>
          <div className="links-img-wrapper">
            <img src={SocialMedia} alt="Social Media" width={400} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Links;
