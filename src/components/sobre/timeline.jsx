import React from 'react';
import PropTypes from 'prop-types';

import {
  useColorModeValue,
  Heading,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';

const Evento = ({ children }) => (
  <ListItem
    borderRadius={5}
    bg={useColorModeValue('white', 'blue.900')}
    boxShadow="md"
    p={3}
    pos="relative"
    marginLeft={4}
    my={3}
    maxW="50em"
    transition="all .4s"
    _even={{ backgroundColor: useColorModeValue('red.200', 'red.800') }}
    _hover={{
      boxShadow: 'lg',
      transform: 'translateY(-10px)',
      '&:after': {
        transform: 'translateY(10px)',
      },
    }}
    _after={{
      borderRadius: '100%',
      content: '""',
      position: 'absolute',
      left: -6,
      bottom: '50%',
      width: 4,
      height: 4,
      backgroundColor: 'red.500',
      transition: 'transform .4s',
    }}
  >
    {children}
  </ListItem>
);

Evento.propTypes = {
  children: PropTypes.element.isRequired,
};

const Timeline = ({ eventos }) => (
  <List
    as="ol"
    maxWidth="fit-content"
    mx="auto"
    position="relative"
    _before={{
      bg: 'red.500',
      content: "''",
      position: 'absolute',
      left: '-2px',
      width: '4px',
      height: '100%',
    }}
  >
    {eventos.map((evento) => (
      <Evento key={evento.acontecimento}>
        <Heading as="h4" size="md">{evento.ano}</Heading>
        <Text>{evento.acontecimento}</Text>
      </Evento>
    ))}
  </List>
);

Timeline.propTypes = {
  eventos: PropTypes.arrayOf(PropTypes.shape({
    ano: PropTypes.number,
    acontecimento: PropTypes.string,
  })).isRequired,
};

export default Timeline;
