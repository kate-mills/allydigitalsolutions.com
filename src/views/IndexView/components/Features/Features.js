/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {useSrcImages} from 'hooks/use-src-images'


const mock = [
  {
    title: 100,
    subtitle:
      "100% of our clients awarded us a 5-star rating in the last 2 years.",
    suffix: "%",
  },
];

const Features = () => {
  const {katePng}  = useSrcImages()
  const {
    ally: {ourClientsClear},
    palette:{primary:{main:mainColor}},
    breakpoints:{up},
  } = useTheme();

  const isMd = useMediaQuery(up('md'), {
    defaultMatches: true,
  });

  const [viewPortEntered, setViewPortEntered] = useState(false);
  const setViewPortVisibility = (isVisible) => {
    if (viewPortEntered) {
      return;
    }
    setViewPortEntered(isVisible);
  };

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item container justifyContent="center" alignItems="center" xs={12} md={6} sx={{ display: { xs: 'none', md: 'flex'}, backgroundColor: 'inherit'}}>
          <Box
            component={Card}
            boxShadow={4}
            height={1}
            width={1}
            backgroundColor={mainColor}
          ><Box component={GatsbyImage} height={1} width={1}  minHeight={340} image={getImage(katePng.img)}
            alt="Woman smiling holding a laptop."
          /></Box>
        </Grid>


        <Grid item xs={12} md={6}>
          <Box marginBottom={4}>
            <Typography variant={'h4'} gutterBottom>Less work. More time.
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
              {ourClientsClear}
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {mock.map((item, i) => (
              <Grid key={i} item xs={12} md={4}>
                <Typography variant="h4" color={'primary'} gutterBottom>
                  <VisibilitySensor
                    onChange={(isVisible) => setViewPortVisibility(isVisible)}
                    delayedCall
                  >
                    <CountUp
                      redraw={false}
                      end={viewPortEntered ? item.title : 0}
                      start={0}
                      suffix={item.suffix}
                    />
                  </VisibilitySensor>
                </Typography>
                <Typography color="text.secondary" component="p">
                  {item.subtitle}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
