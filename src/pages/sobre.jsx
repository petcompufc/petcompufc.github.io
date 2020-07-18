import React from 'react';
import {
  Heading, Text, List, ListItem, Link, Icon, Flex,
} from '@chakra-ui/core';

import Layout from '../components/layout';
import Petiano from '../components/sobre/petiano';

const SobreNos = () => (
  <Layout>
    <Heading as="h1" my={5} size="xl">Sobre o PET</Heading>

    <Heading as="h2" my={3} size="lg">Quem Somos?</Heading>
    <Text>
      O PETComp UFC é o Programa de Educação Tutorial do curso de Ciência da Computação da
      Universidade Federal do Ceará. O PET é um projeto da
      {' '}
      <Link color="red.500" href="http://portal.mec.gov.br/sesu-secretaria-de-educacao-superior/apresentacao" isExternal>
        Secretaria de Educação Superior (SESu)
        <Icon name="external-link" mx="2px" />
      </Link>
      {' '}
      do
      {' '}
      <Link color="red.500" href="https://www.gov.br/mec/pt-br" isExternal>
        Ministério da Educação (MEC)
        <Icon name="external-link" mx="2px" />
      </Link>
      {' '}
      que visa trabalhar com os PETianos (os alunos que compõem  o PET) nos 3 pilares do ensino
      superior: Ensino, Pesquisa e Extensão.
      <br />
      Por causa desse objetivo o PET é considerado como um ambiente de preparo para alunos
      interessados em seguir carreira acadêmica. Junto ao tutor os PETianos realizam diversas
      atividades que abordam esses 3 pilares, como:
    </Text>

    <List styleType="disc" fontFamily="body" my={2}>
      <ListItem>
        <Link color="red.500" href="https://oci.org.br/" isExternal>
          Olimpíada Cearense de Informática
          <Icon name="external-link" mx="2px" />
        </Link>
        , focada em fomentar o interesse de alunos de ensino fundamental e médio na Computação
      </ListItem>
      <ListItem>
        Coding, que visa ensinar programação aos alunos de ensino médio das escolas
        municipais de Fortaleza.
      </ListItem>
      <ListItem>
        Include, a semana de recepção dos novos alunos de
        {' '}
        <Link color="red.500" href="https://cc.ufc.br/" isExternal>
          Ciência da Computação
          <Icon name="external-link" mx="2px" />
        </Link>
      </ListItem>
    </List>

    <Heading as="h2" my={3} size="lg">Timeline</Heading>

    <Heading as="h2" my={3} size="lg">PETianos</Heading>

    <Flex w="100%" direction="row" wrap="wrap" align="center" justify="space-evenly">
      <Petiano
        nome="Lincoln Rocha"
        titulo="Tutor"
        imagem=""
      />
      <Petiano
        nome="Felipe Keiler"
        titulo="Bolsista"
        imagem=""
      />
      <Petiano
        nome="Diego Holanda"
        titulo="Bolsista"
        imagem=""
      />
      <Petiano
        nome="Davi Segundo"
        titulo="Bolsista"
        imagem=""
      />
      <Petiano
        nome="Gabriel Passos"
        titulo="Bolsista"
        imagem=""
      />
      <Petiano
        nome="Gabriel Brilhante"
        titulo="Bolsista"
        imagem=""
      />
      <Petiano
        nome="Gabriel Candeia"
        titulo="Voluntário"
        imagem=""
      />
      <Petiano
        nome="Laura Petrola"
        titulo="Bolsista"
        imagem=""
      />
      <Petiano
        nome="Amanda Cavalcante"
        titulo="Bolsista"
        imagem=""
      />
      <Petiano
        nome="João Victor"
        titulo="Bolsista"
        imagem=""
      />
      <Petiano
        nome="Rodrigo Nogueira"
        titulo="Bolsista"
        imagem=""
      />
      <Petiano
        nome="Paloma Almeida"
        titulo="Voluntária"
        imagem=""
      />
      <Petiano
        nome="Michael Nicholas"
        titulo="Bolsista"
        imagem=""
      />
      <Petiano
        nome="Sabrina Sioli"
        titulo="Voluntária"
        imagem=""
      />
      <Petiano
        nome="Mayron Alves"
        titulo="Voluntário"
        imagem=""
      />
      <Petiano
        nome="Josué Hinrichs"
        titulo="Voluntário"
        imagem=""
      />
    </Flex>
  </Layout>
);

export default SobreNos;
