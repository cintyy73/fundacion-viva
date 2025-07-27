import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Box,
  Button,
  useDisclosure,
  DrawerCloseButton,
  FormLabel,
  Select,
  Input,
  DrawerFooter,
  Text,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Filter() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w="100%" display='flex' justifyContent='end'>
      <Button
        rightIcon={<FaSearch />}
        onClick={onOpen}
        w={{ base: "100%", md: "250px" }}
      >
        Búsqueda avanzada
      </Button>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent maxWidth={{ base: "100%", md: "60%", lg: "40%" }}>
          <DrawerCloseButton />
          <DrawerHeader
            borderBottomWidth="1px"
            color="secondary.default"
          >
            Búsqueda avanzada
          </DrawerHeader>
          <DrawerBody display='flex' flexDirection='column' gap="30px" margin="20px 0 0">
            <Box>
              <FormLabel htmlFor="owner" color="secondary.default">Tipo de producto</FormLabel>
              <Select
                id="owner"
                placeholder="Seleccionar..."
                _focusVisible={{
                  borderColor: 'primary.default',
                  boxShadow: '0 0 0 1px var(--chakra-colors-primary-default)',
                }}
              >
                <option value="segun">Segun Adebayo</option>
              </Select>
            </Box>
            <Box>
              <FormLabel htmlFor="owner" color="secondary.default">Tipo de organización</FormLabel>
              <Select
                id="owner"
                placeholder="Seleccionar..."
                _focusVisible={{
                  borderColor: 'primary.default',
                  boxShadow: '0 0 0 1px var(--chakra-colors-primary-default)',
                }}
              >
                <option value="segun">Segun Adebayo</option>
              </Select>
            </Box>
            <Box>
              <FormLabel htmlFor="owner" color="secondary.default">Título</FormLabel>
              <Input placeholder="Título de la publicación" />
            </Box>
            <Box>
              <FormLabel htmlFor="owner" color="secondary.default">Descripción</FormLabel>
              <Input placeholder="Palabras claves" />
            </Box>
          </DrawerBody>
          <DrawerFooter justifyContent='space-between'>
            <Button
              variant='outline'
              mr={3}
              onClick={onClose}
              w='50%'
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap="2"
            >
              <Text>Cerrar</Text>
              <IoMdClose />

            </Button>
            <Button w='50%' rightIcon={<FaSearch />}>Buscar</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
