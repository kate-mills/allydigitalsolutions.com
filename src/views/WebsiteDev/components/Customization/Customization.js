/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Link from 'components/Link'
import { GatsbyImage, getImage  } from "gatsby-plugin-image";

const Customization = ({img1, img2}) => {
  const {breakpoints:{up}} = useTheme()
  const isMd = useMediaQuery(up('md'),{defaultMatches:true});

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{textTransform:'uppercase',fontWeight:600}}
          gutterBottom
          color={'primary.main'}
          align={'center'}
        >CUSTOMIZATION
        </Typography>
        <Typography
          color={'text.primary'}
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{ fontWeight: 600 }}
        >Customize your website 
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color={'text.secondary'}
          data-aos={'fade-up'}
        >
          We aim to take care of you.
          <br />
          Need help picking colors and fonts, or thinking about adding a scheduling app or blog? 
          <br />
          We'll be there to lend a helping hand.
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          justifyContent={'center'}
          marginTop={2}
        >
          <Button
            component={Link}
            to={'/contact-page-cover/'}
            variant="contained"
            color="primary"
            size="large"
            fullWidth={isMd ? false : true}
          >
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
          >
            <Link to={'/contact-sidebar-map/'}>Contact Sales</Link>
          </Box>
        </Box>
      </Box>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} sm={6} data-aos={'fade-up'}>
          <Grid container alignItems="center">
            <Box
              component={GatsbyImage}
              height={1}
              width={1}
              image={getImage(img2)}
              alt="Web Developer wearing shades, sitting on steps of an office building alongside her purse."
              effect="blur"
              boxShadow={3}
              borderRadius={2}
              maxWidth={600}
              sx={{ filter: 'brightness(0.9)' }}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} data-aos={'fade-up'}>
          <Grid
            container
            alignItems="center"
            sx={{
              marginTop: { xs: 0, md: '40%' },
            }}
          >
            <Box
              component={GatsbyImage}
              height={1}
              width={1}
              image={getImage(img1)}
              alt="Web Developer wearing a hat, sitting on steps of an office building with a leather jacket over her shoulder."
              effect="blur"
              boxShadow={3}
              borderRadius={2}
              maxWidth={600}
              sx={{ filter: 'brightness(0.9)' }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Customization;
