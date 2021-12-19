import React from 'react';
import Typed from 'react-typed';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';
import Link from 'components/Link'

import Container from 'components/Container';

const images = [
  {
    group: [
      {
        cover:'https://raw.githubusercontent.com/kate-mills/assets.ally/master/landing-pages/social--white.jpg',
        coverDark:'https://raw.githubusercontent.com/kate-mills/assets.ally/master/landing-pages/social--black.jpg',
      },
      {
        coverDark: 'https://raw.githubusercontent.com/kate-mills/assets.ally/master/landing-pages/web-dev--black.jpg',
        cover: 'https://raw.githubusercontent.com/kate-mills/assets.ally/master/landing-pages/webdev--white.jpg',
      },
    ],
  },
  {
    group: [
      { cover:'https://raw.githubusercontent.com/kate-mills/assets.ally/master/landing-pages/webdev--white.jpg', coverDark:'https://raw.githubusercontent.com/kate-mills/assets.ally/master/landing-pages/web-dev--black.jpg', },
      {
        cover:'https://raw.githubusercontent.com/kate-mills/assets.ally/master/landing-pages/final-index-view--white.jpg',
        coverDark:'https://raw.githubusercontent.com/kate-mills/assets.ally/master/landing-pages/final-index-view--black.jpg',
      },
      {
        cover:'https://raw.githubusercontent.com/kate-mills/assets.ally/master/landing-pages/agency-lookup--white.jpg',
        coverDark: 'https://raw.githubusercontent.com/kate-mills/assets.ally/master/landing-pages/agency-lookup--black.jpg',
      },
    ],
  },
  {
    group: [
      {
        cover:'https://raw.githubusercontent.com/kate-mills/assets.ally/master/landing-pages/mobile-app--light.jpg',
        coverDark:'https://raw.githubusercontent.com/kate-mills/assets.ally/master/landing-pages/social--black.jpg',
      },
      {
        cover:'https://raw.githubusercontent.com/kate-mills/assets.ally/master/landing-pages/newsroom--white.jpg',
        coverDark:'https://raw.githubusercontent.com/kate-mills/assets.ally/master/landing-pages/newsroom--black.jpg',
      },
      {
        coverDark: 'https://raw.githubusercontent.com/kate-mills/assets.ally/master/landing-pages/social--black.jpg',
        cover: 'https://raw.githubusercontent.com/kate-mills/assets.ally/master/landing-pages/social--white.jpg',
      },
      {
        cover: 'https://raw.githubusercontent.com/kate-mills/assets.ally/master/landing-pages/search--white.jpg',
        coverDark: 'https://raw.githubusercontent.com/kate-mills/assets.ally/master/landing-pages/search--black.jpg',
      },
    ],
  },


];

const Hero = () => {
  const theme = useTheme();

  const {ally:{assignYour}} = theme
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom, ${alpha(
          theme.palette.background?.paper,
          0,
        )}, ${alpha(theme.palette.alternate?.main, 1)} 100%)`,
        backgroundRepeat: 'repeat-x',
        position: 'relative',
      }}
    >
      <Box paddingY={{ xs: 0, sm: '4rem', md: '8rem' }}>
        <Container>
          <Box maxWidth={{ xs: 1, sm: '50%' }}>
            <Typography
              variant="h3"
              color="text.primary"
              gutterBottom
              sx={{
                fontWeight: 400,
              }}
            >A modern approach to digital management that<br/>
              <Typography
                color={'primary.seoText'}
                variant={'cursive'}
                component={'span'}
                sx={{
                  background: `linear-gradient(180deg, transparent 90%, ${alpha(theme.palette.secondary?.main, 0.7)} 0%)`,}}>
                    <Typed strings={[
                  ` is discoverable.`,
                  ` elevates engagment.`,
                  ` inspires action.`,
                  ` leads innovation.`,
                  ` motivates movement.`,
                  ` promotes change.`,
                  ` creates conversation.`,
                  ` shapes ideas.`,
                  ` shifts the mood.`,
                  ]}typeSpeed={40} backSpeed={50} loop/></Typography>
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
            >{assignYour}
            </Typography>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', md: 'row' }}
              alignItems={{ xs: 'stretched', md: 'flex-start' }}
              marginTop={4}
            >
              <Button
                component={Link}
                variant="contained"
                color="primary"
                size="large"
                textAlign="center"
                fullWidth={isMd ? false : true}
                to={'/web-development'}
              >
               Web Design & Development
              </Button>
              <Box
                marginTop={{ xs: 2, md: 0 }}
                marginLeft={{ md: 2 }}
                width={{ xs: '100%', md: 'auto' }}
              >
                <Button
                  component={Link}
                  to={'/social-media'}
                  variant="outlined"
                  color="primary"
                  size="large"
                  textAlign="center"
                  fullWidth={isMd ? false : true}
                >Social Media Marketing
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
        <Box
          sx={{
            transform: 'rotate(-20deg)',
            display: { xs: 'none', sm: 'block' },
          }}
        >
          <Box
            display={'flex'}
            width={'50rem'}
            left={'50%'}
            top={0}
            position={'absolute'}
            sx={{ transform: 'translate3d(20%, -50%, 0)' }}
          >
            {images.map((item, i) => (
              <Box key={i} marginTop={{ sm: -(i * 16) }} marginX={1}>
                {item.group.map((g, j) => (
                  <Box
                    key={j}
                    padding={1}
                    bgcolor={'background.paper'}
                    borderRadius={2}
                    boxShadow={3}
                    marginTop={2}
                  >
                    <Box
                      component={LazyLoadImage}
                      effect="blur"
                      src={
                        theme.palette.mode === 'dark' ? g.coverDark : g.cover
                      }
                      height={1}
                      width={1}
                      maxWidth={320}
                    />
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        component={'svg'}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1920 100.1"
        sx={{
          width: '100%',
          marginBottom: theme.spacing(-1),
        }}
      >
        <path
          fill={theme.palette.background?.paper}
          d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
        ></path>
      </Box>
    </Box>
  );
};

export default Hero;
