import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Timeline from '../components/timeline'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'

const IndexPage = () => (
  <ThemeProvider>
    <Layout>
    <CSSReset />
   <Timeline>Teste</Timeline>
  </Layout>
  </ThemeProvider>
  
);

export default IndexPage;
