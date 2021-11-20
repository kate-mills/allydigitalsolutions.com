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

//import seoImage from 'images/seoimage.jpg'


export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <link
          rel="shortcut icon"
          href={'https://raw.githubusercontent.com/kate-mills/10-25-21/landing-page/src/images/icon-square.png'}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>AllyDigital | Build a solid online presence, showcase your brand & inspire action.</title>
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="A modern approach to digital management that showcases your brand elevates engagement and inspires action."
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />

        <meta property="og:image" content="https://ally-ten.netlify.app/seoimage.jpg"/>
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />

        <meta
          property="og:title"
          content="Ally Digital Solutions | Build a solid online presence, showcase your brand & inspire action."
        />
        <meta
          property="og:description"
          content="A modern approach to digital management that showcases your brand elevates engagement and inspires action."
        />
        <meta property="og:url" content="https://allydigitalsolutions.com" />

        <link rel="preconnect" href="https://fonts.gstatic.com" as="font" crossorigin/>
        <link
          as="style"
          rel="stylesheet preload prefetch"
          type="text/css"
          crossorigin="anonymous"
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
        />
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
