import React from 'react';
import TopLayout from './TopLayout';

import "@fontsource/lato"
import "@fontsource/lato/700.css"

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>;
};
