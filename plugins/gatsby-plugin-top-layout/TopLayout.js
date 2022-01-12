import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';


import 'react-lazy-load-image-component/src/effects/blur.css';
import {getPinterestBaseCode} from './pinterest'

//import 'slick-carousel/slick/slick.css';
//import 'slick-carousel/slick/slick-theme.css';
//import 'react-image-lightbox/style.css';
import 'aos/dist/aos.css';

import '../../src/css/index.css'

import Page from '../../src/components/Page';


export default function TopLayout(props) {
  console.log(getPinterestBaseCode())
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <meta name="theme-color" content="#ffffff" />

        <meta name="description" content="A modern approach to digital management that transforms businesses into brands through consistent and unique messaging, promoting engagement, and shaping the conversation."/>

        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

        <meta property="og:locale" content="en_US" />

        <meta property="og:type" content="website" />

        <link rel="icon" type="image/png" href="https://allydigitalsolutions.com/icon.png"/>

        <meta property="og:title" content="Ally Digital Solutions"/>

        <meta property="og:description" content="A modern approach to digital management that transforms businesses into brands through consistent and unique messaging, promoting engagement, and shaping the conversation."/>

        <meta property="og:url" content="https://allydigitalsolutions.com" />
        <img height="1" width="1" style="display:none;" alt="" src="https://ct.pinterest.com/v3/?event=init&tid=2612587505909&pd[em]=<hashed_email_address>&noscript=1" />
        {/* end Pinterest Tag */}
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
