import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Box,
  Link,
  Flex,
  Text,
  Image,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
} from '@chakra-ui/react';

import Modal from './modal';
import logo from '../images/logo-pet-red.png';

const NavLink = ({ children, href, onClick }) => (
  <Link
    as={GatsbyLink}
    to={href}
    onClick={onClick}
    display="grid"
    alignItems="center"
    p={2}
    transition="0.3s all"
    _hover={{ bg: '#EDF2F7' }}
    _focus={{ boxShadow: 'none' }}
  >
    <Text
      fontWeight="semibold"
      color="red.500"
    >
      { children }
    </Text>
  </Link>
);

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

NavLink.defaultProps = {
  onClick: () => {},
};

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const toggleModal = () => setIsOpenModal(!isOpenModal);
  const btnRef = React.useRef();
  return (
    <Box
      as="header"
    >
      <Flex as="nav" w="100%" bg="white" boxShadow="md" justify="space-between">
        <Link
          as={GatsbyLink}
          to="/"
          my={2}
          ml={10}
          maxW="3rem"
          _hover={{
            transform: 'rotate(25deg)',
          }}
        >
          <Image
            src={logo}
            alt="Logo PET"
            backgroundSize="contain"
            m="0"
          />
        </Link>

        <Box ref={btnRef} display={{ base: 'flex', lg: 'none' }} mr={3} onClick={onOpen}>
          <svg
            fill="black"
            width="20px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader
              borderBottomWidth="2px"
            >
              PET Computação
            </DrawerHeader>
            <DrawerBody>
              <NavLink href="/">Inicio</NavLink>
              <NavLink href="/sobre/">Sobre</NavLink>
              <NavLink href="/atividades/">Atividades</NavLink>
              <NavLink href="/blog/">Blog</NavLink>
              <NavLink href="#" onClick={toggleModal}>Certificados</NavLink>
              <Modal isOpen={isOpenModal} onOpen={toggleModal} onClose={toggleModal} />
              <NavLink href="/emprestimos/">Empréstimos</NavLink>
              <NavLink href="/contato/">Contato</NavLink>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        <Box display={{ base: 'none', lg: 'flex' }} mr={10} wrap="wrap">
          <NavLink href="/">Inicio</NavLink>
          <NavLink href="/sobre/">Sobre</NavLink>
          <NavLink href="/atividades/">Atividades</NavLink>
          <NavLink href="/blog/">Blog</NavLink>
          <NavLink href="#" onClick={toggleModal}>Certificados</NavLink>
          <Modal isOpen={isOpenModal} onOpen={toggleModal} onClose={toggleModal} />
          <NavLink href="/emprestimos/">Empréstimos</NavLink>
          <NavLink href="/contato/">Contato</NavLink>
        </Box>
      </Flex>
    </Box>
  );
}

export default Header;
