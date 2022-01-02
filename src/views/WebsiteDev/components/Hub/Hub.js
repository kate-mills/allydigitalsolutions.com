import React, { useState } from 'react';
import CountUp from 'react-countup';
import { useTheme } from '@mui/material/styles';
import { GatsbyImage, getImage  } from "gatsby-plugin-image";
import VisibilitySensor from 'react-visibility-sensor';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';



const mock = [
  {
    title: 100,
    subtitle:
      '100 + component compositions to make your site feel fresh and unique.',
    suffix: '+',
  },
  {
    title: 25,
    subtitle:
      '25 + landing and support pages on the ready enable us to build a professional website quickly.',
    suffix: '+',
  },
  {
    title: 100,
    subtitle: '100% of our clients awarded us a 5-star rating in the last 2 years.',
    suffix: '%',
  },
];

const Hero = ({img}) => {

  const {breakpoints:{up}} = useTheme() 

  const isMd = useMediaQuery(up('md'),{defaultMatches: true});

  const [viewPortEntered, setViewPortEntered] = useState(false);

  const setViewPortVisibility = (isVisible) => {
    if (viewPortEntered) {
      return;
    }
    setViewPortEntered(isVisible);
  };

  return (
    <Grid container spacing={4}>
      <Grid
        item
        container
        alignItems={'center'}
        justifyContent={'center'}
        xs={12}
        md={6}
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Box
          component={GatsbyImage}
          height={1}
          width={1}
          image={getImage(img)}
          alt="Web Developers are sitting at a table with their laptops smiling, discussing website development."
          effect="blur"
          boxShadow={3}
          borderRadius={2}
          maxWidth={600}
          sx={{ filter: 'brightness(0.9)' }}
        />
      </Grid>
      <Grid item container xs={12} md={6} alignItems={'center'}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={2}>
            <Typography
              variant="h4"
              color="text.primary"
              sx={{ fontWeight: 600 }}
            >Excellence happens with code,{' '}
              <Typography
                color={'primary.main'}
                component={'span'}
                variant={'cursive'}
              >not by chance.
              </Typography>
            </Typography>
          </Box>
          <Box marginBottom={4}>
            <Typography variant="h6" component="p" 
              color={'text.secondary'}>We utilize artistic tools, code, and trusted online branding principles to build sophisticated solutions for our clients.
            </Typography>
          </Box>
          <Box>
            <Grid container spacing={2}>
              {mock.map((item, i) => (
                <Grid key={i} item xs={12} md={4}>
                  <Typography variant="h3" gutterBottom color="text.primary">
                    <Box fontWeight={600}>
                      <VisibilitySensor
                        onChange={(isVisible) => setViewPortVisibility(isVisible)
                        }
                        delayedCall
                      >
                        <CountUp
                          redraw={false}
                          end={viewPortEntered ? item.title : 0}
                          start={0}
                          suffix={item.suffix}
                        />
                      </VisibilitySensor>
                    </Box>
                  </Typography>
                  <Typography color={"text.primary"} component="p">
                    {item.subtitle}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
