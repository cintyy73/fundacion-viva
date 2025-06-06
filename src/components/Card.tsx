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
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Card as ChakraCard } from "@chakra-ui/react";

interface CardProps {
  data?: Product;
  isLoading?: boolean;
}
const Card = ({ data, isLoading = false }: CardProps) => {
  return (
    <ChakraCard borderRadius="10px" overflow="hidden">
      {isLoading ? (
        <Skeleton height="150px" width="250px" />
      ) : (
        <Image
          src="./public/imagenEjemploCard.png"
          display={data?.photo_path ? "block" : "none"}
          borderRadius="10px 10px 0 0"
        />
      )}
      <CardHeader>
        {isLoading ? (
          <SkeletonText noOfLines={1} mb={2} />
        ) : (
          <>
            <Text>{data?.title}</Text>
            <Divider border="1px" />
          </>
        )}
      </CardHeader>
      <CardBody>
        {isLoading ? (
          <SkeletonText noOfLines={3} spacing="3" />
        ) : (
          <Text
            dangerouslySetInnerHTML={{ __html: data?.short_description || "" }}
          />
        )}
      </CardBody>

      <CardFooter
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        {isLoading ? (
          <>
            <Skeleton height="20px" width="40%" />
            <Skeleton height="32px" width="60px" />
          </>
        ) : (
          <>
            <Text as="a" href={data?.entity?.web_profile}>
              {data?.entity?.fantasy_name}
            </Text>
            <Button as={NavLink} to={`/details/${data?.id}`}>
              Ver más
            </Button>
          </>
        )}
      </CardFooter>
      {isLoading ? (
        <Box textAlign="center" py={2}>
          <Skeleton width="60%" mx="auto" />
        </Box>
      ) : (
        <Text textAlign="center" py={2}>
          {data?.entity?.type?.name}
        </Text>
      )}
    </ChakraCard>
  );
};

export default Card;
