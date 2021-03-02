import React from 'react';
import PropTypes from 'prop-types';
import '@fontsource/open-sans/700.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/300.css';

import { Box } from '@chakra-ui/react';

import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => (
  <>
    <Header />
    <Box
      as="main"
      maxW="2xl"
      minW="100vmin"
      mx="auto"
      px={3}
    >
      {children}
    </Box>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
