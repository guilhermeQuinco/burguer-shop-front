import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingBag } from "lucide-react";

export function CartButton() {
  return (
    <Sheet>
      <SheetTrigger className="flex gap-3 items-center">
        <ShoppingBag size={30} />
        <div className="text-left">
          <p className="text-[1rem]">R$ 0,00</p>
          <p className="text-[0.8rem]">0 itens</p>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
