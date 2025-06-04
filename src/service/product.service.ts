import { Product, Response } from "@/types";
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