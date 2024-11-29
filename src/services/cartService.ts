import axios from "axios";

export const addToCart = async (itemId: number, quantity: number) => {
  await axios.post("http://localhost:3333/cart", {
    itemId,
    quantity,
  });
};

export const getCartItems = async () => {
  const items = await axios.get("http://localhost:3333/cart");
  return { items };
};

export const deleteCartItem = async (id: number) => {
  await axios.delete(`http://localhost:3333/cart/${id}`);
};

export const changeQuantityCart = async (id: number, quantity: number) => {
  await axios.put("http://localhost:3333/cart", {
    id,
    quantity,
  });
};
