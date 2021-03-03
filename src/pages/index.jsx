import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import Carousel from '../components/index/carousel';
import Layout from '../components/layout';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      carousel1: file(relativePath: { eq: "carousel1.jpg" }) {
        childImageSharp {
          gatsbyImageData(formats: [JPG, WEBP])
        }
      },
      carousel2: file(relativePath: { eq: "carousel2.jpg" }) {
        childImageSharp {
          gatsbyImageData(formats: [JPG, WEBP])
        }
      },
      carousel3: file(relativePath: { eq: "carousel3.jpg" }) {
        childImageSharp {
          gatsbyImageData(formats: [JPG, WEBP])
        }
      },
    }
  `);

  return (
    <Layout>
      <Carousel
        slides={[{
          image: data.carousel1.childImageSharp.gatsbyImageData,
          desc: 'Imagem 1',
          text: 'Saiba mais sobre o PET',
        },
        {
          image: data.carousel2.childImageSharp.gatsbyImageData,
          desc: 'Imagem 2',
          text: 'Veja quem faz parte do PET',
        },
        {
          image: data.carousel3.childImageSharp.gatsbyImageData,
          desc: 'Imagem 3',
          text: 'Conheça nossas atividades',
        }]}
      />
    </Layout>
  );
};

export default IndexPage;
