import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IItem } from "@/types/IItem";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { addToCart, changeQuantityCart } from "@/services/cartService";
import { ICart } from "@/types/ICart";

interface ModalProps {
  item: ICart;
  children: React.ReactNode;
}

export function ItemModalEdit({ children, item }: ModalProps) {
  const [quantity, setQuantity] = useState(item.quantity);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="f">
        <DialogHeader>
          <DialogTitle>{item.item.name}</DialogTitle>
          <DialogDescription>{item.item.description}</DialogDescription>
        </DialogHeader>

        <img src={item.item.imageUrl} alt="" />

        <div className="flex flex-row gap-6 items-center border border-red-600 w-fit rounded-lg px-5">
          <button
            className="text-4xl"
            onClick={() => setQuantity((prev) => prev - 1)}
          >
            -
          </button>
          <span className="text-xl">{quantity}</span>
          <button
            className="text-2xl"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>

        <Button
          onClick={() => {
            changeQuantityCart(item.id, quantity);
            window.location.reload();
          }}
        >
          Adicionar a comanda
        </Button>
      </DialogContent>
    </Dialog>
  );
}
