import React from 'react';
import PropTypes from 'prop-types';

import {
  Heading,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';

const Evento = ({ children }) => (
  <ListItem
    borderRadius={5}
    bg="white"
    boxShadow="sm"
    p={3}
    pos="relative"
    marginLeft={4}
    maxW="100%"
    transition="all .4s"
    _even={{ backgroundColor: 'red.100' }}
    _hover={{
      boxShadow: 'md',
      transform: 'translateY(-5%)',
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
    css={{
      '&:before': {
        background: 'red',
        content: "''",
        position: 'absolute',
        left: -2,
        width: 4,
        height: '100%',
      },
    }}
    position="relative"
    w="100%"
  >
    {eventos.map((evento) => (
      <Evento>
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
