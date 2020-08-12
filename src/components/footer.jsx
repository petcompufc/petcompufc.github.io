// import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { 
  Box,
  Image,
  ThemeProvider,
  List,
  ListItem,
  Link,
  Stack, 
  IconButton,
  Flex,
  Grid,
} from '@chakra-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGithub, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

import pet_logo from '../images/logo_pet-white.png';
import dc_logo from '../images/logo_dc.png';
import ufc_logo from '../images/logo_ufc.png';

export default function Footer() {

  const [width, setWidth] = React.useState(innerWidth);
  React.useEffect(() => {
    window.addEventListener('resize', ()=>{
      setWidth(innerWidth)
    })
  })

  return (
    <ThemeProvider>
    <Box 
      bg="#37474f"
      overflow="hidden"
      maxWidth="960"
      padding="1.45rem 1.0875rem"
      color="#fff"
      width="100%"
    > 
      <Grid
        maxW='1280px'
        w='100%'
        mx="auto"
        fontSize="16px"
        fontFamily="Open Sans"
        templateColumns={width>900? 'repeat(4, 1fr)': width>600? 'repeat(2, 1fr)': 'repeate(1, 1fr)'}
        >
        
        <Box 
        mx='auto'
        float="left"   
        boxSizing="border-box" 
        >
          <Image
            w='90%'
            maxW="300px" 
            src={pet_logo} 
            alt="Logo do pet branca." />
        </Box>

        <List
        mx='auto'
        float="left" 
        minH="1px"
        spacing="1"
        fontWeight="lighter" >
          <ListItem fontSize="24px" fontWeight="bold" >PET COMPUTAÇÃO</ListItem>
          <ListItem>Av. Humberto Monte, s/n</ListItem>
          <ListItem marginTop="-10px">UFC - Campus do Pici</ListItem>
          <ListItem marginTop="-10px">Departamento da Computação</ListItem>
          <ListItem marginTop="-10px">Bloco 910</ListItem>
          <ListItem marginTop="-10px">petcomp@ufc.br</ListItem>
          <ListItem marginTop="10px" fontSize="25px"> 
            <Link href='https://github.com/petcompufc' marginRight="5px" isExternal color="white" textDecoration="initial" > <FontAwesomeIcon icon={faGithub}/></Link>
            <Link href='https://www.facebook.com/PETCompUFC/' marginRight="5px" marginLeft="5px" isExternal color="white"><FontAwesomeIcon icon={faFacebookF}/></Link>
            <Link href="https://www.instagram.com/petcompufc" marginRight="5px" marginLeft="5px" isExternal color="white"><FontAwesomeIcon icon={faInstagram} /></Link>
            <Link href="https://www.youtube.com/user/petcompufc/videos" marginRight="5px" marginLeft="5px" isExternal color="white"><FontAwesomeIcon icon={faYoutube} /></Link>
            <Link href="mailto:petcomp@ufc.br" marginLeft="5px" isExternal color="white"><FontAwesomeIcon icon={faMailBulk} /></Link>
          </ListItem>
        </List>

        <List
        mx='auto'
        float="left"
        minH="1px"
        spacing="1"
        fontWeight="lighter" >
          <ListItem fontSize="24px" fontWeight="bold">Links</ListItem>
          <ListItem> 
            <Link href="http://www.ufc.br/" isExternal color="white">Portal UFC</Link>
          </ListItem>
          <ListItem marginTop="-10px"> 
            <Link href="http://portal.dc.ufc.br/" isExternal color="white">Departamento de Computação</Link> 
          </ListItem>
          <ListItem marginTop="-10px"> 
            <Link href="https://cc.ufc.br/" isExternal color="white">Curso de Ciência da Computação</Link> 
          </ListItem>
        </List>

        <Stack
        mx='auto' >
          <Link mx='auto' w='90%' maxW='300px' href="http://www.ufc.br/" isExternal><Image src={ufc_logo} /></Link>
          <Link mx='auto' w='85%' maxW='275px' href="http://portal.dc.ufc.br/" isExternal><Image src={dc_logo} /></Link>
        </Stack>
      </Grid>
    </Box>
    </ThemeProvider>
    );
  }

