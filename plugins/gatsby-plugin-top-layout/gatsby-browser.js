import React from 'react';
import './main.css'
import TopLayout from './TopLayout';

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>;
};
