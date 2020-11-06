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
        text: 'Saiba mais sobre o PET',
      },
      {
        src: img2,
        desc: 'Imagem 2',
        text: 'Veja quem faz parte do PET',
      },
      {
        src: img3,
        desc: 'Imagem 3',
        text: 'Conheça nossas atividades',
      }]}
    />
  </Layout>
);

export default IndexPage;
