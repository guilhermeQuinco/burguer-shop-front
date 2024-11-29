import { Utensils } from "lucide-react";
import { Cart } from "./cart/cart";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <header className="fixed z-10 w-full border-b-[1px] border-gray-300 bg-white ">
      <nav className="max-w-[1820px] mx-auto p-5 flex items-center justify-between">
        <div className="p-3 bg-red-500 w-fit rounded-lg">
          <Link to="/">
            <Utensils color="yellow" className="w-8 h-8" />
          </Link>
        </div>
        <div className="flex flex-row items-center gap-10 ">
          <Link
            to={"/pedidos"}
            className="border rounded-full px-5 py-4 border-red-600 hover:bg-zinc-100 "
          >
            Seus Pedidos
          </Link>
          <Cart />
        </div>
      </nav>
    </header>
  );
}
