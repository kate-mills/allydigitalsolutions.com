import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';

const mock = [
  {
    title: 'Basic',
    price: '1250',
    features: [
      {
        title: '1 Platform',
        isIncluded: true,
      },
      {
        title: '3 posts/ week',
        isIncluded: true,
      },
      {
        title: 'Writing and scheduling posts',
        isIncluded: true,
      },
      {
        title: 'Post Engagement',
        isIncluded: true,
      },
      {
        title: 'Reputation Managment',
        isIncluded: true,
      },
      {
        title: 'Contest Managment',
        isIncluded: false,
      },
      {
        title: 'Facebook Ads',
        isIncluded: false,
      },
    ],
    isHighlighted: false,
    btnText: 'Get basic',
  },
  {
    title: 'Professional',
    price: '1999',
    features: [
      {
        title: '2 Platforms',
        isIncluded: true,
      },
      {
        title: '3 posts/ week',
        isIncluded: true,
      },
      {
        title: 'Writing and scheduling posts',
        isIncluded: true,
      },
      {
        title: 'Post Engagement',
        isIncluded: true,
      },
      {
        title: 'Reputation Managment',
        isIncluded: true,
      },
      {
        title: 'Contest Management',
        isIncluded: true,
      },
      {
        title: 'Facebook Ads',
        isIncluded: true,
      },
    ],
    isHighlighted: true,
    btnText: 'Get pro',
  },
  {
    title: 'Custom',
    price: '1999+',
    features: [
      {
        title: 'Unlimited Access',
        isIncluded: true,
      },
      {
        title: '3 posts/ week minimum',
        isIncluded: true,
      },
      {
        title: 'Writing and scheduling posts',
        isIncluded: true,
      },
      {
        title: 'Post Engagement',
        isIncluded: true,
      },
      {
        title: 'Reputation Management',
        isIncluded: true,
      },
      {
        title: 'Contest Managment',
        isIncluded: true,
      },
      { title: 'Facebook Ads',
        isIncluded: true,
      },
    ],
    isHighlighted: false,
    btnText: 'Contact us',
  },
];

const Pricing = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{ fontWeight: 600 }}
          variant={'h4'}
          align={'center'}
          gutterBottom
        >
          Flexible and transparent pricing
        </Typography>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'text.secondary'}
          align={'center'}
        >
          Whatever your status, our offers evolve according to your needs.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid
            item
            xs={12}
            md={4}
            key={i}
            data-aos={'fade-up'}
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Box
              component={Card}
              height={1}
              display={'flex'}
              flexDirection={'column'}
              boxShadow={0}
              border={`1px solid ${theme.palette.divider}`}
            >
              <CardContent
                sx={{
                  padding: { sm: 4 },
                }}
              >
                <Box
                  marginBottom={4}
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                >
                  <Typography variant={'h6'} gutterBottom>
                    <Box component={'span'} fontWeight={600}>
                      {item.title}
                    </Box>
                  </Typography>
                  <Box display={'flex'} alignItems={'flex-start'}>
                    <Typography variant={'h4'} color={'primary'}>
                      <Box
                        component={'span'}
                        fontWeight={600}
                        marginRight={1 / 2}
                      >
                        $
                      </Box>
                    </Typography>
                    <Typography variant={'h2'} color={'primary'} gutterBottom>
                      <Box component={'span'} fontWeight={600}>
                        {item.price}
                      </Box>
                    </Typography>
                  </Box>
                  <Typography variant={'subtitle2'} color={'text.secondary'}>
                    per month
                  </Typography>
                </Box>
                <Grid container spacing={1}>
                  {item.features.map((feature, j) => (
                    <Grid item xs={12} key={j}>
                      <Typography
                        component={'p'}
                        align={'center'}
                        style={{
                          textDecoration: !feature.isIncluded
                            ? 'line-through'
                            : 'none',
                        }}
                      >
                        {feature.title}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
              <Box flexGrow={1} />
              <CardActions sx={{ justifyContent: 'flex-end', padding: 4 }}>
                <Button
                  size={'large'}
                  variant={item.isHighlighted ? 'contained' : 'outlined'}
                >
                  {item.btnText}
                </Button>
              </CardActions>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Pricing;
