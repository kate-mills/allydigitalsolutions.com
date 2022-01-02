/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Link from 'components/Link'

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const Strategy = () => {
  const {breakpoints:{up}} = useTheme();
  const isMd = useMediaQuery(up('md'), { defaultMatches: true, });

  return (
    <Box>
      <Box marginBottom={2}>
        <Typography
          sx={{ textTransform: 'uppercase', fontWeight: 600, }}
          gutterBottom
          color={'primary.main'}
          align={'center'}
        >strategy
        </Typography>
        <Typography variant={'h4'} sx={{ fontWeight: 600 }} align={'center'}>
We've got your back when it comes to style and optimization.
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          align={'center'}
        >Do you need a brand new website, or just a makeover?
          <br />
          Allow us to take the lead or lend a helping hand.
        </Typography>
        <Box marginTop={2} display={'flex'} justifyContent={'center'}>
          <Button
            component={Link}
            to={'/contact-page/'}
            color={'primary'}
            variant={'contained'}
            size={'large'}
            fullWidth={isMd ? false : true} 
          >Let's strategize!</Button>
        </Box>
      </Box>
      <Box
        marginBottom={0}
        width={1}
        display={'flex'}
        justifyContent={'center'}>
        <Box
          paddingBottom={{ xs: 1, md: 0 }}
          display={'flex'}
          justifyContent={'center'}
          flexWrap={'wrap'}
          overflow={'visible'}>
          {[
            'Website Optimization',
            'Search Engine Optimization',
            'Image Optimization',
            'Logos',
            'Fonts',
            'Colors',
          ].map((item, i) => (
            <Box
              key={i}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              flexDirection={'column'}
              flexWrap={'wrap'}
              flex={'0 0 auto'}
              marginX={2}>
              <Box
                component={ListItem}
                disableGutters
                width={'auto'}
                padding={0}>
                <Box
                  component={ListItemAvatar}
                  minWidth={'auto !important'}
                  marginRight={2}>
                  <Box
                    component={Avatar}
                    bgcolor={'secondary.main'}
                    width={20}
                    height={20}
                  >
                    <svg
                      width={12}
                      height={12}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Box>
                </Box>
                <ListItemText primary={item} />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Strategy;
