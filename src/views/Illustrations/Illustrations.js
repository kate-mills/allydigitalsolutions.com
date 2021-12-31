/* eslint-disable react/jsx-key */
/* eslint-disable quotes */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FixedLayout from 'layouts/Fixed';
import Container from 'components/Container';

import { useStaticQuery, graphql } from "gatsby"
const query = graphql`
  {
    illustrations:allAirtable(filter: {table: {eq: "Illustrations"}}) {
      nodes {
        data {
          name
          alt
          files:attachment {
            id
            url
          }
        }
      }
    }
  }
`


const Illustrations = () => {
  const {spacing, palette:{mode, common, secondary}} = useTheme()
  const {illustrations:{nodes}} = useStaticQuery(query)

  return (
    <FixedLayout>
      <Container>
        <Box>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 600, }}>Illustrations & Logos</Typography>
          <Typography gutterBottom sx={{ '& code': { background: secondary.light, color: common.black}, }} >
            The dynamic illustrations in the theme are simple React components
            stored in <code>src/svg/illustrations</code>. They can be used as
            normal React components.
          </Typography>
        </Box>
      </Container>
      <Container paddingTop={'0 !important'}>
        <Grid container spacing={4}>
          { nodes.map(({data}) =>{
            const {files, alt} = data
            const {url, id} = files[0]
            return (
            <Grid
              item
              alignItems={'center'}
              justifyContent={'center'}
              key={id}
              xs={12}
              sm={6}
              md={4}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                borderRadius={2}
                boxShadow={3}
              >
                <Box
                  component={CardContent}
                  padding={4}
                  display={'flex'}
                  alignItems={'center'}
                  height={1}
                >
                  <Box
                    component={'img'}
                    alt={alt}
                    src={url}
                    width={1}
                    height={1}
                    sx={{
                      filter:
                        mode === 'dark'
                          ? 'brightness(0.8)'
                          : 'none',
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          )})}
        </Grid>
        <Grid container spacing={4} sx={{ marginTop: 2 }}> </Grid>
      </Container>
    </FixedLayout>
  );
};

export default Illustrations;
