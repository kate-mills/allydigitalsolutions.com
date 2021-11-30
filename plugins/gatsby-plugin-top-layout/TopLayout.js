import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';


import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-lightbox/style.css';
import 'aos/dist/aos.css';

import '../../src/css/index.css'

import Page from '../../src/components/Page';


export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <title>AllyDigital | Build a solid online presence, showcase your brand & inspire action.</title>
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="A modern approach to digital management that showcases your brand elevates engagement and inspires action."/>
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />

        <meta property="og:title" content="Ally Digital Solutions | Build a solid online presence, showcase your brand & inspire action." />
        <meta property="og:description" content="A modern approach to digital management that showcases your brand elevates engagement and inspires action."/>

        <meta property="og:image" content="https://ally-ten.netlify.app/seoimage.jpg"/>

        <meta property="og:url" content="https://ally-ten.netlify.app" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

        {/*<link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />*/}
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
