import { IItem } from "./IItem";

export interface ICart {
  id: number;
  item: IItem;
  quantity: number;
}
