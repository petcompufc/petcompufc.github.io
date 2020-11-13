import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Manual from '../ManualdeEmprestimo.pdf';

import {
    Button,
    ThemeProvider,
    Text,
    Link,
    Icon,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Heading,
    Divider,
} from '@chakra-ui/react'


export default function Emprestimo() {
    return (
        <ThemeProvider>
            <Layout>
                <Text 
                    margin="20px -0.75rem -0.75rem 20px"
                    padding="20px"
                    background="#fff"
                    fontFamily="Open Sans"
                >
                    <Heading
                        color="#263238"
                        margin="1.14rem 0 0.912rem 0"
                        fontSize="2.28rem"
                        lineHeight="110%"
                    >
                        Empréstimos
                    </Heading>

                    <Divider borderColor="#e0e0e0" />

                    <Breadcrumb
                        spacing="8px"
                        fontWeight="bold"
                        fontSize="16px"
                        separator={<Icon color="#D3D3D3" name="chevron-right" size="20px" verticalAlign="-18%"/>}
                    >
                        <BreadcrumbItem>
                            <BreadcrumbLink color="#d50000" href="/">Página Inicial</BreadcrumbLink>
                        </BreadcrumbItem>
                             
                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink color="#A9A9A9" href="/emprestimos">Empréstimos</BreadcrumbLink>
                        </BreadcrumbItem>
                                
                    </Breadcrumb>

                    <Text 
                        color="#666"
                        lineHeight="24px"
                        mt="5px"
                    >
                        O PET  possui um acervo de itens que podem ser de interesse da comunidade, desde livros-texto de algumas disciplinas a componentes de arduino, que são divididos entre livre uso e uso restrito.
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
                            _hover={{bg: "#a40000"}}
                            _active={{bg: "#8b0000" }}
                            colorScheme="red"
                        >
                            <Link color="white" href={Manual} isExternal> Manual de Empréstimos </Link> </Button>
                    </Text>
                    <br />
                    <br />
                </Text>
            </Layout>
        </ThemeProvider>
    );
}
