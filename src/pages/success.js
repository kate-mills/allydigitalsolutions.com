import React from 'react';
import Success from 'views/Success';

const SuccessPage = (props) => {
  return <Success state={props.location.state} pageProps={props}/>;
};

export default SuccessPage;
