import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Form } from './components';


import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {useSrcImages} from 'hooks/use-src-images'

const ContactPageCover = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const {office}  = useSrcImages()

  const Sidebar = () => (
    <Box
      flex={'1 1 30%'}
      maxWidth={'30%'}
      maxHeight={'100vh'}
      position={'sticky'}
      top={0}
    >
      <Box
        display={'flex'}
        alignItems={'center'}
        height={1}
        width={1}
        sx={{
          '& .lazy-load-image-loaded': {
            height: 1,
            width: 1,
          },
        }}
      >
        <Box
          component={GatsbyImage}
          height={1}
          width={1}
          image={getImage(office.img)}
          alt="Office lobby with bookshelf and pink velvet chair."
          effect="blur"
          sx={{
            objectFit: 'cover',
            '& .lazy-load-image-loaded': {
              height: 1,
            },
          }}
        />
      </Box>
    </Box>
  );
  return (
    <Main image={office.publicURL}>
      <Box position={'relative'} minHeight={'100vh'} display={'flex'} marginTop={-13}>
        {isMd ? <Sidebar /> : null}
        <Box
          flex={{ xs: '1 1 100%', md: '1 1 70%' }}
          maxWidth={{ xs: '100%', md: '70%' }}
          paddingTop={14}
        >
          <Box height={1}>
            <Container>
              <Form />
            </Container>
          </Box>
        </Box>
      </Box>
    </Main>
  );
};

export default ContactPageCover;
