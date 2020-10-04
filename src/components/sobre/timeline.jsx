import React from 'react';

import {
  Tabs, TabList, TabPanels, TabPanel, Tab, Box,
} from '@chakra-ui/core';

const Timeline = () => (
  <Box display="flex">
    <Tabs variant="enclosed">
      <TabList>
        <Tab _selected={{ color: 'white', bg: 'red.400' }}>O que é?</Tab>
        <Tab _selected={{ color: 'white', bg: 'red.400' }}>Quando foi criado?</Tab>
        <Tab _selected={{ color: 'white', bg: 'red.400' }}>O PET na Computação da UFC</Tab>
        <Tab _selected={{ color: 'white', bg: 'red.400' }}>Nossos projetos</Tab>
      </TabList>
      <TabPanels minHeight="250px">
        <TabPanel>
          <br />
          <p>
            O Programa de Educação Tutorial (PET) é um programa do Governo Federal de estímulo a atividades de pesquisa,
            extensão e ensino, conhecidos como os três pilares do PET, para universitários
            no nível de graduação.  O programa é subordinado à Secretaria de Ensino Superior
            (SESu) do Ministério da Educação (MEC).
          </p>
        </TabPanel>
        <TabPanel>
          <br />
          <p>
            O PET foi criado em 1979 no governo do general João Baptista Figuereido com o nome original de
            Programa Especial de Treinando. Até 1999, o programa esteve submetido à CAPES, passando depois
            para o Ministério da Educação. Entre 1995 e 2003, o governo tentou por diversas vezes extinguir o programa
            sob alegação de que era oneroso aos cofres públicos.
          </p>
        </TabPanel>
        <TabPanel>
          <br />
          <p>
            No curso de Ciência da Computação, da Universidade Federal do Ceará, o PET foi fundado em 1992 pelo professor
            Riverson, sendo o primeiro tutor(1992-1996), seguido do professor Tarcísio(1996-1997), o professor Marcelino
            Pequeno (1997-2016) e depois pelo professor Lincoln Rocha (2016 - atualmente).
          </p>
        </TabPanel>
        <TabPanel>
          <br />
          <p>
            *Em 2000-2003, houve a aprovação do primeiro projeto de extensão da Computação, Mente Aberta.
            Esse projeto se destacou bastante e até hoje é tido como um dos grandes projetos que nasceram dentro do PET;
            <br />
            *Idealização da Avaliação dos Professores;
            <br />
            *Criação da Olimpíada Cearense de Informática;
            <br />
            *Participação na Reforma Curricular do Curdo de graduação;
            <br />
            *Projeto Coding, que visa ensinar programação aos alunos de ensino médio das escolas municipais de Fortaleza.
          </p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Box>
);

export default Timeline;
