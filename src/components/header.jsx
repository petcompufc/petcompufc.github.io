import { Link as GatsbyLink } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
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
  IconButton,
  DrawerCloseButton
} from '@chakra-ui/react'
import { HiMenu } from 'react-icons/hi'

import Modal from './modal'
import logo from '../images/logo-pet-red.png'

const NavLink = ({ children, href, onClick }) => (
  <Link
    as={GatsbyLink}
    to={href}
    onClick={onClick}
    display='grid'
    alignItems='center'
    p={2}
    transition='0.3s all'
    _hover={{ bg: '#EDF2F7' }}
    _focus={{ boxShadow: 'none' }}
  >
    <Text
      fontWeight='semibold'
      color='red.500'
    >
      {children}
    </Text>
  </Link>
)

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

NavLink.defaultProps = {
  onClick: () => {}
}

function Header () {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isOpenModal, setIsOpenModal] = React.useState(false)
  const toggleModal = () => setIsOpenModal(!isOpenModal)
  const btnRef = React.useRef()
  return (
    <Box
      as='header'
    >
      <Flex alignItems='center' as='nav' w='100%' bg='white' boxShadow='md' justify='space-between'>
        <Link
          as={GatsbyLink}
          to='/'
          my={2}
          ml={10}
          maxW='3rem'
          _hover={{
            transform: 'rotate(25deg)'
          }}
        >
          <Image
            src={logo}
            alt='PET Computação UFC'
            backgroundSize='contain'
            m='0'
          />
        </Link>

        <IconButton
          aria-label='Abrir Menu'
          display={{ base: 'flex', lg: 'none' }}
          fontSize='2xl'
          icon={<HiMenu />}
          mr={3}
          onClick={onOpen}
          ref={btnRef}
          size='lg'
          variant='link'
        />
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader
              borderBottomWidth='2px'
            >
              PET Computação
            </DrawerHeader>
            <DrawerBody>
              <NavLink href='/'>Inicio</NavLink>
              <NavLink href='/sobre/'>Sobre</NavLink>
              <NavLink href='/atividades/'>Atividades</NavLink>
              <NavLink href='/blog/'>Blog</NavLink>
              <NavLink href='#' onClick={toggleModal}>Certificados</NavLink>
              <Modal isOpen={isOpenModal} onOpen={toggleModal} onClose={toggleModal} />
              <NavLink href='/emprestimos/'>Empréstimos</NavLink>
              <NavLink href='/contato/'>Contato</NavLink>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        <Box display={{ base: 'none', lg: 'flex' }} mr={10} wrap='wrap'>
          <NavLink href='/'>Inicio</NavLink>
          <NavLink href='/sobre/'>Sobre</NavLink>
          <NavLink href='/atividades/'>Atividades</NavLink>
          <NavLink href='/blog/'>Blog</NavLink>
          <NavLink href='#' onClick={toggleModal}>Certificados</NavLink>
          <Modal isOpen={isOpenModal} onOpen={toggleModal} onClose={toggleModal} />
          <NavLink href='/emprestimos/'>Empréstimos</NavLink>
          <NavLink href='/contato/'>Contato</NavLink>
        </Box>
      </Flex>
    </Box>
  )
}

export default Header
