import { useEffect, useState } from "react";
import * as orderService from "@/services/orderService";

import { IOrder, OrderItem } from "@/components/orders/order-item";

export function Orders() {
  const [orders, setOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const orders = await orderService.listOrders();
      setOrders(orders);
    };

    fetchOrders();
  }, []);

  console.log(orders);

  return (
    <main className="w-full  flex justify-center items-center pb-20">
      <section className="w-full max-w-[1320px] mx-auto  ">
        <div className="flex flex-col gap-10">
          <h1 className="font-semibold text-2xl">Seus Pedidos</h1>

          {orders &&
            orders
              .sort((orderPrev, orderNext) => orderNext.id - orderPrev.id)
              .map((order) => <OrderItem key={order.id} order={order} />)}
        </div>
      </section>
    </main>
  );
}
