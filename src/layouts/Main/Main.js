import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import Container from 'components/Container';
import { Topbar, Sidebar, Footer, Seo } from './components';

import pages from '../navigation';

const Main = ({
    children,
    colorInvert = false,
    bgcolor = 'transparent',
    title='',
    image='',
    description='',
    noindex=false,
    snippet='',
  }) => {

    const {breakpoints:{up},palette:{background:{paper}},zIndex:{appBar}} = useTheme();
    const isMd = useMediaQuery(up('md'), { defaultMatches: true, });

    const [openSidebar,setOpenSidebar] = useState(false);
    const handleSidebarOpen  = ()=>{ setOpenSidebar(true); };
    const handleSidebarClose = ()=>{ setOpenSidebar(false); };
    const open = isMd ? false : openSidebar;

    const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 38, });

  return (
    <React.Fragment>
      <Seo title={title} image={image} description={description} snippet={snippet} noindex={noindex}/>
    <Box>
      <Box bgcolor={bgcolor} position={'relative'} zIndex={appBar}>
        <Container
          paddingTop={'8px !important'}
          paddingBottom={'0 !important'}
        >
          <Box display={'flex'} justifyContent={'flex-end'} alignItems={'center'}></Box>
        </Container>
      </Box>
      <AppBar
        position={'sticky'}
        sx={{ top: 0, backgroundColor: trigger ? paper : bgcolor, }}
        elevation={trigger ? 1 : 0}>
        <Container paddingY={1}>
          <Topbar
            onSidebarOpen={handleSidebarOpen}
            pages={pages}
            colorInvert={trigger ? false : colorInvert}/>
        </Container>
      </AppBar>
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}/>
      <main>
        {children}
        <Divider />
      </main>
      <Container paddingY={4}>
        <Footer />
      </Container>
    </Box>
    </React.Fragment>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  colorInvert: PropTypes.bool,
  bgcolor: PropTypes.string,
  title:PropTypes.string,
  image:PropTypes.string,
  description:PropTypes.string,
  noindex: PropTypes.bool,
  snippet:PropTypes.string,
};
export default Main;
