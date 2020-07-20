import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { 
  Box,
  Image,
  List,
  ListItem,
  Stack, 
} from '@chakra-ui/core';

import pet_logo from '../images/logo_pet-white.png';
import dc_logo from '../images/logo_dc.png';
import ufc_logo from '../images/logo_ufc.png';

export default function Footer() {
  return (
    <Box 
      bg="#37474f"
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
          <ListItem fontSize="18px" fontWeight="bold">PET COMPUTAÇÃO</ListItem>
          <ListItem>Av. Humberto Monte, s/n</ListItem>
          <ListItem>UFC - Campus do Pici</ListItem>
          <ListItem>Departamento da Computação</ListItem>
          <ListItem>Bloco 910</ListItem>
          <ListItem>petcomp@ufc.br</ListItem>
          <ListItem> <Stack isInline></Stack> </ListItem>
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
            <Link>
            Portal UFC
            </Link>
          </ListItem>
          <ListItem> 
            <Link>
            Departamento de Computação
            </Link> 
          </ListItem>
          <ListItem> <Link>Curso de Ciência da Computação</Link> </ListItem>
        </List>

        <Box 
        w="25%" 
        marginLeft="auto" >
          <Link href="/"> <Image m="14px 0px 16px 0px" maxW="90%" maxH="90px" display="inline-block" src={ufc_logo} /> </Link>
          <Link href="/"> <Image m="14px 0px 16px 0px" maxW="90%" maxH="90px" display="inline-block" src={dc_logo} /> </Link>
        </Box>
      </Box>
    </Box>
    );
  }

