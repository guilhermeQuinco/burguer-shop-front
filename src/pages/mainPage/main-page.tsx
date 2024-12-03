import * as categoryService from "@/services/categoryService";

import { Items } from "@/components/items";
import { useQuery } from "@tanstack/react-query";
import { Categories } from "@/components/categories/categories";

export function MainPage() {
  const { data: burguers } = useQuery({
    queryKey: ["burguers"],
    queryFn: () => categoryService.getCategoriesItems("burguers"),
  });

  const { data: deserts } = useQuery({
    queryKey: ["deserts"],
    queryFn: () => categoryService.getCategoriesItems("sobremesas"),
  });

  return (
    <main className="w-full  flex justify-center items-center pb-20">
      <section className="w-full max-w-[1320px] mx-auto px-6 flex flex-col gap-20">
        <Categories />
        <div className="flex flex-col gap-6">
          <h1 className="font-extrabold text-2xl">Burguers</h1>
          <Items items={burguers!} />
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="font-extrabold text-2xl">Sobremesas</h1>
          <Items items={deserts!} />
        </div>
      </section>
    </main>
  );
}
