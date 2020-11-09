import React from 'react';
import {
  Box,
  Flex,
  Input,
  Stack,
  Textarea,
  Heading,
  Button,
  ThemeProvider,
  Text,
  Divider,
  Breadcrumb,
  Icon,
  BreadcrumbItem,
  BreadcrumbLink,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/core';

import Layout from '../components/layout';
import Midias from '../components/midias';

export default function Contato() {
  const hasWindow = (typeof window !== 'undefined');
  const [windowWidth, setWindowWidth] = React.useState(hasWindow ? window.innerWidth : 701);

  React.useEffect(() => {
    if (!hasWindow) return;

    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
  });

  return (
    <ThemeProvider>
      <Layout id="layout">

        <Box paddingX="2%" bg="#25BDF5">
          <Heading as="h2" color="#263238" marginTop="6%">Contato</Heading>
          <Divider />
          <Breadcrumb spacing="8px" separator={<Icon color="#D3D3D3" size="20px" verticalAlign="-5px" name="chevron-right" />} fontSize="16px" fontWeight="bold">
            <BreadcrumbItem>
              <BreadcrumbLink color="#d50000" href="/">Página Inicial</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink color="#888" href="/Contato">Contato</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>

        <Box bg="#B0B0B0">
          <Heading as="h2" textAlign="center" marginTop="5%" fontFamily="Open sans" color="#5A5A5A">
            Fale conosco!
          </Heading>
          <Box as="form" method="POST" w="100%" h="40%" padding="5%">
            <FormControl isRequired>
              <Stack isInline={windowWidth > 700} alignItems="center" spacing="28px">
                <Stack>
                  <InputGroup>
                    <Input id="name" name="name" type="text" w="240px" h="32px" borderRadius="16px" boxShadow="inset 2px 2px 3px 0.2px #00000040" placeholder="Nome" pl="12px" pr="36px" />
                    <InputRightElement><FormLabel htmlFor="name" /></InputRightElement>
                  </InputGroup>
                  <InputGroup>
                    <Input id="email" name="email" type="email" w="240px" h="32px" borderRadius="16px" boxShadow="inset 2px 2px 3px 0.2px #00000040" placeholder="Email" pl="12px" pr="36px" />
                    <InputRightElement><FormLabel htmlFor="email" /></InputRightElement>
                  </InputGroup>
                </Stack>
                <Stack w="100%">
                  <InputGroup>
                    <Textarea id="message" name="message" borderRadius="32px" top="-20px" h="256px" resize="none" placeholder="Envie uma mensagem para nós!" boxShadow="inset 2px 2px 3px 0.2px #00000040" />
                    <InputRightElement top="-16px"><FormLabel htmlFor="message" /></InputRightElement>
                  </InputGroup>
                </Stack>
              </Stack>
              <Flex marginTop="24px" justifyContent="center">
                <Button
                  type="submit"
                  variantColor="red"
                  boxShadow="2px 2px 3px #000"
                  backgroundImage="url(https://live.staticflickr.com/2329/2240956835_9463c7125b_b.jpg)"
                  _focus={{ outline: 'none' }}
                  _active={{
                    boxShadow: 'inset 2px 2px 3px #000',
                    textShadow: '0px 0px 7px #000',
                  }}
                >
                  Enviar
                </Button>
              </Flex>
            </FormControl>
          </Box>
        </Box>

        <Box paddingLeft="5%" marginTop="10%" w="100%" h="450px">
          <Heading as="h3" fontFamily="Open sans"> Veja a nossa localização:</Heading>
          <Text>UFC-Campus do PICI, Departamento da computação - Bloco 910</Text>
          <Box as="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.2941257549137!2d-38.57634104915102!3d-3.745976944298955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74ba2a575c0a3%3A0xef4b74faf96eddae!2zUEVUIENvbXB1dGHDp8OjbyBVRkM!5e0!3m2!1spt-BR!2sbr!4v1595263120997!5m2!1spt-BR!2sbr" w="90%" h="300px" alt="demo" />
        </Box>

        <Midias />

      </Layout>
    </ThemeProvider>
  );
}
