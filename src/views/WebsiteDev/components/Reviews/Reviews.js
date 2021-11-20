import React from 'react';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

//import box from 'svg/box.svg'

const mock = [
  { title: 'Michele Corley Clinical Skincare', subtitle: 'Kate did a beautiful job designing my website.  Her ability to interpret my wants and needs was very appreciated.  I could not be happier!',
    //icon: box,
  },
  { title: 'Skincare By Hilary', subtitle: 'Ally Digital Solutions has helped my business enormously with optimizing my website, SEO, and social media marketing. They do excellent work, offer reasonable rates, and have exceptional communication. I highly recommend them!',
    //icon: box
  },
  { title: 'Hide & Wild', subtitle: 'I loved working with Kate on my e-commerce website! Her communication was excellent every step of the way. She listened to my vision and brought her artistic ideas and vision to the process, which made it feel like a real collaboration. I am thrilled with the result and all her advice along the way.',
    //icon: box,
  },
  //{ title: 'Skincare By Hilary', subtitle: 'Establish your identity and show your visitors what you do. But, of course, we will make sure the essentials are significant and remarkable to your visitors.', icon: box, },
  //{ title: 'Hide & Wild', subtitle: 'You are letting your visitors know your location and how they can reach you can seriously reduce frustration and possible loss of clientele, which is always a good thing.', icon: box, },
  //{ title: 'Details', subtitle: 'Give your visitors a more personal look into your business and what makes your services or product unique.', icon: box, },
];

const Reviews = () => {
  const theme = useTheme();

  return (
    <Box>
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              component={'span'}
              display={'block'}
              width={1}
              height={1}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                data-aos={'fade-up'}
                data-aos-delay={i * 100}
                data-aos-offset={100}
                data-aos-duration={600}
                flexDirection={'column'}
                display={'flex'}
              >
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                >
                  <Box
                    //component={Avatar}
                    sx={{background: '#b9bdbd'}}
                    width={{ xs: 20, md: 30 }}
                    height={{ xs: 20, md: 30 }}
                    marginBottom={2}
                  />
                  <Typography
                    variant={'h6'}
                    gutterBottom
                    sx={{ fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">{item.subtitle}</Typography>
                </CardContent>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Reviews;
