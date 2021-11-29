import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'components/Link'

const Application = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 600,
          }}
        >
          Everything you need in a website.
        </Typography>
        <Typography variant="h6" color={'text.secondary'} data-aos={'fade-up'}>We make sure to include all the details and niceties that a growing business could need.
        </Typography>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <Box>
          <Typography fontWeight={600} variant={'h6'} gutterBottom>
            Get started now
          </Typography>
          <Typography>
            Get your dream website without the hassle.
          </Typography>
        </Box>
        <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
          <Button
            component={Link}
            to={'/contact-page-cover'}
            variant="contained"
            color="primary"
            size="large"
          >
            Start now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Application;
