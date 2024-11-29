import { IItem } from "./IItem";

export interface IOrder {
  id: number;
  netAmount: string;
  createdAt: string;
  updatedAt: string;
  items: IItem[];
}
