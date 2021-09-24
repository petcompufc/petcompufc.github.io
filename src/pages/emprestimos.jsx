import React from 'react';
import {
  Box,
  Container,
  Text,
  Link,
  Icon,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Divider,
} from '@chakra-ui/react';
import { FiChevronRight } from 'react-icons/fi';

import Layout from '../components/layout';
import Manual from '../ManualdeEmprestimo.pdf';
import SearchOptimization from '../components/searchOptimization';

export default function Emprestimo() {
  return (
    <Layout>
      <SearchOptimization
        title="Empréstimos"
        description="Veja como funciona o sistema de empréstimos do PET Computação"
      />
      <Box
        padding="2%"
        fontFamily="Open Sans"
      >
        <Heading
          as="h2"
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
          separator={<Icon as={FiChevronRight} color="gray.400" size="1em" />}
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
        maxWidth="50em"
        mt={1}
        mb={4}
      >
        O PET possui um acervo de itens que podem ser de interesse da comunidade, desde
        livros-texto de algumas disciplinas a componentes de arduino, que são divididos entre
        livre uso e uso restrito.
      </Text>
      <Text
        maxWidth="50em"
        mb={4}
      >
        Para pegar um desses itens emprestado por tempo limitado, basta preencher o formulário e
        entregar a um petiano na sala do PET, que avaliaremos a solicitação.
      </Text>
      <Text
        maxWidth="50em"
        mb={4}
      >
        Caso deseje um item que já foi emprestado, há a possibilidade de entrar para a fila de
        espera, então, assim que o item estiver disponível, mandaremos um e-mail e você terá 1 dia
        útil de exclusividade para garantí-lo. Além disso, se não houver lista de espera, é
        possível solicitar a renovação do empréstimo, porém com o máximo de 5 vezes.
      </Text>
      <Text
        maxWidth="50em"
        mb={4}
      >
        Importante informar que prezamos bastante pela integridade dos itens, assim como com prazos
        de entrega, por isso possuímos um sistema de punição, que pode acarretar em banimento do
        usuário e ele não poderá realizar empréstimos futuros.
      </Text>
      <Text
        maxWidth="50em"
        mb={4}
      >
        Se deseja saber mais detalhes, ou até mesmo imprimir o formulário de empréstimo, acesse o
        manual abaixo
      </Text>

      <Container as="object" data={Manual} maxW="container.sm" minH="container.sm" type="application/pdf">
        <Link href={Manual} isExternal> Manual de Empréstimos </Link>
      </Container>

    </Layout>
  );
}
