import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import * as categoryService from "@/services/categoryService";

export function Category() {
  const { slug } = useParams();

  const { data } = useQuery({
    queryKey: ["categories-items"],
    queryFn: () => categoryService.getCategoriesItems(slug!),
  });

  return (
    <main className="w-full  flex justify-center items-center pb-20">
      <section className="w-full max-w-[1320px] mx-auto px-6 flex flex-col  ">
        <span>{slug}</span>
        {data?.map((item) => (
          <span>{item.name}</span>
        ))}
      </section>
    </main>
  );
}
