import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormLabel, Input, Select, Text, useDisclosure } from "@chakra-ui/react";
import { useState } from "react"; // asegurate de tenerlo importado
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Filter() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [productType, setProductType] = useState("");
  const [organizationType, setOrganizationType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    console.log("Submitted values:");
    console.log({
      productType,
      organizationType,
      title,
      description,
    });
    // Acá iría el fetch con filtros, si lo implementás luego
  };

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
          <DrawerHeader borderBottomWidth="1px" color="secondary.default">
            Búsqueda avanzada
          </DrawerHeader>
          <DrawerBody display='flex' flexDirection='column' gap="30px" margin="20px 0 0">
            <Box>
              <FormLabel htmlFor="productType" color="secondary.default">Tipo de producto</FormLabel>
              <Select
                id="productType"
                placeholder="Seleccionar..."
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
                _focusVisible={{
                  borderColor: 'primary.default',
                  boxShadow: '0 0 0 1px var(--chakra-colors-primary-default)',
                }}
              >
                <option value="segun">Segun Adebayo</option>
              </Select>
            </Box>
            <Box>
              <FormLabel htmlFor="organizationType" color="secondary.default">Tipo de organización</FormLabel>
              <Select
                id="organizationType"
                placeholder="Seleccionar..."
                value={organizationType}
                onChange={(e) => setOrganizationType(e.target.value)}
                _focusVisible={{
                  borderColor: 'primary.default',
                  boxShadow: '0 0 0 1px var(--chakra-colors-primary-default)',
                }}
              >
                <option value="segun">Segun Adebayo</option>
              </Select>
            </Box>
            <Box>
              <FormLabel htmlFor="title" color="secondary.default">Título</FormLabel>
              <Input
                id="title"
                placeholder="Título de la publicación"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Box>
            <Box>
              <FormLabel htmlFor="description" color="secondary.default">Descripción</FormLabel>
              <Input
                id="description"
                placeholder="Palabras claves"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
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
            <Button
              w='50%'
              rightIcon={<FaSearch />}
              onClick={handleSubmit}
            >
              Buscar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
