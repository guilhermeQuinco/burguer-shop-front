import { Link } from "react-router-dom";

interface CategoryItemProps {
  name: string;
  slug: string;
}

export function CategoryItem({ name, slug }: CategoryItemProps) {
  return (
    <Link
      to={`/categorias/${slug}`}
      className="border border-red-600 py-3 px-5 rounded-full"
    >
      <span>{name}</span>
    </Link>
  );
}
