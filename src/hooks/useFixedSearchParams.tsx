type Params = {
  page: number;
  title: string;
  description: string;
  productTypes: string;
  entityType: string;
};

export function useFixedSearchParams({
  page,
  title,
  description,
  productTypes,
  entityType,
}: Params): Record<string, string> {
  return {
    "page[number]": String(page),
    "filter[withTitle]": title,
    "filter[withDescription]": description,
    "filter[product_types]": productTypes,
    "filter[inEntityType]": entityType === "0" ? "" : entityType,
    "filter[networks]": "9",
    include: "networks",
  };
}
