/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TagIcon from '@mui/icons-material/Tag';

import PhoneSkeletonIllustration from 'svg/illustrations/PhoneSkeleton';
import { GatsbyImage, getImage  } from "gatsby-plugin-image";


const Hero = ({img}) => {
  const {
    breakpoints,
    socialMedia:{hero},
    palette:{secondary:{main:mainColor}},
  } = useTheme()

  const isMd = useMediaQuery(breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={0}>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={2}>
            <Typography
              variant="h3"
              color="text.primary"
              sx={{ fontWeight: 600, }}
            >Connect and reveal your business's<Typography
                color={'primary.main'}
                component={'span'}
                variant={'cursive'}
                sx={{
                  background: `linear-gradient(180deg, transparent 90%, ${alpha(mainColor, 0.70)} 0%)`
                }}
              >{` unique essence.`}
              </Typography>
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="text.secondary" sx={{fontWeight: 400}}>
              {hero}
              <br />
            </Typography>
          </Box>
          <Box display="flex" marginTop={1}>
            <Box
              component={Avatar}
              bgcolor={'secondary.main'}
              width={{ xs: 40, sm: 50 }}
              height={{ xs: 40, sm: 50 }}>
              <Box component={TagIcon} alt={'Tag Icon'} sx={{ filter: 'brightness(0) invert(1)' }} width={{ xs: 15, md: 20 }}/>
            </Box>
            <Box
              component={Avatar}
              bgcolor={'secondary.main'}
              marginLeft={1}
              width={{ xs: 40, sm: 50 }}
              height={{ xs: 40, sm: 50 }}
            >
              <Box component={AlternateEmailIcon} alt={'Alternate Email Icon'} sx={{ filter: 'brightness(0) invert(1)' }} width={{ xs: 15, md: 20 }}/>
            </Box>
          </Box>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
      >
        <Box
          sx={{
            maxWidth: 450,
            position: 'relative',
            marginX: 'auto',
            perspective: 1500,
            transformStyle: 'preserve-3d',
            perspectiveOrigin: 0,
          }}
        >
          <Box
            sx={{
              position: 'relative',
              borderRadius: '2.75rem',
              boxShadow: 1,
              width: '75% !important',
              marginX: 'auto',
              transform: 'rotateY(-35deg) rotateX(15deg) translateZ(0)',
            }}
          >
            <Box>
              <Box
                position={'relative'}
                zIndex={2}
                maxWidth={1}
                height={'auto'}
                sx={{ verticalAlign: 'middle' }}
              >
                <PhoneSkeletonIllustration />
              </Box>
              <Box
                position={'absolute'}
                top={'2.4%'}
                left={'4%'}
                width={'92.4%'}
                height={'96%'}
                sx={{
                  '& [data-gatsby-image-wrapper]': {
                    height: 1,
                    width: 1,
                  },
                }}
              >
                <Box
                  component={GatsbyImage}
                  loading="eager"
                  image={getImage(img)}
                  alt="Woman wearing black leather jacket holding flowers above her head."
                  effect="blur"
                  placeholder="blurred"
                  layout="constrained"
                  width={1}
                  height={1}
                  sx={{
                    objectFit: 'cover',
                    borderRadius: '2.5rem',
                    filter: 'brightness(0.8)'
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
