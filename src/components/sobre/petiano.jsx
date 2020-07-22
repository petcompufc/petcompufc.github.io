import React from 'react';
import { Avatar, Flex, Heading, Text } from '@chakra-ui/core';

const Petiano = ({ imagem, nome, titulo }) => (
  <Flex direction="column" align="center" m={5}>
    <Avatar size="lg" name={nome} src={imagem} />
    <Heading as="h3" size="md" mt={3}>{nome}</Heading>
    <Text color="gray.500">{titulo}</Text>
  </Flex>
);

export default Petiano;
