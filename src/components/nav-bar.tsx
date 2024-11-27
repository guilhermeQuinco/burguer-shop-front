import { Utensils } from "lucide-react";
import { CartButton } from "./cart-button";

export function NavBar() {
  return (
    <header className="fixed z-10 w-full border-b-[1px] border-gray-300 bg-white ">
      <nav className="max-w-[1820px] mx-auto p-5 flex items-center justify-between">
        <div className="p-3 bg-red-500 w-fit rounded-lg">
          <Utensils color="yellow" className="w-8 h-8" />
        </div>

        <CartButton />

        {/* <button className="flex flex-row gap-3 items-center p-2 px-3 hover:bg-gray-100 rounded-2xl transition-all duration-500 ease-in-out">
          <ShoppingBag size={30} />

          <div className="text-left">
            <p className="text-[1rem]">R$ 0,00</p>
            <p className="text-[0.8rem]">0 itens</p>
          </div>
        </button> */}
      </nav>
    </header>
  );
}
