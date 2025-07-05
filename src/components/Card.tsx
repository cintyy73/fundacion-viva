import { Product } from "@/types";
import {
  Box,
  Button,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Skeleton,
  SkeletonText,
  Text,
  Card as ChakraCard,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

interface CardProps {
  data?: Product;
  isLoading?: boolean;
}
const Card = ({ data, isLoading = false }: CardProps) => {
  if (isLoading) return <CardSkeleton />;

  return (
    <ChakraCard borderRadius="10px" overflow="hidden">
      {data?.photo_path && (
        <Image src="./imagenEjemploCard.png" borderRadius="10px 10px 0 0" />
      )}

      <CardHeader>
        <Text>{data?.title}</Text>
        <Divider border="1px" />
      </CardHeader>

      <CardBody>
        {" "}
        <Text
          dangerouslySetInnerHTML={{ __html: data?.short_description || "" }}
        />
      </CardBody>

      <CardFooter
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text as="a" href={data?.entity?.web_profile}>
          {data?.entity?.fantasy_name}
        </Text>
        <Button as={NavLink} to={`/details/${data?.id}`}>
          Ver más
        </Button>
      </CardFooter>
      <Text textAlign="center" py={2}>
        {data?.entity?.type?.name}
      </Text>
    </ChakraCard>
  );
};

const CardSkeleton = () => {
  return (
    <ChakraCard borderRadius="10px" overflow="hidden" width="250px">
      <Skeleton height="150px" />

      <CardHeader>
        <SkeletonText noOfLines={1} mb={2} />
        <Skeleton height="1px" />
      </CardHeader>

      <CardBody>
        <SkeletonText noOfLines={3} spacing="3" />
      </CardBody>

      <CardFooter
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Skeleton height="20px" width="40%" />
        <Skeleton height="32px" width="60px" />
      </CardFooter>

      <Box textAlign="center" py={2}>
        <Skeleton width="60%" mx="auto" />
      </Box>
    </ChakraCard>
  );
};

export default Card;
