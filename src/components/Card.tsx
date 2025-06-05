import { Product } from "@/types";
import {
  Button,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Card as ChakraCard } from "@chakra-ui/react";

interface CardProps {
  data: Product;
}
const Card = ({ data }: CardProps) => {
  return (
    <ChakraCard borderRadius="10px">
      <Image
        src="./public/imagenEjemploCard.png"
        display={data.photo_path ? "block" : "none"} borderRadius="10px 10px 0 0"
      />
      <CardHeader >
        <Text>{data.title}</Text>
        <Divider border="1px" />
      </CardHeader>
      <CardBody>
        <Text dangerouslySetInnerHTML={{ __html: data.short_description }} />
      </CardBody>

      <CardFooter display="flex" justifyContent="space-between" alignItems="center">
        <Text as="a" href={data.entity?.web_profile}>
          {data.entity.fantasy_name}
        </Text>
        <Button as={NavLink} to={`/details/${data.id}`}>
          Ver más
        </Button>
        
      </CardFooter>
      <Text>{data.entity.type.name}</Text>
    </ChakraCard>
  );
};

export default Card;
