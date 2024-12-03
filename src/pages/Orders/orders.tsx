import * as orderService from "@/services/orderService";

import { OrderItem } from "@/components/orders/order-item";
import { useQuery } from "@tanstack/react-query";

export function Orders() {
  const { data: orders } = useQuery({
    queryKey: ["orders"],
    queryFn: orderService.listOrders,
  });

  return (
    <main className="w-full  flex justify-center items-center pb-20">
      <section className="w-full max-w-[1320px] mx-auto px-6  ">
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
