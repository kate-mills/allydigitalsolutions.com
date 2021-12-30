import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Contact, Form, Hero, Newsletter } from './components';

import {useSrcImages} from 'hooks/use-src-images'

const ContactPage = () => {
  const theme = useTheme();
  const {office:{publicURL}} = useSrcImages()

  return (<Main title={`Get In Touch`} image={publicURL}>
      <Box
        sx={{
          position: 'relative',
          backgroundColor: theme.palette.alternate.main,
          backgroundImage: `linear-gradient(120deg, ${theme.palette.alternate.dark} 0%, ${theme.palette.background.paper} 100%)`,
          marginTop: -13,
          paddingTop: 13,
        }}
      >
        <Container>
          <Hero />
        </Container>
      </Box>
      <Contact />
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Form />
        </Container>
      </Box>
      {/*<Container>
        <Newsletter />
      </Container>*/}
    </Main>
  );
};

export default ContactPage;
