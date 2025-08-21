import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchCatalogFilters } from "@/service/product.service";

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

export const useFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [productTypes, setProductTypes] = useState<ReactSelectOption[]>([]);
  const [organizationTypes, setOrganizationTypes] =
    useState<ReactSelectOption[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const loadInitialState = async () => {
      const allFilters = await fetchCatalogFilters();

      const titleFromUrl = searchParams.get("filter[withTitle]") || "";
      setTitle(titleFromUrl);

      const descriptionFromUrl =
        searchParams.get("filter[withDescription]") || "";
      setDescription(descriptionFromUrl);

      const productTypesFromUrl =
        searchParams.get("filter[product_types]") || "";
      if (productTypesFromUrl) {
        const optionsArray = productTypesFromUrl
          .split(",")
          .map((name) => ({ value: name, label: formatOptionName(name) }));
        setProductTypes(optionsArray);
      } else {
        setProductTypes([]);
      }

      const organizationTypesFromUrl =
        searchParams.get("filter[inEntityType]") || "";
      if (organizationTypesFromUrl) {
        const optionsArray = organizationTypesFromUrl.split(",").map((id) => {
          const matchingEntity = allFilters.entity_types.find(
            (entity) => String(entity.id) === id,
          );
          return {
            value: id,
            label: matchingEntity
              ? formatOptionName(matchingEntity.name)
              : `ID: ${id}`,
          };
        });
        setOrganizationTypes(optionsArray);
      } else {
        setOrganizationTypes([]);
      }
    };

    loadInitialState();
  }, [searchParams]);

  const loadProductTypes = async (inputValue: string) => {
    const filters = await fetchCatalogFilters();
    const options = filters.product_types.map((name) => ({
      value: name,
      label: formatOptionName(name),
    }));

    return options.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase()),
    );
  };

  const loadOrganizationTypes = async (inputValue: string) => {
    const filters = await fetchCatalogFilters();
    const options = filters.entity_types.map((entity) => ({
      value: String(entity.id),
      label: formatOptionName(entity.name),
    }));

    return options.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase()),
    );
  };

  const hasActiveFilters = () => {
    const params = Object.fromEntries(searchParams.entries());
    const filterParams = Object.keys(params).filter((key) => key !== "pagina");
    return filterParams.length > 0;
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
  };

  const handleClear = () => {
    setSearchParams({});
  };

  return {
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
  };
};