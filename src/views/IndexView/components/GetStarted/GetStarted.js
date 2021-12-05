import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Link from 'components/Link'

const GetStarted = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Typography
        variant="h4"
        color="text.primary"
        align={'center'}
        gutterBottom
        sx={{
          fontWeight: 700,
        }}
      >Get started with Ally Digital today!
      </Typography>
      <Typography
        variant="body1"
        component="p"
        color="text.secondary"
        sx={{ fontWeight: 400 }}
        align={'center'}
      >Ally Digital Solutions is a national Digital Marketing, Web Design & App Development Agency located in Napa, CA.</Typography>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'stretched', sm: 'flex-start' }}
        justifyContent={'center'}
        marginTop={4}
      >
        <Button
          component={Link}
          variant="contained"
          color="primary"
          size="large"
          fullWidth={isMd ? false : true}
          to={'/social-media'}
          textAlign="center"
        >Learn more
        </Button>
        <Box
          marginTop={{ xs: 2, sm: 0 }}
          marginLeft={{ sm: 2 }}
          width={{ xs: '100%', md: 'auto' }}
        >
          <Button
            component={Link}
            to={'/contact-page'}
            variant="outlined"
            color="primary"
            size="large"
            fullWidth={isMd ? false : true}
          >Contact our team
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default GetStarted;
