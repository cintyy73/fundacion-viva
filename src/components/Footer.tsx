import { Box, HStack, Icon, Image, Link, Text, Stack } from "@chakra-ui/react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <HStack
      justifyContent={{ base: "center", md: "space-around" }}
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      height={{ base: "auto", md: "250px" }}
      gap={{ base: 6, md: 0 }}
      background="accent.500"
      color="white"
      py={{ base: 6, md: 0 }}
      px={4}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Image height="120px" src="./logo-footer.png" alt="Fundación Viva" />
        <Text mt={4} fontSize="xs">
          Copyright ©️ 2023, Fundación VIVA.
        </Text>
      </Box>
      <Stack spacing={4} align="center" textAlign="center">
        <HStack spacing={6}>
          <Link href="#" isExternal>
            <Icon as={FaFacebook} boxSize={8} />
          </Link>
          <Link href="#" isExternal>
            <Icon as={FaInstagram} boxSize={8} />
          </Link>
          <Link href="#" isExternal>
            <Icon as={FaTwitter} boxSize={8} />
          </Link>
          <Link href="#" isExternal>
            <Icon as={FaLinkedin} boxSize={8} />
          </Link>
          <Link href="#" isExternal>
            <Icon as={FaYoutube} boxSize={8} />
          </Link>
        </HStack>

        <HStack
          spacing={{ base: 4, md: 8 }}
          flexWrap="wrap"
          justifyContent="center"
        >
          <Text fontSize="xs" maxW="200px">
            La Paz Edificio FERGAL, Calle 15 de Calacoto #8089 entre Av. Sánchez
            Bustamante y calle Julio Patiño. Telf. +591 22442420 Fax: +591
            22442352 Casilla #11875
          </Text>
          <Text fontSize="xs" maxW="200px">
            Cochabamba Edificio Freddy Maldonado V. Calle Santa Cruz #1344 esq.
            Pedro Blanco. Telf. +59144485551 Fax: +591 44485353
          </Text>
        </HStack>
      </Stack>
    </HStack>
  );
};

export default Footer;
