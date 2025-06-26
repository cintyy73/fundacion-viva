import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <VStack margin="30px auto">
      <Card maxW="sm">
        <CardBody>
          <Image
            src="/notFound.jpg"
            alt="Error 404, página no encontrada"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md" textAlign="center">
              Uups...!
            </Heading>
            <Text textAlign="center">Page not found.</Text>
          </Stack>
        </CardBody>
        <Divider borderColor="secondary.default" />
        <CardFooter justifyContent="end">
          <ButtonGroup spacing="2">
            <Button
              onClick={() => navigate(-1)}
              bg="primary.default"
              size="xs"
              gap="10px"
            >
              <FaLongArrowAltLeft /> Volver
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </VStack>
  );
};

export default NotFound;
