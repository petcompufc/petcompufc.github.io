import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Link,
  Flex,
  Text,
  Image,
} from '@chakra-ui/core';

import logo from '../images/logo-pet-red.png';

const red = 'red.500';

const NavLink = ({ children, href }) => (
  <Link
    as={GatsbyLink}
    to={href}
    display="grid"
    alignItems="center"
    px={3}
    transition="0.3s all"
    _hover={{ bg: '#EDF2F7' }}
    _focus={{ boxShadow: 'none' }}
  >
    <Text
      fontFamily="Open Sans"
      fontWeight="semibold"
      color={red}
    >
      { children }
    </Text>
  </Link>
);

const Header = ({ siteTitle }) => (
  <header>
    <Flex as="nav" w="100%" bg="white" boxShadow="md" justify="space-between">
      <Link as={GatsbyLink} to="/" my={2} ml="5%" maxW="3rem">
        <Image
          src={logo}
          alt="Logo PET"
          backgroundSize="contain"
          m="0"
        />
      </Link>

      <Flex mr="5%" wrap="wrap">
        <NavLink href="/">Inicio</NavLink>
        <NavLink href="/">Sobre</NavLink>
        <NavLink href="/">Atividades</NavLink>
        <NavLink href="/">Blog</NavLink>
        <NavLink href="/">Certificados</NavLink>
        <NavLink href="/">Emprestimos</NavLink>
        <NavLink href="/">Contato</NavLink>
      </Flex>
    </Flex>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
