import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TagIcon from '@mui/icons-material/Tag';

const Download = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >Our all-inclusive package is now available.
        </Typography>
        <Typography variant="h6" color={'text.secondary'} data-aos={'fade-up'}>At last!  Our comprehensive social media package for developing businesses.
        </Typography>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <Box>
          <Typography fontWeight={700} variant={'h6'} gutterBottom>Our clients say it's effortless.</Typography>
          <Typography>Answer simple questions to get the process rolling.  No pressure - ever!</Typography>
        </Box>
        <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
          <Box display="flex" marginTop={1}>

            <Box component={Avatar} bgcolor={'primary.main'} width={{ xs: 40, sm: 50 }} height={{ xs: 40, sm: 50 }} >
              <Box component={TagIcon} alt={'Tag Icon'} sx={{ filter: 'brightness(0) invert(1)' }} width={{ xs: 15, md: 20 }}/>
            </Box>
            <Box
              component={Avatar}
              bgcolor={'primary.main'}
              marginLeft={1}
              width={{ xs: 40, sm: 50 }}
              height={{ xs: 40, sm: 50 }}
            >
              <Box component={AlternateEmailIcon} alt={'Favorite Icon'} sx={{ filter: 'brightness(0) invert(1)' }} width={{ xs: 15, md: 20 }}/>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Download;
