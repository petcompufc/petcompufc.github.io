import {
  Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Divider, Grid, Heading, Icon, Text,
} from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';
import { TiChevronRightOutline } from 'react-icons/ti';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Atividade from '../components/atividade';

const Coding = require('../images/coding.png');
const Gado = require('../images/gado.png');

export default () => {
  const BreadCrumb = ({ children }) => (
    <Box paddingX="2%" bg="#25BDF5" borderRadius="16px">
      <Heading as="h2" color="#263238" marginTop="6%">{children}</Heading>
      <Divider />
      <Breadcrumb spacing="8px" separator={<TiChevronRightOutline />} fontSize="16px" fontWeight="bold">
        <BreadcrumbItem>
          <BreadcrumbLink color="#d50000" href="/">Página Inicial</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink color="#888" href="/Contato">{children}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  );

  BreadCrumb.propTypes = {
    children: PropTypes.node.isRequired,
  };

  // lores das atividades
  const coding = (
    <Box>
      <Text mt="12px" fontSize="14px">O projeto &ldquo;Coding: Informática nas Escolas&rdquo; surgiu com a missão de trazer um ensino de qualidade sobre Programação de Computadores para os jovens de Fortaleza.</Text>
      <Text mt="12px" fontSize="14px">Anualmente, são selecionados alunos ingressantes das Escolas Estaduais de Educação Prossional de Fortaleza para se juntar às novas turmas.</Text>
      <Text mt="12px" fontSize="14px">Desde o primeiro dia, os alunos assistem a aulas lúdicas, com muitas práticas, e aprendem a programar usando as tecnologias mais relevantes, como verdadeiros profissionais da área.</Text>
    </Box>
  );
  const include = (
    <Box>
      <Text mt="12px" fontSize="14px">O Include é uma atividade que visa acolher, de forma prazerosa e repleta de aprendizado, os alunos recém ingressos no curso de Ciências da Computação, Engenharia de Computação e Sistemas e Mídias Digitais.</Text>
      <Text mt="12px" fontSize="14px">Esta atividade consiste na organização de palestras, minicursos e dinâmicas que disseminam conhecimentos sobre a Universidade e seus cursos</Text>
    </Box>
  );
  const sac = (
    <Box>
      <Text mt="12px" fontSize="14px">A Semana Acadêmica da Computação é complementa as atividades curriculares, oferecendo aos alunos a oportunidade de conviver e interagir com outras áreas de conhecimento, ideias criativas, aplicações reais e soluções empresariais.</Text>
      <Text mt="12px" fontSize="14px">Envolve a comunidade acadêmica em um ambiente de discussão, aprendizado e integração entre alunos, professores e profissionais de áreas distintas para troca de experiências, além de promover a integração entre alunos, professores e profissionais da área da computação.</Text>
    </Box>
  );
  const gado = (
    <Box>
      <Text mt="12px" fontSize="14px">gado d+</Text>
    </Box>
  );

  // Página das atividades
  return (
    <Layout>
      <SEO title="Atividades" />
      <BreadCrumb>Atividades</BreadCrumb>
      <Grid mt="5%" templateColumns="repeat(3, 1fr)" gap="2">
        <Atividade name="Include" lore={include} img={Coding} />
        <Atividade name="SAC" lore={sac} img={Coding} />
        <Atividade name="Coding" lore={coding} img={Coding} />
        <Atividade name="Gado" lore={gado} img={Gado} />
      </Grid>
    </Layout>
  );
};
