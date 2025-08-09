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
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useSearchParams } from "react-router-dom";
import AsyncSelect from "react-select/async";

interface Option {
  id: number | string;
  name: string;
}

interface ReactSelectOption {
  value: string;
  label: string;
}

const formatOptionName = (name: string): string => {
  const spacedText = name.replace(/([A-Z])/g, " $1");
  const formattedWords = spacedText
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return formattedWords.join(" ");
};

export default function Filter() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchParams, setSearchParams] = useSearchParams();

  const [productTypes, setProductTypes] = useState<ReactSelectOption[]>([]);

  const [organizationTypes, setOrganizationTypes] = useState<
    ReactSelectOption[]
  >([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const titleFromUrl = searchParams.get("filter[withTitle]") || "";
    setTitle(titleFromUrl);

    const descriptionFromUrl =
      searchParams.get("filter[withDescription]") || "";
    setDescription(descriptionFromUrl);

    const productTypesFromUrl = searchParams.get("filter[product_types]") || "";
    if (productTypesFromUrl) {
      const optionsArray = productTypesFromUrl.split(",").map((name) => ({
        value: name,
        label: formatOptionName(name),
      }));
      setProductTypes(optionsArray);
    } else {
      setProductTypes([]);
    }

    const organizationTypesFromUrl =
      searchParams.get("filter[inEntityType]") || "";
    if (organizationTypesFromUrl) {
      const optionsArray = organizationTypesFromUrl.split(",").map((id) => ({
        value: id,
        label: id,
      }));
      setOrganizationTypes(optionsArray);
    } else {
      setOrganizationTypes([]);
    }
  }, [searchParams]);

  const loadProductTypes = async (inputValue: string) => {
    const filters = await fetchCatalogFilters();
    const options = filters.product_types.map((name) => ({
      value: name,
      label: formatOptionName(name),
    }));

    return options.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadOrganizationTypes = async (inputValue: string) => {
    const filters = await fetchCatalogFilters();
    const options = filters.entity_types.map((entity) => ({
      value: String(entity.id),
      label: entity.name,
    }));

    return options.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const handleSubmit = () => {
    const currentParams = Object.fromEntries(searchParams.entries());
    const newParams: Record<string, string> = { ...currentParams };

    if (title) {
      newParams["filter[withTitle]"] = title;
    } else {
      delete newParams["filter[withTitle]"];
    }

    if (description) {
      newParams["filter[withDescription]"] = description;
    } else {
      delete newParams["filter[withDescription]"];
    }

    if (productTypes && productTypes.length > 0) {
      newParams["filter[product_types]"] = productTypes
        .map((p) => p.value)
        .join(",");
    } else {
      delete newParams["filter[product_types]"];
    }

    if (organizationTypes && organizationTypes.length > 0) {
      newParams["filter[inEntityType]"] = organizationTypes
        .map((o) => o.value)
        .join(",");
    } else {
      delete newParams["filter[inEntityType]"];
    }

    newParams["pagina"] = "1";

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
                  setProductTypes(selectedOptions as ReactSelectOption[])
                }
                placeholder="Seleccionar..."
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused
                      ? "primary.default"
                      : baseStyles.borderColor,
                    boxShadow: state.isFocused
                      ? "0 0 0 1px var(--chakra-colors-primary-default)"
                      : baseStyles.boxShadow,
                    "&:hover": {
                      borderColor: state.isFocused
                        ? "primary.default"
                        : baseStyles.borderColor,
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
                  setOrganizationTypes(selectedOptions as ReactSelectOption[])
                }
                placeholder="Seleccionar..."
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused
                      ? "primary.default"
                      : baseStyles.borderColor,
                    boxShadow: state.isFocused
                      ? "0 0 0 1px var(--chakra-colors-primary-default)"
                      : baseStyles.boxShadow,
                    "&:hover": {
                      borderColor: state.isFocused
                        ? "primary.default"
                        : baseStyles.borderColor,
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
