import React from 'react';
import {
  Heading, Text, List, ListItem, Link, Grid,
} from '@chakra-ui/react';
import { GoLinkExternal } from 'react-icons/go';

import Layout from '../components/layout';
import Timeline from '../components/sobre/timeline';
import Petiano from '../components/sobre/petiano';
import SEO from '../components/seo';

const SobreNos = () => (
  <Layout>
    <SEO
      title="Sobre Nós"
      description="Saiba mais sobre o que é o PET Computação e a história do grupo até os dias de hoje"
    />
    <Heading as="h1" my={5} size="xl">Sobre o PET</Heading>
    <Heading as="h2" my={3} size="lg">Quem Somos?</Heading>
    <Text>
      O PETComp UFC é o Programa de Educação Tutorial do curso de Ciência da Computação da
      Universidade Federal do Ceará. O PET é um projeto da
      {' '}
      <Link color="red.500" href="http://portal.mec.gov.br/sesu-secretaria-de-educacao-superior/apresentacao" isExternal>
        Secretaria de Educação Superior (SESu)
        {' '}
        <GoLinkExternal style={{ display: 'inline' }} />
      </Link>
      {' '}
      do
      {' '}
      <Link color="red.500" href="https://www.gov.br/mec/pt-br" isExternal>
        Ministério da Educação (MEC)
        {' '}
        <GoLinkExternal style={{ display: 'inline' }} />
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
          {' '}
          <GoLinkExternal style={{ display: 'inline' }} />
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
          {' '}
          <GoLinkExternal style={{ display: 'inline' }} />
        </Link>
      </ListItem>
    </List>

    <Heading as="h2" my={3} size="lg">Timeline</Heading>

    <Timeline eventos={[
      {
        ano: 1992,
        acontecimento: 'O PET Computação UFC é fundado pelo Prof. Riverson, sendo ele o primeiro a ocupar o cargo de tutor',
      },
      {
        ano: 1996,
        acontecimento: 'O PETComp realiza a sua primeira troca de tutor, assumindo o Prof. Tarcísio',
      },
      {
        ano: 1997,
        acontecimento: 'O PETComp troca de tutor novamente, sendo o novo tutor o Prof. Marcelino Pequeno',
      },
      {
        ano: 1999,
        acontecimento: 'A CAPES anuncia o fim do programa, que passar a existir sob emendas parlamentares, com uma quantidade menor de bolsistas e sem bolsa nem custeio',
      },
      {
        ano: 2003,
        acontecimento: 'O Programa é transferido da CAPES para a SESU, voltando a ter 12 bolsistas com custeio e pagamento de tutor',
      },
      {
        ano: 2005,
        acontecimento: 'O PET torna-se regulamentado por lei, dando mais segurança ao programa.',
      },
      {
        ano: 2005,
        acontecimento: 'O PET Computação organiza a SESOL, uma referência nacional de encontro para desenvolvimento e utilização de softwares livres.',
      },
      {
        ano: 2010,
        acontecimento: 'A duração do tutor no cargo é limitada a 6 anos',
      },
      {
        ano: 2016,
        acontecimento: 'O PETComp, pela primeira vez através do debate e da votação de alunos e professores, troca de tutor, assumindo o prof. Lincoln Rocha',
      },
    ]}
    />

    <Heading as="h2" my={3} size="lg">PETianos</Heading>

    <Grid w="100%" templateColumns="repeat(auto-fit, minmax(10rem, 1fr))">
      <Petiano
        nome="Lincoln Rocha"
        titulo="Tutor"
        imagem=""
      />
      <Petiano
        nome="Felipe Keiler"
        titulo="PETiano"
      />
      <Petiano
        nome="Gabriel Passos"
        titulo="PETiano"
        imagem=""
      />
      <Petiano
        nome="Gabriel Brilhante"
        titulo="PETiano"
      />
      <Petiano
        nome="Amanda Cavalcante"
        titulo="PETiana"
      />
      <Petiano
        nome="João Victor"
        titulo="PETiano"
      />
      <Petiano
        nome="Paloma Almeida"
        titulo="PETiana"
      />
      <Petiano
        nome="Michael Nicholas"
        titulo="PETiano"
      />
      <Petiano
        nome="Sabrina Sioli"
        titulo="PETiana"
      />
      <Petiano
        nome="Mayron Alves"
        titulo="PETiano"
      />
      <Petiano
        nome="Josué Hinrichs"
        titulo="PETiano"
      />
    </Grid>
  </Layout>
);

export default SobreNos;
