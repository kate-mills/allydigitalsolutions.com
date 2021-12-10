/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const QuickStart = () => {
  const {ally: {weUtilize}} = useTheme()
  return (
    <Box>
      <Box>
        <Box marginBottom={2}>
          <Typography
            variant="h4"
            color="text.primary"
            align={'center'}
            gutterBottom
            sx={{ fontWeight: 700 }}>
           Let's Dominate Your Industry! 
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
            align={'center'}
          >{weUtilize}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default QuickStart;
