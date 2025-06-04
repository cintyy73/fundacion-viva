import {
  Box,
  Button,
  Divider,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Card = ({data}) => {

console.log(data)

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
    >
      <Image 
      src={data.photo_path}
      display={data.photo_path ? "block" : "none"} 
       />
      <VStack spacing={3} align="start" padding={4}>
        <Text>{data.entity.about_us}</Text>
        <Divider border="solid 1px" />
        <Text dangerouslySetInnerHTML={{ __html: data.short_description }} />
        <Divider border="1px" />
        <Text>Pertenece a las siguientes redes:</Text>
        <Image 
        alt={data.networks.name} 
        src={data.networks[0]?.logo_url} 
        display={data.networks?.[0]?.logo_url ? "block" : "none"} 
        boxSize="50px" 
        />
        <HStack justify="space-between">
          <Link>{data.entity.fantasy_name}</Link>
          <Button as={NavLink} to={`/details`}>
            Ver más
          </Button>
        </HStack>
        <Text>{data.entity.type.name}</Text>
      </VStack>
    </Box>
  );
};

export default Card;
