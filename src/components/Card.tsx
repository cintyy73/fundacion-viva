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

const Card = () => {
  return (
    <Box
    display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      bg="white"
      m="4"
      id="2"
    >
      <Image src="../imagenEjemploCard.png" />
      <VStack spacing={3} align="start" padding={4}>
        <Text>YouthBuild ofrece programas para jóvenes que abandonaron...</Text>
        <Text>
          OFRECEMOS 2 PROGRAMAS:Jóvenes con rumbo preparatoria de segunda
          oportunidad y jóvenes con rumbo centro de juventud.
        </Text>
        <Text>Pertenece a las siguientes redes:</Text>
        <Image src="../logoRedEjemplo.jpeg" boxSize="50px" />
        <HStack justify="space-between">
          <Link>YouthBuild México</Link>
          <Button as={NavLink} to={`/details`}>
            Ver más
          </Button>
        </HStack>
        <Text>Organización de la Sociedad Civil / ONG</Text>
      </VStack>
    </Box>
  );
};

export default Card;
