import React from 'react'
import { Box, Input, Stack, Modal, Button, ModalOverlay, ModalContent, ModalBody, Text, ThemeProvider, ModalHeader, CSSReset, Heading } from '@chakra-ui/core'
import icon from '../images/send-icon.png'

const Certificados = props => {


  function Animation() {
    topPosStr = (-startPos) + '%'
    intervalID = setInterval(loop, 1000 / fps)
  }
  function loop() {
    topPos = -(startPos - count * (startPos / frames))
    topPosStr = topPos + '%'
    try{
        ref.current.style.top = topPosStr
    }catch(ex){
        clearInterval(intervalID)
        count = 0
    }
    if(count === frames){
        clearInterval(intervalID)
        count = 0
    }
    count++
  }

  var startPos = 40
  var topPos = 0
  var topPosStr = '0%'
  var fps = 60
  var duration = 0.4 // in seconds
  var frames = fps * duration
  var count = 0
  var intervalID
  var ref = React.useRef()
  Animation()


  return(
    <>
    <ThemeProvider>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent width={['250px', '450px', '700px']} maxWidth='100%' top={topPosStr} ref={ref}>
          
          <ModalHeader alignSelf={'center'} fontSize={['18px', '32px']}>
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
        
        </ModalContent>
      </Modal>
    </ThemeProvider>
    </>
  )

}

export default Certificados