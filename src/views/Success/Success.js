import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from 'components/Link';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {useSrcImages} from 'hooks/use-src-images'

import Main from 'layouts/Main';
import Container from 'components/Container';

const SuccessPage  = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const { office: {img} }  = useSrcImages()
  return (
    <Main>
      <Box
        sx={{
          width: 1,
          height: 1,
          overflow: 'hidden',
        }}
      >
        <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
          <Box
            display={'flex'}
            flexDirection={{ xs: 'column', md: 'row' }}
            position={'relative'}
          >
            <Box
              width={1}
              order={{ xs: 2, md: 1 }}
              display={'flex'}
              alignItems={'center'}
            >
              <Container>
                <Box>
                  <Typography
                    variant="h2"
                    component={'h2'}
                    align={isMd ? 'left' : 'center'}
                    sx={{ fontWeight: 700 }}
                  >Success
                  </Typography>
                  <Typography
                    variant="h6"
                    component="p"
                    color="text.secondary"
                    align={isMd ? 'left' : 'center'}
                  >
                    We just sent you an email to confirm your account.
                    <br/>
                    If you need to reach us immediately, please call{' '}
                    <Link component={'a'} href={'tel:17072668106'} underline="none">(707) 266 - 8106 </Link>
                  </Typography>
                  <Box
                    marginTop={4}
                    display={'flex'}
                    justifyContent={{ xs: 'center', md: 'flex-start' }}
                  >
                    <Button
                      component={Link}
                      variant="contained"
                      color="primary"
                      size="large"
                      to={'/'}
                    >
                      Back home
                    </Button>
                  </Box>
                </Box>
              </Container>
            </Box>
            <Box
              sx={{
                flex: { xs: '0 0 100%', md: '0 0 50%' },
                position: 'relative',
                maxWidth: { xs: '100%', md: '50%' },
                order: { xs: 1, md: 2 },
                minHeight: { xs: 'auto', md: 'calc(100vh - 58px)' },
              }}
            >
              <Box
                sx={{
                  width: { xs: 1, md: '50vw' },
                  height: '100%',
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    sx={{
                      overflow: 'hidden',
                      left: '0%',
                      width: 1,
                      height: 1,
                      position: { xs: 'relative', md: 'absolute' },
                      clipPath: {
                        xs: 'none',
                        md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
                      },
                      shapeOutside: {
                        xs: 'none',
                        md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        height: { xs: 'auto', md: 1 },
                        '& img': {
                          objectFit: 'cover',
                        },
                        '& .lazy-load-image-loaded': {
                          height: 1,
                          width: 1,
                        },
                      }}
                    >
                      <Box
                        component={GatsbyImage}
                        alt="Office lobby with bookshelf and pink velvet chair."
                        effect="blur"
                        image={getImage(img)}
                        height={{ xs: 'auto', md: 1 }}
                        maxHeight={{ xs: 300, md: 1 }}
                        width={1}
                        maxWidth={1}
                        sx={{
                          filter:
                            theme.palette.mode === 'dark'
                              ? 'brightness(0.7)'
                              : 'none',
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Main>
  );
};

export default SuccessPage;
