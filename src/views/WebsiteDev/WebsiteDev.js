import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';

import {useSrcImages} from 'hooks/use-src-images'

import {
  Customization,
  Download,
  Hero,
  Hub,
  Reviews,
  Strategy,
} from './components';

const WebsiteDev = () => {

  const {palette:{background:{paper}, alternate:{main:mainColor}}, spacing} = useTheme();

  const {
    webDevOne:{img:img1, publicURL},
    webDevTwo:{img:img2},
    officeGals:{img:officeGals} 
  } = useSrcImages()
  return (
    <Main
      title={'Modern web designs for your small business.'}
      description={'Do you need a brand new website or just a makeover?  We develop everything from landing pages to custom web apps, plus everything in between.' }
      image={publicURL}>
      <Box position={'relative'} sx={{ backgroundColor: mainColor, marginTop: -13, paddingTop: 13 }}>
          <Container><Hero img={img1}/></Container>
          <Container paddingY={'0 !important'}><Reviews /></Container>
          <Container><Hub img={officeGals}/></Container>
          <Box component={'svg'} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1" sx={{ width: '100%', marginBottom: spacing(-1) }}><path fill={paper} d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path></Box>
      </Box>
      <Container><Strategy /></Container>
      <Box bgcolor={'alternate.main'} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <Customization img1={img1} img2={img2}/>
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1921 273"
          sx={{
            position: 'absolute',
            width: '100%',
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 1,
            height: '35%',
          }}><polygon fill={paper} points="0,273 1921,273 1921,0 "/>
        </Box>
      </Box>
      <Container>
        <Download />
      </Container>
    </Main>
  );
};
export default WebsiteDev;
