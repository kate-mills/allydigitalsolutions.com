/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import PhoneSkeletonIllustration from 'svg/illustrations/PhoneSkeleton';
import { GatsbyImage, getImage  } from "gatsby-plugin-image";

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TagIcon from '@mui/icons-material/Tag';

const About = ({img}) => {

  const {socialMedia:{about,aboutHeading}} = useTheme()

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
        <Box
          sx={{
            maxWidth: 450,
            position: 'relative',
            marginX: 'auto',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              borderRadius: '2.75rem',
              boxShadow: 1,
              width: '75% !important',
              marginX: 'auto',
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
                  effect="blur"
                  image={getImage(img)}
                  alt="Woman wearing black leather jacket holding flowers above her head."
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
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box>
          <Box marginBottom={2}>
            <Typography
              variant="h4"
              color="text.primary"
              sx={{
                fontWeight: 600,
              }}
            >{aboutHeading}
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="text.secondary">{about}</Typography>
          </Box>
          <Box display="flex" marginTop={1}>
            <Box
              component={Avatar}
              bgcolor={'secondary.main'}
              width={{ xs: 40, sm: 50 }}
              height={{ xs: 40, sm: 50 }}>
              <Box component={TagIcon} alt={'Hash Tag Icon'} sx={{filter: 'brightness(0) invert(1)'}} width={{ xs: 15, md: 20 }}/>
            </Box>
            <Box
              component={Avatar}
              bgcolor={'secondary.main'}
              marginLeft={1}
              width={{ xs: 40, sm: 50 }}
              height={{ xs: 40, sm: 50 }}
            >
              <Box component={AlternateEmailIcon} alt={'Alternate Email Icon'} sx={{ filter: 'brightness(0) invert(1)',}} width={{ xs: 15, md: 20 }}/>
            </Box>
          </Box>
          <Box
            height={1}
            width={1}
            maxHeight={300}
            maxWidth={{ xs: '100%', sm: 400 }}
            marginTop={3}
          >
            <Box
              component={'iframe'}
              title="video"
              width="100%"
              height="100%"
              minHeight={250}
              src="https://www.youtube.com/embed/?listType=playlist&list=PLKkEPyi2HaPQRsjq0fS0Bn_ZBTjW_07iT&fs=0&loop=1&modestbranding=1&playsinline=1"
              frameBorder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              boxShadow={4}
              borderRadius={2}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default About;
