import React from 'react';
import Thanks from 'views/Thanks';

const ThankYouPage = (props) => {
  return <Thanks state={props.location.state} pageProps={props}/>;
};

export default ThankYouPage;
