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
} from '@chakra-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGithub, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

import pet_logo from '../images/logo_pet-white.png';
import dc_logo from '../images/logo_dc.png';
import ufc_logo from '../images/logo_ufc.png';

export default function Footer() {
  return (
    <ThemeProvider>
    <Box 
      bg="#37474f"
      overflow="hidden"
      minH="100%"
      maxWidth="960"
      padding="1.45rem 1.0875rem"
      color="#fff"
      width="100%"
    > 
      <Box
        width="80%"
        m="0 auto"
        boxSizing="inherit"
        fontSize="14px"
        fontFamily="Open Sans"
        >
        
        <Box 
        w="25%" 
        float="left"   
        boxSizing="border-box" 
        marginLeft="auto" >
          <Image 
            maxW="200px" 
            src={pet_logo} 
            alt="Logo do pet branca." />
        </Box>

        <List 
        width="25%" 
        marginLeft="auto" 
        float="left" 
        padding="0 0.75rem" 
        minH="1px"
        spacing="1"
        fontWeight="lighter" >
          <ListItem fontSize="18px" fontWeight="bold" >PET COMPUTAÇÃO</ListItem>
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
        w="25%" 
        marginLeft="auto" 
        float="left" 
        padding="0 0.75rem" 
        minH="1px"
        spacing="1"
        fontWeight="lighter" >
          <ListItem fontSize="18px" fontWeight="bold">Links</ListItem>
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

        <Box 
        w="25%" 
        marginLeft="auto" >
          <Link href="http://www.ufc.br/" isExternal><Image m="14px 0px 16px 0px" maxW="90%" maxH="90px" display="inline-block" src={ufc_logo} /></Link>
          <Link href="http://portal.dc.ufc.br/" isExternal><Image m="14px 0px 16px 0px" maxW="90%" maxH="90px" display="inline-block" src={dc_logo} /></Link>
        </Box>
      </Box>
    </Box>
    </ThemeProvider>
    );
  }

