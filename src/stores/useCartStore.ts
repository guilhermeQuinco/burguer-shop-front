import * as cartService from "@/services/cartService";
import { ICart } from "@/types/ICart";
import axios from "axios";
import { create } from "zustand";

interface ICartState {
  items: ICart[];

  //   calculateTotals: () => void;
  //   addToCart: (data: ICart) => void;
  //   total: number;
}

export const useCartStore = create<ICartState>((set, get) => ({
  items: [],
  total: 0,

  getCartItems: async () => {
    try {
      const response = await axios.get("http://localhost:3333/cart");
      set({ items: response.data.data });
    } catch (error) {
      set({ items: [] });
      console.error(error);
    }
  },

  //   addToCart: async (data) => {
  //     try {
  //       await cartService.addToCart(data.item.id, data.quantity);
  //       alert("item adicionado");

  //       set({
  //         items: [
  //           ...get().items,
  //           {
  //             id: data.id,
  //             item: {
  //               id: data.item.id,
  //               name: data.item.name,
  //               price: data.item.price,
  //             },
  //             quantity: data.quantity,
  //           },
  //         ],
  //       });

  //       get().calculateTotals();
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   },

  //   calculateTotals: () => {
  //     const { items } = get();
  //     const total = items.reduce(
  //       (sum, item) => sum + item.item.price * item.quantity,
  //       0
  //     );

  //     set({ total });
  //   },
}));
