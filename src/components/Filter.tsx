import { fetchCatalogFilters } from "@/service/product.service";
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
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useSearchParams } from "react-router-dom";

interface Option {
  id: number | string;
  name: string;
}

const formatOptionName = (name: string): string => {
  const spacedText = name.replace(/([A-Z])/g, " $1");
  const formattedWords = spacedText.split(" ").map((word) =>
    word.charAt(0).toUpperCase() + word.slice(1)
  );
  return formattedWords.join(" ");
};

export default function Filter() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchParams, setSearchParams] = useSearchParams();

  const [productType, setProductType] = useState("");
  const [organizationType, setOrganizationType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [productTypesOptions, setProductTypesOptions] = useState<Option[]>([]);
  const [entityTypesOptions, setEntityTypesOptions] = useState<Option[]>([]);

  useEffect(() => {
    const titleFromUrl = searchParams.get("filter[withTitle]") || "";
    setTitle(titleFromUrl);

    const descriptionFromUrl =
      searchParams.get("filter[withDescription]") || "";
    setDescription(descriptionFromUrl);

    const productTypeFromUrl = searchParams.get("filter[product_types]") || "";
    setProductType(productTypeFromUrl);

    const entityTypeFromUrl = searchParams.get("filter[inEntityType]") || "";
    setOrganizationType(entityTypeFromUrl);
  }, [searchParams]);

  useEffect(() => {
    if (isOpen) {
      const fetchFilters = async () => {
        try {
          const filters = await fetchCatalogFilters();

          const mappedProductTypes = filters.product_types.map((name, index) => ({
            id: String(index),
            name: name,
          }));
          setProductTypesOptions(mappedProductTypes);
          setEntityTypesOptions(filters.entity_types);
        } catch (error) {
          console.error("Error al cargar opciones de filtro:", error);
        }
      };
      fetchFilters();
    }
  }, [isOpen]);

  const handleSubmit = () => {
    const newParams: Record<string, string> = { "pagina": "1" };

    if (title) {
      newParams["filter[withTitle]"] = title;
    }
    if (description) {
      newParams["filter[withDescription]"] = description;
    }
    if (productType) {
      newParams["filter[product_types]"] = productType;
    }
    if (organizationType) {
      newParams["filter[inEntityType]"] = organizationType;
    }

    setSearchParams(newParams);
    onClose();
  };

  const handleClear = () => {
    setSearchParams({});
    onClose();
  };

  return (
    <Box w="100%" display="flex" justifyContent="end">
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
              <FormLabel htmlFor="productType" color="secondary.default">
                Tipo de producto
              </FormLabel>
              <Select
                id="productType"
                placeholder="Seleccionar..."
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
                _focusVisible={{
                  borderColor: "primary.default",
                  boxShadow: "0 0 0 1px var(--chakra-colors-primary-default)",
                }}
              >
                {productTypesOptions.map((option) => (
                  <option key={option.id} value={option.name}>
                    {formatOptionName(option.name)}
                  </option>
                ))}
              </Select>
            </Box>
            <Box>
              <FormLabel htmlFor="organizationType" color="secondary.default">
                Tipo de organización
              </FormLabel>
              <Select
                id="organizationType"
                placeholder="Seleccionar..."
                value={organizationType}
                onChange={(e) => setOrganizationType(e.target.value)}
                _focusVisible={{
                  borderColor: "primary.default",
                  boxShadow: "0 0 0 1px var(--chakra-colors-primary-default)",
                }}
              >
                {entityTypesOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </Select>
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
              onClick={handleClear}
              w="45%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap="2"
            >
              <Text>Limpiar</Text>
              <IoMdClose />
            </Button>
            <Button w="45%" rightIcon={<FaSearch />} onClick={handleSubmit}>
              Buscar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}