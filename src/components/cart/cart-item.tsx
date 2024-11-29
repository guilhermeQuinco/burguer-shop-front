import { IItem } from "@/types/IItem";
import * as cartService from "@/services/cartService";
import { ItemModalEdit } from "../modal/item-modal-edit";

interface CartItemProps {
  item: {
    id: number;
    item: IItem;
    quantity: number;
  };
}

export function CartItem({ item }: CartItemProps) {
  const handleRemoveFromCart = async () => {
    try {
      await cartService.deleteCartItem(item.id);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-2 border-t pt-6">
      <div className="flex flex-row justify-between">
        <h1>
          {item.quantity}x {item.item.name}
        </h1>
        <span className="font-bold">R${item.item.price * item.quantity}</span>
      </div>
      <p className="text-gray-500">{item.item.description}</p>

      <div className="flex items-center gap-5">
        <ItemModalEdit item={item}>
          <button className="text-red-600">Editar</button>
        </ItemModalEdit>
        <button onClick={handleRemoveFromCart}>Remover</button>
      </div>
    </div>
  );
}
