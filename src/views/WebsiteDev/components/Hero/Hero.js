import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from 'components/Link'
import { GatsbyImage, getImage  } from "gatsby-plugin-image";

const Hero = ({img}) => {
  const {
    breakpoints:{up},
    palette:{secondary:{main:mainColor}}
  } = useTheme() 
  const isMd = useMediaQuery(up('md'), { defaultMatches: true, });

  return (
    <Grid container spacing={4}>
      <Grid item container xs={12} md={6} alignItems={'center'}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={2}>
            <Typography
              variant="h3"
              color="text.primary"
              sx={{ fontWeight: 600 }}>Web development for your
              <Typography
                component={'span'}
                color={'primary.main'}
                variant={'cursive'}
                sx={{ background: `linear-gradient(180deg, transparent 90%, ${alpha(mainColor, 0.70)} 0%)` }}
            >{' business & product.'}</Typography>
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="text.secondary">Whether you need a brand new website or just a makeover, we can turn your vision into reality.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          >
            <Button
              component={Link}
              variant="contained"
              color="primary"
              size="large"
              to={'/contact-page-cover/'}
              fullWidth={isMd ? false : true}>
              Start now
            </Button>
            <Box
              component={Button}
              variant="outlined"
              color="primary"
              size="large"
              marginTop={{ xs: 2, sm: 0 }}
              marginLeft={{ sm: 2 }}
              fullWidth={isMd ? false : true}
            ><Link to={'/contact-sidebar-map/'} color="primary">Contact Sales</Link>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        container
        alignItems={'center'}
        justifyContent={'center'}
        xs={12}
        md={6}
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
        <Box
          component={GatsbyImage}
          height={1}
          width={1}
          image={getImage(img)}
          alt="Web Developer wearing a hat, sitting on steps of an office building with a leather jacket over her shoulder."
          effect="blur"
          boxShadow={3}
          borderRadius={2}
          maxWidth={600}
          sx={{filter: 'brightness(0.9)'}}
        />
      </Grid>
    </Grid>
  );
};
export default Hero;
