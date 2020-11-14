/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  Heading,
  FormControl,
  FormLabel,
  Flex,
  Box,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

import icon from '../images/send-icon.png';

const MotionModalContent = motion.custom(ModalContent);

const Certificados = (props) => (
  <Modal isOpen={props.isOpen} onClose={props.onClose}>
    <ModalOverlay />
    <MotionModalContent width={['250px', '450px', '700px']} maxWidth="100%" initial={{ top: '-40%' }} animate={{ top: '0%' }} transition={{ duration: 0.45 }}>
      <ModalHeader alignSelf="center" fontSize={['18px', '32px']}>
        <Heading as="h4" fontSize={['24px', '32px']}>PET Certificados</Heading>
        <ModalCloseButton />
      </ModalHeader>

      <ModalBody marginTop="40px" alignSelf="center">
        <Box as="form" method="POST" name="buscar" action="" mb="40px">
          <FormControl isRequired>
            <FormLabel htmlFor="cpf" style={{ fontSize: '16px' }}>Digite abaixo o seu CPF e emita já o seu certificado!</FormLabel>
            <Flex border="solid 1px #000000" borderRadius="32px" px="8px" h="40px" w={['200px', '350px', '500px']} mt="16px">
              <Input
                h="20px"
                id="cpf"
                name="chave"
                placeholder="CPF"
                style={{
                  padding: '0',
                  paddingLeft: '8px',
                  border: 'none',
                  marginTop: '8px',
                  fontSize: '24px',
                  fontFamily: 'Roboto',
                }}
                _focus={{
                  outline: 'none',
                }}
              />
              <input type="image" alt="Submit" src={icon} height="20px" width="20px" style={{ marginTop: '8px' }} />
            </Flex>
          </FormControl>
        </Box>
      </ModalBody>

    </MotionModalContent>
  </Modal>
);

export default Certificados;
