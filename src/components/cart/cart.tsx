import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { CartItem } from "./cart-item";

import { ICart } from "@/types/ICart";
import axios from "axios";
import { Button } from "../ui/button";
import { createOrder } from "@/services/orderService";

import cart from "@/assets/9005646.jpg";
import { useNavigate } from "react-router-dom";

export function Cart() {
  const [items, setItems] = useState<ICart[]>([]);

  const navigation = useNavigate();

  const checkIfHaveItemsInCart = items.length > 0;

  useEffect(() => {
    const fetchItems = async () => {
      const response = await axios.get("http://localhost:3333/cart");
      setItems(response.data.data);
    };

    fetchItems();
  }, []);

  const totalPriceItems = items
    .reduce((prev, reduce) => prev + reduce.item.price * reduce.quantity, 0)
    .toFixed(2);

  return (
    <Sheet>
      <SheetTrigger
        className={`flex gap-3 items-center px-5 py-2 rounded-full ${
          checkIfHaveItemsInCart ? "bg-red-600" : ""
        }`}
      >
        <ShoppingBag
          size={30}
          color={`${checkIfHaveItemsInCart ? "#fff" : "#ec1111"}`}
        />
        <div className="text-left">
          <p
            className={`text-[1rem] ${
              checkIfHaveItemsInCart ? "text-white" : "text-black"
            }`}
          >
            R$
            {totalPriceItems}
          </p>
          <p
            className={`text-[0.8rem] ${
              checkIfHaveItemsInCart ? "text-white" : "text-black"
            }`}
          >
            {items.reduce((prev, reduce) => prev + reduce.quantity, 0)} itens
          </p>
        </div>
      </SheetTrigger>
      <SheetContent className="overflow-y-scroll  ">
        <div className="h-screen ">
          {items.length === 0 ? (
            <div className="h-screen flex flex-col items-center justify-center z-50">
              <div className="flex flex-col justify-center items-center ">
                <img
                  src={cart}
                  alt="empty-cart"
                  className="w-[10rem] h-[10rem]"
                />

                <span>Sua sacola está vazia</span>
                <span className="text-sm text-zinc-500">
                  Adicione itens aqui{" "}
                </span>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-10">
              <SheetHeader>
                <SheetTitle>Seus Pedidos</SheetTitle>
              </SheetHeader>
              {items?.map((item) => (
                <div className="flex-1 flex-col justify-between">
                  <CartItem item={item} key={item.id} />
                </div>
              ))}
            </div>
          )}

          <div className="fixed bottom-0 right-0 bg-white border  px-5 justify-center w-[20%] py-3 flex flex-col gap-2 ">
            <div className="flex flex-row justify-between font-bold ">
              <span>Total</span>
              <span>
                R$
                {totalPriceItems}
              </span>
            </div>
            <Button
              className="w-full "
              onClick={() => {
                createOrder();
                navigation("/pedidos");
                window.location.reload();
              }}
            >
              Finalizar
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
