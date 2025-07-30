import { Product, ProductWithSdgs, Response, Sdg } from "@/types";
import { api } from "@/utils/axios";

export const fetchProductsByPage = async (
  page = 1,
): Promise<Response<Product[]>> => {
  const response = await api.get<Response<Product[]>>(
    `catalogs?page[number]=${page}`,
  );
  // console.log("Pagina", response.data.meta.current_page);
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
