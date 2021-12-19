/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {sixServices} from 'theme/slogans'

const Benefits = () => {
  const theme = useTheme();
  return (
    <Grid container spacing={4}>
      {sixServices.map((item, i) => (
        <Grid item xs={12} sm={6} md={4} key={i}>
          <Box
            component={Card}
            padding={4}
            borderRadius={2}
            width={1}
            height={1}
            data-aos={'fade-up'}
            data-aos-delay={i * 100}
          >
            <Box display={'flex'} flexDirection={'column'}>
              <Box
                component={Avatar}
                width={50}
                height={50}
                marginBottom={2}
                bgcolor={theme.palette.primary.main}
                color={theme.palette.background.paper}
              >
                {item.icon}
              </Box>
              <Typography
                variant={'seoH5'}
                marginBottom={1}
                gutterBottom>
                {item.title}
              </Typography>
              <Typography color="text.secondary">{item.subtitle}</Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Benefits;
