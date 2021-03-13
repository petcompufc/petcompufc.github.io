import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'

import SearchOptimization from '../components/searchOptimization'
import Carousel from '../components/index/carousel'
import Layout from '../components/layout'

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
  `)

  return (
    <Layout>
      <SearchOptimization
        title='Página Inicial'
        description='O PET Computação trabalha para enriquecer a experiência de alunos de dentro e fora da Universidade Federal do Ceará'
      />
      <Carousel
        slides={[{
          image: data.carousel1.childImageSharp.gatsbyImageData,
          desc: 'Cerimônia de abertura do Include 2020',
          text: 'Saiba mais sobre o PET'
        },
        {
          image: data.carousel2.childImageSharp.gatsbyImageData,
          desc: 'PETianos durante a Semana Acadêmica da Computação 2017',
          text: 'Veja quem faz parte do PET'
        },
        {
          image: data.carousel3.childImageSharp.gatsbyImageData,
          desc: 'PETianos utilizando soldador na sala do PET',
          text: 'Conheça nossas atividades'
        }]}
      />
    </Layout>
  )
}

export default IndexPage
