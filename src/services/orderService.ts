import { IOrder } from "@/components/orders/order-item";
import axios from "axios";

export const createOrder = async () => {
  await axios.post("http://localhost:3333/order");
};

export const listOrders = async () => {
  const orders = await axios.get<IOrder[]>("http://localhost:3333/order");

  return orders.data;
};

export const cancelOrder = async (orderId: number) => {
  await axios.delete("http://localhost:3333/order", {
    data: { orderId },
  });
};
