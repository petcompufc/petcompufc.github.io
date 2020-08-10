import React from 'react';
import Carousel from '../components/index/carousel';
import Layout from '../components/layout';

import img1 from '../images/carousel1.jpg';
import img2 from '../images/carousel2.jpg';
import img3 from '../images/carousel3.jpg';

const IndexPage = () => (
  <Layout>
    <Carousel
      images={[{
        src: img1,
        desc: 'Imagem 1',
      },
      {
        src: img2,
        desc: 'Imagem 2',
      },
      {
        src: img3,
        desc: 'Imagem 3',
      }]}
    />
  </Layout>
);

export default IndexPage;
