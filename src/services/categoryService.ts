import { ICategory, ICategoryResponse } from "@/types/ICategory";
import axios from "axios";

export const getCategories = async () => {
  const response = await axios.get<ICategory[]>(
    `http://localhost:3333/category`
  );

  return response.data;
};

export const getCategoriesItems = async (slug: string) => {
  const response = await axios.get<ICategoryResponse>(
    `http://localhost:3333/category/${slug}`
  );

  return response.data.items;
};
