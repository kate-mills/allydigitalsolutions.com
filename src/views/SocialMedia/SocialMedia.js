import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Hero,
  About,
  Payment,
  SocialMediaBreakdown,
  Download,
} from './components';

import {useSrcImages} from 'hooks/use-src-images'


const MobileApp = () => {

  const {
    palette:{
      background:{ paper:bgPaper, default:bgDefault },
      alternate:{ main:altMain },
      primary:{ dark }
    },
    spacing,
  } = useTheme()

  const {
    socialMedia: {publicURL:seoURL},
    socialMediaMobile:{img:socialImg}
  }  = useSrcImages()

  return (
    <Main
      title="Social Media For Your Small Business"
      description="Lead the conversation and inspire action with a solid online presence and engaging online community."
      image={seoURL}>
      <Box
        position={'relative'}
        sx={{
          marginTop: -13,
          paddingTop: 13,
          backgroundColor: altMain,
          backgroundImage: `linear-gradient(120deg, ${bgPaper} 0%, ${altMain} 100%)`,
        }}
      >
        <Container>
          <Hero img={socialImg}/>
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            width: '100%',
            marginBottom: spacing(-1),
          }}
        >
          <path
            fill={bgDefault}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
      <Container>
        <Box
          sx={{
            position: 'relative',
            '&::after': {
              position: 'absolute',
              content: '""',
              width: '60%',
              zIndex: 1,
              top: 0,
              left: 0,
              height: '70%',
              backgroundSize: '18px 18px',
              backgroundImage: `radial-gradient(${alpha(dark, 0.4)} 20%, transparent 20%)`,
              opacity: 0.2,
            },
          }}
        >
          <Box position={'relative'} zIndex={2}>
            <About img={socialImg} />
          </Box>
        </Box>
      </Container>

      <Box bgcolor={'alternate.main'}>
        <Container>
          <Payment />
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            width: '100%',
            marginBottom: spacing(-1),
          }}>
          <path fill={bgDefault} d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
        </Box>
      </Box>
      <Box position={'relative'} bgcolor={'alternate.main'}>
        <Container>
          <SocialMediaBreakdown />
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{ width: '100%', marginBottom: spacing(-1), }}>
          <path fill={bgDefault} d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z" ></path>
        </Box>
      </Box>
      <Divider />

      <Container>
        <Download />
      </Container>
      <Divider />

    </Main>
  );
};

export default MobileApp;
