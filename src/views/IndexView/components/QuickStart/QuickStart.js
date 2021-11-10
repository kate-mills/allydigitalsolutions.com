/* eslint-disable react/no-unescaped-entities */
import React from 'react';
//import SyntaxHighlighter from 'react-syntax-highlighter';
//import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const QuickStart = () => {
  const theme = useTheme();
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
            Dominate Your Industry
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
            align={'center'}
          >We have the elements to get your brand in a position to dominate your market.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default QuickStart;
