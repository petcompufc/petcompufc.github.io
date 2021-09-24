import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Box,
  Link,
  Flex,
  useColorModeValue,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  IconButton,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { HiMenu } from 'react-icons/hi';
import { StaticImage } from 'gatsby-plugin-image';
import Modal from './modal';

const NavLink = ({ children, href, onClick }) => (
  <Link
    as={GatsbyLink}
    to={href}
    onClick={onClick}
    display="grid"
    alignItems="center"
    p={2}
    transition="0.3s all"
    fontWeight="semibold"
    color={useColorModeValue('red.500', 'white')}
    _hover={{ bg: useColorModeValue('gray.100', 'gray.800') }}
    _focus={{ boxShadow: 'none' }}
  >
    {children}
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
      pos="sticky"
      top="0"
      zIndex="sticky"
    >
      <Flex
        alignItems="center"
        as="nav"
        bg={useColorModeValue('white', 'blue.900')}
        boxShadow="md"
        h={16}
        justify="space-between"
        w="100%"
      >
        <Box ml={3} w={12}>
          <StaticImage
            alt="PET Computação UFC"
            src="../images/logo-pet-red.png"
          />
        </Box>

        <IconButton
          aria-label="Abrir Menu"
          display={{ base: 'flex', lg: 'none' }}
          fontSize="2xl"
          icon={<HiMenu />}
          mr={3}
          onClick={onOpen}
          ref={btnRef}
          size="lg"
          variant="link"
        />
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader
              borderBottomWidth="2px"
            >
              PET Computação
            </DrawerHeader>
            <DrawerBody>
              <NavLink href="/">Início</NavLink>
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

        <Box display={{ base: 'none', lg: 'flex' }} h="100%" mr={10}>
          <NavLink href="/">Início</NavLink>
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
