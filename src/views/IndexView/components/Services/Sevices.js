/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

import {vitalFactor} from 'theme/slogans'
import {icons} from 'theme/icons'

const mock = [
  {
    title: "Website Development",
    subtitle:
      "We help you gain the advantage and efficiency through intelligent automation and always follow the latest developer best practices to enhance the experience for all users visiting our sites.",
    icon: icons.closeBracket,
  },
  {
    title: "Social Media Management",
    subtitle: vitalFactor.weMonitor,
    icon: icons.shell,
  },
  {
    title: "Digital Brand Management",
    subtitle:
      "Even if your business already has a web presence, a Google My Business listing account ensures you are discoverable and much more.  According to Google, customers are 70% more likely to visit businesses with a complete Google My Business listing.",
    icon: icons.pointer,
  },
];

const Services = () => {
  const theme = useTheme();
  const {ally:{ourMission}}=theme

  return (
    <Box>
      <Box marginBottom={4}>
        <Box marginBottom={2}>
          <Typography
            variant="h4"
            color="text.primary"
            align={'center'}
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >Shape the conversation.
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
            align={'center'}
          >{ourMission}
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              width={1}
              height={1}
            >
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <Box
                  component={Avatar}
                  width={60}
                  height={60}
                  marginBottom={2}
                  bgcolor={alpha(theme.palette.primary.main, 0.1)}
                  color={theme.palette.primary.main}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant={'seoH5'}
                  gutterBottom
                  align={'center'}
                >
                  {item.title}
                </Typography>
                <Typography align={'center'} color="text.secondary">
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
