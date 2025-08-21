import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import AsyncSelect from "react-select/async";
import { useFilters } from "@/hooks/useFilters";

export default function Filter() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    title,
    setTitle,
    description,
    setDescription,
    productTypes,
    setProductTypes,
    organizationTypes,
    setOrganizationTypes,
    hasActiveFilters,
    handleSubmit,
    handleClear,
    loadProductTypes,
    loadOrganizationTypes,
  } = useFilters();

  const handleSubmitAndClose = () => {
    handleSubmit();
    onClose();
  };

  const handleClearAndClose = () => {
    handleClear();
    onClose();
  };

  return (
    <Box w="100%" display="flex" justifyContent="end">
      <Button
        variant="outline"
        mr={3}
        onClick={handleClearAndClose}
        w={{ base: "100%", md: "250px" }}
        display={hasActiveFilters() ? "flex" : "none"}
        alignItems="center"
        justifyContent="center"
        colorScheme="secondary"
        gap="2"
      >
        <Text>Limpiar</Text>
        <IoMdClose />
      </Button>
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
          <DrawerBody
            display="flex"
            flexDirection="column"
            gap="30px"
            margin="20px 0 0"
          >
            <Box>
              <FormLabel id="productTypeLabel" color="secondary.default">
                Tipo de producto
              </FormLabel>
              <AsyncSelect
                aria-labelledby="productTypeLabel"
                isMulti
                cacheOptions
                defaultOptions
                value={productTypes}
                loadOptions={loadProductTypes}
                onChange={(selectedOptions) =>
                  setProductTypes(selectedOptions as any[])
                }
                placeholder="Seleccionar..."
                styles={{
                  control: (base, state) => ({
                    ...base,
                    borderColor: state.isFocused ? "#C0E83E" : base.borderColor,
                    boxShadow: state.isFocused
                      ? "0 0 0 1px #C0E83E"
                      : base.boxShadow,
                    "&:hover": {
                      borderColor: state.isFocused
                        ? "#C0E83E"
                        : base.borderColor,
                    },
                  }),
                  multiValueRemove: (base) => ({
                    ...base,
                    color: "black",
                    ":hover": {
                      backgroundColor: "#e6e6e6",
                      color: "#6e3fab",
                    },
                  }),
                }}
              />
            </Box>
            <Box>
              <FormLabel id="organizationTypeLabel" color="secondary.default">
                Tipo de organización
              </FormLabel>
              <AsyncSelect
                aria-labelledby="organizationTypeLabel"
                isMulti
                cacheOptions
                defaultOptions
                value={organizationTypes}
                loadOptions={loadOrganizationTypes}
                onChange={(selectedOptions) =>
                  setOrganizationTypes(selectedOptions as any[])
                }
                placeholder="Seleccionar..."
                styles={{
                  control: (base, state) => ({
                    ...base,
                    borderColor: state.isFocused ? "#C0E83E" : base.borderColor,
                    boxShadow: state.isFocused
                      ? "0 0 0 1px #C0E83E"
                      : base.boxShadow,
                    "&:hover": {
                      borderColor: state.isFocused
                        ? "#C0E83E"
                        : base.borderColor,
                    },
                  }),
                  multiValueRemove: (base) => ({
                    ...base,
                    color: "black",
                    ":hover": {
                      backgroundColor: "#e6e6e6",
                      color: "#6e3fab",
                    },
                  }),
                }}
              />
            </Box>
            <Box>
              <FormLabel htmlFor="title" color="secondary.default">
                Título
              </FormLabel>
              <Input
                id="title"
                placeholder="Título de la publicación"
                _focusVisible={{
                  borderColor: "primary.default",
                  boxShadow: "0 0 0 1px var(--chakra-colors-primary-default)",
                }}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Box>
            <Box>
              <FormLabel htmlFor="description" color="secondary.default">
                Descripción
              </FormLabel>
              <Input
                id="description"
                placeholder="Palabras claves"
                _focusVisible={{
                  borderColor: "primary.default",
                  boxShadow: "0 0 0 1px var(--chakra-colors-primary-default)",
                }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Box>
          </DrawerBody>
          <DrawerFooter justifyContent="space-between">
            <Button
              variant="outline"
              mr={3}
              onClick={handleClearAndClose}
              w="45%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              colorScheme="secondary"
              gap="2"
            >
              <Text>Limpiar</Text>
              <IoMdClose />
            </Button>
            <Button
              w="45%"
              rightIcon={<FaSearch />}
              onClick={handleSubmitAndClose}
            >
              Buscar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}