import React from 'react';

import {
  Box,
  Image,
  List,
  ListItem,
  Link,
  Stack,
  Grid,
} from '@chakra-ui/react';

import { RiFacebookCircleLine, RiGithubLine, RiInstagramLine, RiMailSendLine, RiYoutubeLine } from 'react-icons/ri';

import PETLogo from '../images/logo_pet-white.png';
import DCLogo from '../images/logo_dc.png';
import UFCLogo from '../images/logo_ufc.png';

export default function Footer() {
  return (
    <Box
      as="footer"
      bg="#37474f"
      overflow="hidden"
      maxWidth="960"
      padding="1.45rem 1.0875rem"
      color="#fff"
      width="100%"
    >
      <Grid
        maxW="1280px"
        w="100%"
        mx="auto"
        fontSize="16px"
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
      >

        <Box
          mx="auto"
          float="left"
          boxSizing="border-box"
        >
          <Image
            w="90%"
            maxW="300px"
            src={PETLogo}
            alt="Logo do pet branca."
          />
        </Box>

        <List
          mx="auto"
          float="left"
          minH="1px"
          spacing="1"
          fontWeight="lighter"
        >
          <ListItem fontSize="xl" fontWeight="bold">PET Computação</ListItem>
          <ListItem my={0}>Av. Humberto Monte, s/n</ListItem>
          <ListItem my={0}>UFC - Campus do Pici</ListItem>
          <ListItem my={0}>Departamento da Computação</ListItem>
          <ListItem my={0}>Bloco 910</ListItem>
          <ListItem my={0}>petcomp@ufc.br</ListItem>
          <Grid templateColumns="repeat(3, 1fr)" rowGap={3} columnGap={2} fontSize="xl">
            <Link href="https://github.com/petcompufc" mx="auto" isExternal color="white" textDecoration="initial"><RiGithubLine /></Link>
            <Link href="https://www.facebook.com/PETCompUFC/" mx="auto" isExternal color="white"><RiFacebookCircleLine /></Link>
            <Link href="https://www.instagram.com/petcompufc" mx="auto" isExternal color="white"><RiInstagramLine /></Link>
            <Link href="https://www.youtube.com/user/petcompufc/videos" mx="auto" isExternal color="white"><RiYoutubeLine /></Link>
            <Link href="mailto:petcomp@ufc.br" mx="auto" isExternal color="white"><RiMailSendLine /></Link>
          </Grid>
        </List>

        <List
          mx="auto"
          float="left"
          minH="1px"
          spacing="1"
          fontWeight="lighter"
        >
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
          mx="auto"
        >
          <Link mx="auto" w="90%" maxW="300px" href="http://www.ufc.br/" isExternal><Image src={UFCLogo} /></Link>
          <Link mx="auto" w="85%" maxW="275px" href="http://portal.dc.ufc.br/" isExternal><Image src={DCLogo} /></Link>
        </Stack>
      </Grid>
    </Box>
  );
}
