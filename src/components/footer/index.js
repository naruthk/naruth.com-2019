import React from 'react';

import Social from '../social';

import './style.scss';

const Footer = () => (
  <footer className="bg-dark footer-section">
    <div className="text-center py-5">
      <Social isFooter />
    </div>
    <div className="text-center py-5 px-4">
      <p className="mb-5 text-light">
        &copy; 2019 | Naruth Kongurai
        <br />
        Developed using Gatsby and React. Modified the design originally created
        by{' '}
        <a
          href="https://themefisher.com/best-hugo-themes"
          target="_blank"
          title="Themefisher"
        >
          Themefisher
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
