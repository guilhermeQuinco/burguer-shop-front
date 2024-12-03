import { IItem } from "./IItem";

export interface ICategoryResponse {
  id: number;
  items: IItem[];
  name: string;
  slug: string;
}

export interface ICategory {
  id: number;
  name: string;
  slug: string;
}
