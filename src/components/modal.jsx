import React from 'react'
import PropTypes from 'prop-types'
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  Heading,
  FormControl,
  FormLabel,
  Box
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FiSend } from 'react-icons/fi'

const MotionModalContent = motion(ModalContent)

const Certificados = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <MotionModalContent width={['250px', '450px', '700px']} maxWidth='100%' initial={{ top: '-40%' }} animate={{ top: '0%' }} transition={{ duration: 0.45 }}>
      <ModalHeader alignSelf='center' fontSize={['18px', '32px']}>
        <Heading as='h4' fontSize={['24px', '32px']}>PET Certificados</Heading>
        <ModalCloseButton />
      </ModalHeader>

      <ModalBody marginTop='40px' alignSelf='center'>
        <Box as='form' method='POST' name='buscar' action='' mb='40px'>
          <FormControl isRequired>
            <FormLabel htmlFor='cpf' style={{ fontSize: '16px' }}>Digite abaixo o seu CPF e emita já o seu certificado!</FormLabel>
            <InputGroup
              alignItems='center'
              border='1px solid #000'
              borderRadius='full'
              display='flex'
              mt={3}
              px={5}
            >
              <Input
                id='cpf'
                name='chave'
                placeholder='CPF'
                padding='0'
                paddingLeft='8px'
                border='none'
                fontSize='md'
                _focus={{
                  outline: 'none'
                }}
              />
              <InputRightElement>
                <IconButton
                  aria-label='Buscar certificados'
                  icon={<FiSend />}
                  isRound
                  type='submit'
                  variant='unstyled'
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </Box>
      </ModalBody>

    </MotionModalContent>
  </Modal>
)

Certificados.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Certificados
