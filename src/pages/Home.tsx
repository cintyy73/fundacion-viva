import {
  Box,
  Button,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const ProductCard = () => {

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      bg="white"
      mt={4}
      mb={4}
      mx="auto"
      w="100%"
      maxW={{ base: "90%", sm: "90%", md: "350px" }}
      id="1"
    >
      <Image src="../imagenEjemploCard.png" />
      <VStack spacing={3} align="start" padding={4}>
        <Text>YouthBuild ofrece programas para jóvenes que abandonaron...</Text>
        <Text>
          OFRECEMOS 2 PROGRAMAS:Jóvenes con rumbo preparatoria de segunda
          oportunidad y jóvenes con rumbo centro de juventud.
        </Text>
        <text>Pertenece a las siguientes redes:</text>
        <Image src="../logoRedEjemplo.jpeg" boxSize="50px" />
        <HStack justify="space-between" w="100%">
          <Link>YouthBuild México</Link>
          <Button as={NavLink} to={`/details`}>Ver más</Button>
        </HStack>
        <Text>Organización de la Sociedad Civil / ONG</Text>
      </VStack>
    </Box>
  );
};

export default ProductCard;
