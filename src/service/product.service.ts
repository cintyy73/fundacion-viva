import { Product, ProductWithSdgs, Response, Sdg } from "@/types";
import { api } from "@/utils/axios";

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await api.get<Response<Product[]>>("catalogs");
  // response.data es el objeto que contiene .data con el array real
  return response.data.data;
};

export const fetchData = async (): Promise<Response<Product[]>> => {
  const response = await api.get<Response<Product[]>>("catalogs");
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