import React from 'react';

import Layout from '../components/layout';
import Manual from '../ManualdeEmprestimo.pdf';

import {
  Box,
  Button,
  Text,
  Link,
  Icon,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Divider,
} from '@chakra-ui/react';

import {
  ChevronRightIcon,
} from '@chakra-ui/icons';

export default function Emprestimo() {
  return (
    <Layout>
      <Box
        padding="2%"
        fontFamily="Open Sans"
      >
        <Heading
        as="h2"
        color="#263238"
        mt="6%"
        mb="1%"
        >
          Empréstimos
        </Heading>

        <Divider borderColor="#e0e0e0" />

        <Breadcrumb
          spacing="8px"
          fontWeight="bold"
          fontSize="16px"
          separator={<ChevronRightIcon color="#D3D3D3" size="20px" verticalAlign="-2px" />} 
          >
          <BreadcrumbItem>
            <BreadcrumbLink color="#d50000" href="/">Página Inicial</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink color="#A9A9A9" href="/emprestimos">Empréstimos</BreadcrumbLink>
          </BreadcrumbItem>

        </Breadcrumb>
      </Box>

      <Text
      paddingX="2%" 
      color="#666"
      mt="5px"
      textAlign="justify"
      >
        O PET possui um acervo de itens que podem ser de interesse da comunidade, desde livros-texto de algumas disciplinas a componentes de arduino, que são divididos entre livre uso e uso restrito.
        <br />
        <br />
        Para pegar um desses itens emprestado por tempo limitado, basta preencher o formulário e entregar a um petiano na sala do PET, que avaliaremos a solicitação.
        <br />
        <br />
        Caso deseje um item que já foi emprestado, há a possibilidade de entrar para a fila de espera, então, assim que o item estiver disponível, mandaremos um e-mail e você terá 1 dia útil de exclusividade para garantí-lo. Além disso, se não houver lista de espera, é possível solicitar a renovação do empréstimo, porém com o máximo de 5 vezes.
        <br />
        <br />
        Importante informar que prezamos bastante pela integridade dos itens, assim como com prazos de entrega, por isso possuímos um sistema de punição, que pode acarretar em banimento do usuário e ele não poderá realizar empréstimos futuros.
        <br />
        <br />
        Se deseja saber mais detalhes, ou até mesmo imprimir o formulário de empréstimo, acesse o manual.
        <br />
        <br />
        <Button
          _hover={{ bg: '#a40000' }}
          _active={{ bg: '#8b0000' }}
          colorScheme="red"
        >
          <Link color="white" href={Manual} isExternal> Manual de Empréstimos </Link>
        </Button>
      </Text>
        <br />
        <br />
      
    </Layout>
  );
}
