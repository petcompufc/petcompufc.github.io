import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import { typography } from 'styled-system'

import Layout from '../components/layout';
import Manual from '../ManualdeEmprestimo.pdf';

import {
    Button,
    ThemeProvider,
    Text,
    Link,
} from '@chakra-ui/core'


export default function Emprestimo() {
    return (
        <ThemeProvider>
            <Layout>
                <Text
                    maxW="700px"
                    margin="20px auto 0"
                    padding="20px"
                    background="#fff"
                >
                    <Text
                    color="#263238"
                    fontFamily="Open Sans"
                    margin="1.14rem 0 0.912rem 0"
                    fontSize="2.28rem"
                    lineHeight="110%"
                    >
                        <h1>Empréstimos</h1>
                    </Text>

                    <Text
                    height="1px"
                    overflow="hidden"
                    bg="#e0e0e0"
                    ></Text>

                    <Text 
                    fontFamily="Open Sans"
                    color="#666"
                    lineHeight="24px"
                    mt="5px"
                    >
                        <p>O PET  possui um acervo de itens que podem ser de interesse da comunidade, desde livros-texto de algumas disciplinas a componentes de arduino, que são divididos entre livre uso e uso restrito.</p>

                        <p>Para pegar um desses itens emprestado por tempo limitado, basta preencher o formulário e entregar a um petiano na sala do PET, que avaliaremos a solicitação.</p>

                        <p>Caso deseje um item que já foi emprestado, há a possibilidade de entrar para a fila de espera, então, assim que o item estiver disponível, mandaremos um e-mail e você terá 1 dia útil de exclusividade para garantí-lo. Além disso, se não houver lista de espera, é possível solicitar a renovação do empréstimo, porém com o máximo de 5 vezes.</p>

                        <p>Importante informar que prezamos bastante pela integridade dos itens, assim como com prazos de entrega, por isso possuímos um sistema de punição, que pode acarretar em banimento do usuário e ele não poderá realizar empréstimos futuros.</p>

                        <p>Se quer saber mais detalhes, ou até mesmo imprimir o formulário de empréstimo, acesse o manual no link.</p>

                        <Button
                            _hover={{bg: "#a40000"}}
                            _active={{bg: "#8b0000" }}
                            variantColor="red"
                        >
                            <Link color="white" href={Manual} isExternal> Manual de Empréstimos </Link> </Button>
                    </Text>
                </Text>
            </Layout>
        </ThemeProvider>
    );
}
