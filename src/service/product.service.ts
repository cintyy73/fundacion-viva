import { CatalogsFilters, Product, ProductWithSdgs, Response, Sdg } from "@/types";
import { api } from "@/utils/axios";

export const fetchProductsByPage = async (
  page = 1,
): Promise<Response<Product[]>> => {
  const response = await api.get<Response<Product[]>>(
    `catalogs?page[number]=${page}`,
  );

  return response.data;
};

export const fetchProductsByParams = async (params: Record<string, string>) => {
  const response = await api.get<Response<Product[]>>("catalogs", { params });
  return response.data;
};

export const fetchCatalogFilters = async (): Promise<CatalogsFilters> => {
  const response = await api.get<CatalogsFilters>("/catalogs/filters");
  return response.data;
};

export const fetchProduct = async (id?: string): Promise<ProductWithSdgs> => {
  if (!id) return Promise.reject("No id provided");

  const [product, sdgs] = await Promise.all([
    api.get<Response<Product>>(`catalogs/${id}/?include=networks`),
    api.get<Response<Sdg[]>>(`entity/${id}/sdgs`),
  ]);

  return {
    ...product.data.data,
    sdgs: sdgs.data.data,
  };
};
