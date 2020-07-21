import React from 'react';
import { Box, Flex, Input, Stack, Textarea, Heading, Button, ThemeProvider, Text } from '@chakra-ui/core'

import Layout from '../components/layout'

export default function Contato() {
    
    const [window_width, setWindow_width] = React.useState(innerWidth)
    React.useEffect(() =>{
        window.addEventListener('resize', ()=>{
            setWindow_width(innerWidth)
        })
    })

    return (
        <>
            <ThemeProvider>
                <Stack position='fixed' right='-4px' bottom='15%' padding='6px' borderTopLeftRadius='16px' borderBottomLeftRadius='16px'
                    style={{
                        backgroundColor: 'red',
                    }}
                >
                    <a href='https://github.com/petcompufc' target='_Blank'><Box as='img' src='https://github.githubassets.com/pinned-octocat.svg' height='32px' width='32px' borderRadius='50%' marginBottom='0px'/></a>
                    <Box as='img' src='https://www.facebook.com/images/fb_icon_325x325.png' height='32px' width='32px' borderRadius='50%' marginBottom='0px'/>
                    <Box as='img' src='https://instagram.com/static/images/ico/favicon-200.png/ab6eff595bb1.png' height='32px' width='32px' borderRadius='50%' marginBottom='0px'/>
                </Stack>
                <Layout id='layout'>
                    <Heading as='h2' textAlign='center' marginBottom='10%' fontFamily='Open sans' color='#5B5B5B'>
                        Fale conosco!
                    </Heading>
                    <Box width='100%' height='40%'>
                        <Stack isInline={window_width > 700} alignItems='center'>
                            <Stack>
                                <Input type='text' width='240px' borderRadius='16px' height='32px' variant placeholder='Nome' paddingX='12px'/>
                                <Input type='email' width='240px'borderRadius='16px' height='32px' variant placeholder='Email' paddingX='12px'/>
                            </Stack>
                            <Textarea borderRadius='32px' height='256px' resize='none' variant borderStyle='inset' borderColor='initial' borderWidth='3px' placeholder='Envie uma mensagem para nós!' />
                        </Stack>
                        <Flex marginTop='24px' justifyContent='center'>
                            <Button size='lg'
                                style={{
                                    backgroundColor: '#ff2222cf',
                                    borderRadius: '16px',
                                    color: '#fff',
                                    textShadow: '0px 0px 3px #000'
                                }}
                            >
                                Enviar
                            </Button>
                        </Flex>
                    </Box>
                    <Box marginTop='25%' width='100%' height='450px' >
                        <Heading as='h3' fontFamily='Open sans'> Veja a nossa localização:</Heading>
                        <Text>UFC-Campus do PICI, Departamento da computação - Bloco 10</Text>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.2941257549137!2d-38.57634104915102!3d-3.745976944298955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74ba2a575c0a3%3A0xef4b74faf96eddae!2zUEVUIENvbXB1dGHDp8OjbyBVRkM!5e0!3m2!1spt-BR!2sbr!4v1595263120997!5m2!1spt-BR!2sbr" width="100%" height="300px%" frameborder="0" border='0' allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </Box>
                </Layout>
            </ThemeProvider>
        </>
    )

}