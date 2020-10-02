import React from 'react';

import Layout from '../components/layout';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/emprestimos/">Go to emprestimos</Link>
    <br />
    <Link to="/page-2/">Go to page 2</Link>
    {' '}
    <br />
    <Link to="/using-typescript/">Go to &ldquo;Using TypeScript&rdquo;</Link>
  </Layout>
);

export default IndexPage;
