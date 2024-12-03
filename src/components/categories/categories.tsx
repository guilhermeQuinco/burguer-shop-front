import { useQuery } from "@tanstack/react-query";
import * as categoryService from "@/services/categoryService";
import { CategoryItem } from "./category-item";

export function Categories() {
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: categoryService.getCategories,
  });
  return (
    <section className="w-full flex flex-row gap-5 ">
      {categories &&
        categories.map((category) => (
          <CategoryItem
            name={category.name}
            slug={category.slug}
            key={category.id}
          />
        ))}
    </section>
  );
}
