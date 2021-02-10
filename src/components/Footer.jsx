import React from 'react';
import APILogo from '../nyt_api_logo.png';

function Footer() {
  return (
    <footer>
      <a href='https://developer.nytimes.com'>
        <img
          src={APILogo}
          className='api-logo'
          alt='Data provided by The New York Times'
        />
      </a>
    </footer>
  );
}

export default Footer;
