import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Page from '../../src/components/Page';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-lightbox/style.css';
import 'aos/dist/aos.css';
import 'css/index.css'


export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <link
          rel="shortcut icon"
          href={'https://raw.githubusercontent.com/kate-mills/10-25-21/landing-page/src/images/icon.png'}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>AllyDigital | Build a solid online presence & showcase your brand.</title>
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="We help businesses establish a solid online presence, showcase their brand, and build an online community."
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://assets.maccarianagency.com/screenshots/the-front/social.png"
        />
        <meta
          property="og:title"
          content="theFront | UI Kit by Maccarian Agency."
        />
        <meta
          property="og:description"
          content="A modern design system for your new landing and web pages."
        />
        <meta
          property="og:url"
          content="https://thefront.maccarianagency.com/"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
      </Helmet>
      <Page>
        {props.children}
      </Page>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
