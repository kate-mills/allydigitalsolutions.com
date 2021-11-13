/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';

const Map = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box>
        <Box marginBottom={1}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
            }}
          >
            Get in touch
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" color={'text.secondary'}>
            We'd love to talk about how we can help you.
          </Typography>
        </Box>
      </Box>
      <Box marginY={3}>
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          title="map"
          marginHeight={0}
          marginWidth={0}
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=Napa+Ca&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          style={{
            minHeight: 300,
            borderRadius: 8,
            filter:
              theme.palette.mode === 'dark'
                ? 'grayscale(0.5) opacity(0.7)'
                : 'none',
          }}
        />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography
            variant={'body1'}
            gutterBottom
            sx={{ fontWeight: 'medium' }}
          >
            Call us:
          </Typography>
          <Typography variant={'subtitle1'}>(707) 266-8106</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant={'body1'}
            gutterBottom
            sx={{ fontWeight: 'medium' }}
          >
            Email us:
          </Typography>
          <Typography variant={'subtitle1'}>hellow@allydigitalsolutions.com</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant={'body1'}
            gutterBottom
            sx={{ fontWeight: 'medium' }}
          >
          </Typography>
          <Typography variant={'subtitle1'}>
            Let us know if you're in Napa, Ca
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Map;
