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

const getImageUrl = (path: string | undefined) => {
  if (!path || path.trim() === "") {
    return "/imagenEjemploCard.png";
  }
  if (path.startsWith("http")) {
    return path;
  }
  return `https://api.staging.fonselp.com/storage/${path}`;
};

const Card = ({ data, isLoading = false }: CardProps) => {
  if (isLoading) return <CardSkeleton />;

  const imageSrc = getImageUrl(data?.photo_path);
  console.log("URL de la imagen final:", imageSrc);

  return (
    <ChakraCard borderRadius="10px" overflow="hidden" width="250px">
      <Image
        src={imageSrc}
        alt={data?.title || "Imagen del producto"}
        fallbackSrc="/imagenEjemploCard.png"
        objectFit="cover"
        w="100%"
        maxH="200px"
      />

      <CardHeader>
        <Text noOfLines={2}>{data?.title || "Sin título"}</Text>
        <Divider border="1px" />
      </CardHeader>

      <CardBody>
        <Text
          noOfLines={3}
          dangerouslySetInnerHTML={{
            __html: data?.short_description || data?.description || "",
          }}
        />
      </CardBody>

      <CardFooter
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text
          as="a"
          href={data?.entity?.web_profile || "#"}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data?.entity?.fantasy_name ||
            data?.entity?.bussiness_name ||
            "Sin empresa"}
        </Text>
        <Button as={NavLink} to={`/details/${data?.id}`}>
          Ver más
        </Button>
      </CardFooter>
      <Text textAlign="center" py={2}>
        {data?.entity?.type?.name || data?.product_type || "—"}
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