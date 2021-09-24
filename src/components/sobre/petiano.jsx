import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

const Petiano = ({ imagem, nome, titulo }) => (
  <Flex direction="column" align="center" m={5}>
    <Avatar size="lg" name={nome} src={imagem} />
    <Heading textAlign="center" as="h3" size="md" mt={3}>{nome}</Heading>
    <Text color="gray.500">{titulo}</Text>
  </Flex>
);

Petiano.propTypes = {
  imagem: PropTypes.string,
  nome: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
};

Petiano.defaultProps = {
  imagem: '',
};

export default Petiano;
