import { useEffect, useState } from "react";
import { IItem } from "@/types/IItem";
import * as itemService from "@/services/itemService";

import { Items } from "@/components/items";

export function MainPage() {
  const [items, setItems] = useState<IItem[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await itemService.getItems();
      setItems(response.burguers.data);
    };

    fetchItems();
  }, []);

  return (
    <main className="w-full  flex justify-center items-center pb-20">
      <section className="w-full max-w-[1320px] mx-auto  ">
        <div className="flex flex-col gap-6">
          <h1 className="font-semibold text-2xl">Cardápio</h1>
          <Items items={items} />
        </div>
      </section>
    </main>
  );
}
