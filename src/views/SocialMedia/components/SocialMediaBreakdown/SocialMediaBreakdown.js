import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import Link from 'components/Link'
//https://certifications.facebookblueprint.com/student/collection/248399/path/225171/activity/206430?skip_interstitial=true#/page/5faa24e91f435f7ed766a4fa

const mock = [
  {
    title: 'Facebook',
    price: 'Business Page',
    action: 'Your digital storefront',
    btnText: 'Get Package Info',
    features: [
      { title: 'Establish your business\'s online presence', isIncluded: 'true' },
      { title: 'Tell your business\'s story', isIncluded: 'true' },
      { title: 'Build a community', isIncluded: 'true' },
      { title: 'Find new customers', isIncluded: 'true' },
      { title: 'Keep people updated', isIncluded: 'true' },
      { title: 'Host Events', isIncluded: true, },
      { title: 'Create & Join Groups', isIncluded: true, },
      { title: 'Sell with Shops', isIncluded: true, },
      { title: 'Develop and manage advertising campaigns', isIncluded: true, },
    ],
    isHighlighted: false,
  },{
    title: 'Instagram',
    price: 'Business Profile',
    action: 'Showcase your brand',
    btnText: 'Get Package Info',
    features: [
      { title: 'Showcase your brand through powerful visuals', isIncluded: true, },
      { title: 'Tell the story of your business', isIncluded: true, },
      { title: 'Bring customers behind the scenes', isIncluded: true, },
      { title: 'Broadcast live video & share updates in real time', isIncluded: true, },
      { title: 'Have private conversations with instant messages', isIncluded: true, },
      { title: 'Sell with shopping posts', isIncluded: true, },
      { title: 'Turn posts & stories into ads & reach a larger audience.', isIncluded: true, }
    ],
    isHighlighted: false,
  },
  {
    title: 'WhatsApp',
    price: 'Business Profile',
    action: 'Serve customers around the world',
    btnText: 'Get Package Info',
    features: [
      { title: 'Communicate with customers over free and secure text messages and voice & video calls', isIncluded: true, },
      { title: 'Build & maintain a catalog of products that serves as a mobile storefront', isIncluded: true,},
      { title: 'Increase responsiveness through automated messaging', isIncluded: true,},
      { title: 'Display your WhatsApp number on your FB Page', isIncluded: true, },
      { title: 'Send people to WhatsApp from your ads', isIncluded: true, },
    ],
    isHighlighted: false,
  },
];

const SocialMediaBreakdown = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{ fontWeight: 600 }}
          variant={'h4'}
          align={'center'}
          gutterBottom
        >Social Media For Growing Brands</Typography>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'text.secondary'}
          align={'center'}
        >Our complete social media package for developing brands is now available!
          {/*Whatever your status, our offers evolve according to your needs.*/}
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
                  <Typography variant={'h4'} gutterBottom>
                    <Box component={'span'} fontWeight={600}>
                      {item.title}
                    </Box>
                  </Typography>
                  <Box display={'flex'} alignItems={'flex-start'}>
                    <Typography variant={'h4'} color={'primary'}>
                      <Box
                        component={'span'}
                        marginRight={1 / 2}
                      >
                      </Box>
                    </Typography>
                    <Typography variant={'seoH5'} color={'primary.seoText'} gutterBottom textAlign={'center'}>
                      <Box component={'span'} fontWeight={600}>
                        {item.action}
                      </Box>
                    </Typography>
                  </Box>
                </Box>
                <Grid container spacing={1}>
                  {item.features.map((feature, j) => (
                    <Grid item xs={12} key={j}>
                      <Typography
                        gutterBottom
                        component={'p'}
                        align={'center'}
                        style={{
                          textDecoration: !feature.isIncluded
                            ? 'line-through'
                            : 'none',
                          fontSize: !!feature.isBold
                            ?'large'
                            : 'small',
                          fontWeight: !!feature.isBold
                            ?'bold'
                            : 'normal',
                        }}
                      >{feature.title}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>

              <Box flexGrow={1} />
              <CardActions sx={{ justifyContent: 'flex-end', padding: 4 }}>
                <Button
                  component={Link}
                  size={'large'}
                  variant={item.isHighlighted ? 'contained' : 'outlined'}
                  to={'/contact-sidebar-map/'}
                >{item.btnText}
                </Button>
              </CardActions>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SocialMediaBreakdown;
