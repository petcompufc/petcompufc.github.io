import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import {
  useTheme,
  Box,
  List,
  ListItem,
  Link,
  Stack,
  Grid,
} from '@chakra-ui/react';

import {
  RiFacebookCircleLine,
  RiGithubLine,
  RiInstagramLine,
  RiMailSendLine,
  RiYoutubeLine,
} from 'react-icons/ri';

export default function Footer() {
  const theme = useTheme();

  return (
    <Grid
      as="footer"
      bg="#37474f"
      color="#ffffff"
      px={`calc(50% - calc(${theme.sizes.container.xl} / 2))`}
      py={5}
      w="100%"
      fontSize="16px"
      templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
    >

      <Box
        maxW="300px"
        mx="auto"
        float="left"
        boxSizing="border-box"
      >
        <StaticImage
          alt="PETComp UFC"
          src="../images/logo-pet-white.svg"
          width={300}
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
          <Link
            href="https://github.com/petcompufc"
            mx="auto"
            isExternal
            color="white"
            textDecoration="initial"
          >
            <RiGithubLine title="GitHub" />
          </Link>
          <Link
            href="https://www.facebook.com/PETCompUFC/"
            mx="auto"
            isExternal
            color="white"
          >
            <RiFacebookCircleLine title="Facebook" />
          </Link>
          <Link
            href="https://www.instagram.com/petcompufc"
            mx="auto"
            isExternal
            color="white"
          >
            <RiInstagramLine title="Instagram" />
          </Link>
          <Link
            href="https://www.youtube.com/user/petcompufc/videos"
            mx="auto"
            isExternal
            color="white"
          >
            <RiYoutubeLine title="YouTube" />
          </Link>
          <Link
            href="mailto:petcomp@ufc.br"
            mx="auto"
            isExternal
            color="white"
          >
            <RiMailSendLine title="e-Mail" />
          </Link>
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
        <Link mx="auto" w="90%" href="http://www.ufc.br/" isExternal>
          <StaticImage
            alt="Universidade Federal do Ceará"
            src="../images/logo-ufc.svg"
          />
        </Link>
        <Link mx="auto" w="85%" href="http://portal.dc.ufc.br/" isExternal>
          <StaticImage
            alt="Departamento de Computação"
            src="../images/logo-dc.svg"
          />
        </Link>
      </Stack>
    </Grid>
  );
}
