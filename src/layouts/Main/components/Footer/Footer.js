import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'components/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import logo from 'svg/logo.svg'
import logoDark from 'svg/logo-dark.svg'

const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            component={Link}
            display={'flex'}
            to="/"
            title="AllyDigitalSolutions"
            width={80}
          >
            <Box
              component={'img'}
              alt="Ally Digital Solutions Logo"
              src={ mode === "light" ? logo : logoDark }
              height={1}
              width={1}
            />
          </Box>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                to="/"
                color="text.primary"
                variant={'caption'}
              >
                Home
              </Link>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                to="/company-terms"
                color="text.primary"
                variant={'caption'}
              >Privacy
              </Link>
            </Box>
            <Box marginTop={1}>
              <Button to="/contact-page" color="primary" marginTop={1} size="small" variant="outlined" component={Link} title="Contact Our Design & Development Team">
                <Typography  variant={'caption'}>Contact Us</Typography>
            </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          component={'p'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >© AllyDigitalSolutions. {new Date().getFullYear()}, Kate Mills Company, LLC. All rights reserved
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
        >
          When you visit or interact with our sites, services or tools, we or
          our authorised service providers may use cookies for storing
          information to help provide you with a better, faster and safer
          experience and for marketing purposes.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
