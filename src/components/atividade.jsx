import {
  Avatar, Box, CloseButton, Flex, Heading,
} from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';

const Atividade = ({name, img, lore}) => {
  const [top, setTop] = React.useState('0%');

  return (
    <Box m="16px" w="280px" h="310px" overflow="hidden">
      <Flex>
        <Heading as="h3" mx="auto" fontSize="32px">
          {name}
        </Heading>
      </Flex>
      <Box _hover={{ cursor: 'pointer' }}>
        <Avatar
          name="Coding"
          src={img}
          w="256px"
          h="256px"
          pt="24px"
          ml="8px"
          bg="#fff"
          boxShadow="#000000aa 1px 1px 2px"
          onClick={() => setTop('-100%')}
          _hover={{ cursor: 'pointer' }}
        />
      </Box>
      <Box
        h="96%"
        mx="4px"
        pl="3%"
        top={top}
        mt="16px"
        transition="0.4s"
        overflowY="scroll"
        position="relative"
        backgroundColor="#FFF"
        boxShadow="#aaa 0 0 2px"
      >
        <Flex justifyContent="space-between">
          <Heading as="h3" fontSize="32px">{name}</Heading>
          <CloseButton my="auto" mr="4px" onClick={() => setTop('0%')} />
        </Flex>
        {lore}
      </Box>
    </Box>
  );
};

Atividade.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  lore: PropTypes.string.isRequired,
};

export default Atividade;
