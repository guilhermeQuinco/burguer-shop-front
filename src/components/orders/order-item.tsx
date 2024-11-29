import { cancelOrder } from "@/services/orderService";
import { Button } from "../ui/button";

interface IItem {
  quantity: number;
  item: {
    id: number;
    imageUrl: string;
    name: string;
    description: string;
  };
}

export interface IOrder {
  id: number;
  createdAt: string;

  netAmount: string;
  items: IItem[];
}

interface OrderItemProps {
  order: IOrder;
}
export function OrderItem({ order }: OrderItemProps) {
  return (
    <div className="w-full border rounded-2xl ">
      <div className="w-full bg-gray-100 p-6 flex flex-row justify-between">
        <div className="flex flex-row gap-10">
          <div className="flex flex-col">
            <span className="text-lg">Pedido realizado em </span>
            <span className="text-sm">
              {new Date(order.createdAt).toLocaleDateString("pt-br", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg">Total </span>
            <span className="text-sm">
              R${Number(order.netAmount).toFixed(2)}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center ">
            <span className="text-lg">Pedido Nº</span>
            <span className="text-lg">{order.id}</span>
          </div>

          <Button
            className="bg-yellow-400 text-black hover:bg-yellow-300"
            onClick={() => {
              cancelOrder(order.id);
              window.location.reload();
            }}
          >
            Cancelar Pedido
          </Button>
        </div>
      </div>

      <div className="p-6 flex flex-col gap-5">
        {order.items.map((item: IItem) => (
          <div className="flex flex-row gap-5">
            <img
              src={item.item.imageUrl}
              alt={item.item.name}
              className="w-[6rem] h-[5rem]"
            />

            <div className="flex flex-col">
              <span className="font-semibold text-lg">
                {item.quantity}x {item.item.name}
              </span>
              <span className=" text-sm max-w-[500px] text-gray-500 line-clamp-2">
                {item.item.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
