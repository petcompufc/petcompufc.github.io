import React from 'react'
import { Box, Input, Stack, Modal, Button, ModalOverlay, ModalContent, ModalBody, Text, ThemeProvider, ModalHeader, CSSReset, Heading } from '@chakra-ui/core'
import { motion } from 'framer-motion'

import icon from '../images/send-icon.png'

const MotionModalContent = motion.custom(ModalContent)

const Certificados = props => {

  return(
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
            <MotionModalContent width={['250px', '450px', '700px']} maxWidth='100%' initial={{top: '-40%'}} animate={{top: '0%'}} transition={{duration: 0.45}}>
              <ModalHeader alignSelf={'center'} fontSize={['18px', '32px']} >
                <Heading as='h4' fontSize={['24px', '32px']}>PET Certificados</Heading>
              </ModalHeader>
              
              <ModalBody marginTop='40px' alignSelf={'center'}>
                <form method="POST" name='buscar' action=''>
                  <label htmlFor='cpf' style={{fontSize:'16px'}}>Digite abaixo o seu CPF e emita já o seu certificado!</label>
                  <Stack isInline border='solid 1px #000000' borderRadius='32px' paddingX='8px' height='40px' width={['200px', '350px', '500px']} marginTop='16px'>
                    <Input id='cpf' name='chave' placeholder='CPF' height='20px'
                      style={{
                        padding: '0',
                        paddingLeft: '8px',
                        border: 'none',
                        marginTop: '8px',
                        fontSize: '24px',
                        fontFamily: 'Roboto'
                      }} 
                      _focus={{
                          outline: 'none',
                      }}
                    />
                    <input type='image' alt='Submit' src={icon} height='20px' width='20px' style={{marginTop:'8px'}}/>
                  </Stack>
                </form>
              </ModalBody>
            
            </MotionModalContent>
      </Modal>
  )

}

export default Certificados