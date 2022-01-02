import React from 'react';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const icon = (<svg height={24} width={24} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />{" "}</svg>
)



const mock = [
  { title: 'Michele Corley Clinical Skincare', subtitle: 'Kate did a beautiful job designing my website.  Her ability to interpret my wants and needs was very appreciated.  I could not be happier!',
    icon,
  },
  { title: 'Skincare By Hilary', subtitle: 'Ally Digital Solutions has helped my business enormously with optimizing my website, SEO, and social media marketing. They do excellent work, offer reasonable rates, and have exceptional communication. I highly recommend them!',
    icon,
  },
  { title: 'Hide & Wild', subtitle: 'I loved working with Kate on my e-commerce website! Her communication was excellent every step of the way. She listened to my vision and brought her artistic ideas and vision to the process, which made it feel like a real collaboration. I am thrilled with the result and all her advice along the way.',
    icon,
  },
];

const Reviews = () => {
  const {spacing} = useTheme()
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
                  transform: `translateY(-${spacing(1 / 2)})`,
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
                    component={Avatar}
                    bgcolor={'secondary.main'}
                    width={{ xs: 50, md: 50 }}
                    height={{ xs: 50, md: 50 }}
                    marginBottom={2}
                  >{item.icon}</Box>
                  <Typography
                    variant={'seoH5'}
                    gutterBottom>
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
