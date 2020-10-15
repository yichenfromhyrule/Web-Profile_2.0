import React from 'react';
import './Footer.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          I just have no idea why I need this part, but you can send me an email through here. 
        </p>
        <p className='footer-subscription-text'>
          You can also ignore this part.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <button><a href="mailto:yichenfrom2020@gmail.com">Contact Me</a></button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Address</h2>
            <p>3751 Nickel Way,</p>
            <p>Buffalo, NY 14228</p>
            <p>United State</p>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items-2'>
            <h2>Social Media</h2>
            <a href="https://www.instagram.com/jambako_o/?hl=en" rel="noopener noreferrer" target="_blank">Instagram</a>
            <a href="https://www.linkedin.com/in/yichen19951211/" rel="noopener noreferrer" target="_blank">LinkedIn</a>
            <a href="https://github.com/yichenfromhyrule" rel="noopener noreferrer" target="_blank">GitHub</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              YICHEN
              <div class="divider"></div>
              <i class='fab fa-fort-awesome-alt' />
            </Link>
          </div>
          <small class='website-rights'>yichen © 2020</small>
          <div class='social-icons'>
            <a
              class='social-icon-link instagram'
              href="https://www.instagram.com/jambako_o/?hl=en"
              rel="noopener noreferrer"
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link twitter'
              href="https://www.linkedin.com/in/yichen19951211/"
              rel="noopener noreferrer"
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
            <a
              class='social-icon-link facebook'
              href="https://github.com/yichenfromhyrule"
              rel="noopener noreferrer"
              target='_blank'
              aria-label='Facebook'
            >
              <i class="fab fa-github" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;