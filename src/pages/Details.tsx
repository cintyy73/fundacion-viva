import { fetchProduct } from "@/service/product.service";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Divider,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import {
  FaFacebookF,
  FaInstagram,
  FaLink,
  FaLinkedinIn,
  FaLongArrowAltLeft,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { LuHeartHandshake } from "react-icons/lu";
import { useNavigate, useParams } from "react-router-dom";
import { ods } from "@/utils/constant";
// import { Map } from '../components/Map/index'
import CardSkeletonDetail from "@/components/CardSkeletonDetail";
import Map from "@/components/map/Map";

const Details = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
    enabled: !!id,
  });

  window.scrollTo({ top: 0, behavior: "smooth" });

  if (isLoading) return CardSkeletonDetail();

  if (error || !data) {
    return (
      <Box textAlign="center" py={10} px={6}>
        <Heading as="h2" size="xl" mb={2} color="secundary.default">
          Error al cargar el detalle del producto
        </Heading>
        <Text color="primery.default" fontSize="lg">
          Por favor, intentá recargar la página o volver más tarde.
        </Text>
      </Box>
    );
  }

  const { title, description, entity, sdgs } = data;

  const productsEntity = [
    {
      id: entity?.id || 0,
      bussinessName: entity?.bussiness_name,
      fantasyName: entity?.fantasy_name,
      lat: entity?.location_lat || 0,
      lng: entity?.location_lng || 0,
    },
  ];

  const center = {
    lat: entity?.location_lat || 0,
    lng: entity?.location_lng || 0,
  };

  console.log("data", data);

  return (
    <Container
      display="flex"
      flexDirection="column"
      maxW={{ base: "80%", md: "80%", lg: "800px", xl: "1000px" }}
      gap="20px"
      padding="0px"
      marginBottom="40px"
    >
      {location ? (
        <Map markers={productsEntity} center={center} />
      ) : (
        <Text>No se pudo cargar la ubicación del mapa</Text>
      )}
      <Box margin="20px 0">
        <Button
          onClick={() => navigate(-1)}
          bg="primary.default"
          size="xs"
          gap="10px"
        >
          <FaLongArrowAltLeft /> Volver
        </Button>
      </Box>
      <Card boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)">
        <CardHeader>
          <Heading fontSize="xl" color="secondary.default">
            {title}
          </Heading>
        </CardHeader>
      </Card>
      <Card
        boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
        p="27px"
      >
        {description && (
          <CardHeader>
            <Heading
              fontSize="xl"
              color="secondary.default"
              dangerouslySetInnerHTML={{ __html: description }}
            ></Heading>
            <Divider orientation="horizontal" marginTop="10px" />
          </CardHeader>
        )}
        {entity.about_us && (
          <CardBody>
            <Box>
              <Heading fontSize="xl" color="primary.default">
                Sobre nosotros:
              </Heading>
            </Box>
            <Text pt="2" fontSize="sm">
              {entity.about_us}
            </Text>
          </CardBody>
        )}
      </Card>
      <Card boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)">
        <CardHeader>
          <HStack spacing={2} align="center" justify="space-between">
            <Heading fontSize="xl" color="secondary.default">
              {entity.bussiness_name ? entity.bussiness_name : ""}
            </Heading>
            <Box display="flex" gap="10px" color="primary.default">
              {entity.web_profile && (
                <Link href={entity.web_profile} isExternal>
                  <FaLink fontSize="2rem" color="primary.default" />
                </Link>
              )}
              {entity.facebook_profile && (
                <Link href={entity.facebook_profile} isExternal>
                  <FaFacebookF fontSize="2rem" color="primary.default" />
                </Link>
              )}
              {entity.instagram_profile && (
                <Link href={entity.instagram_profile} isExternal>
                  <FaInstagram fontSize="2rem" color="primary.default" />
                </Link>
              )}
              {entity.linkedin_profile && (
                <Link href={entity.linkedin_profile} isExternal>
                  <FaLinkedinIn fontSize="2rem" color="primary.default" />
                </Link>
              )}
              {entity.twitter_profile && (
                <Link href={entity.twitter_profile} isExternal>
                  <FaXTwitter fontSize="2rem" color="primary.default" />
                </Link>
              )}
            </Box>
          </HStack>
          <Divider orientation="horizontal" marginTop="10px" />
        </CardHeader>
        <CardBody>
          <Text
            pt="2"
            fontSize="sm"
            display="flex"
            alignItems="center"
            gap="15px"
          >
            <IoLocationSharp fontSize="2rem" color="primary.default" />{" "}
            {entity.address ? entity.address : "No disponible"}
          </Text>
          <Text
            pt="2"
            fontSize="sm"
            display="flex"
            alignItems="center"
            gap="15px"
          >
            <LuHeartHandshake fontSize="2rem" color="primary.default" /> Tipo de
            organización:{" "}
            {entity.type.name ? entity.type.name : "No disponible"}
          </Text>
        </CardBody>
      </Card>
      <Card boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)">
        <CardHeader>
          <Heading fontSize="xl" color="secondary.default">
            Objetivos de desarrollo sustentable
          </Heading>
          <Divider orientation="horizontal" marginTop="10px" />
        </CardHeader>
        <CardBody>
          <Stack flexFlow="wrap">
            {sdgs.map((sdg) => {
              const matchedOds = ods.find((o) => o.id === sdg.id);

              return matchedOds ? (
                <Link
                  key={sdg.id}
                  href={matchedOds.link}
                  isExternal
                  _hover={{ opacity: 0.8 }}
                >
                  <Image
                    src={`/ods/${sdg.id}.png`}
                    alt={matchedOds.name}
                    boxSize="48px"
                    objectFit="cover"
                    borderRadius="10px"
                  />
                </Link>
              ) : null;
            })}
          </Stack>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Details;
