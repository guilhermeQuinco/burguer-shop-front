import { IItem } from "@/types/IItem";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ItemModalToCart } from "./modal/item-modal-to-cart";

export function Items({ items }: { items: IItem[] }) {
  return (
    <div className="grid grid-cols-3 gap-10">
      {items ? (
        items.map((item) => (
          <ItemModalToCart item={item}>
            <Card
              className="w-full cursor-pointer flex flex-col justify-center items-center"
              key={item.id}
            >
              <img src={item.imageUrl} className="w-[20rem] h-[16rem]" />
              <CardHeader>
                <CardTitle className="text-2xl">{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3">
                  {item.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="mt-5 justify-between">
                <p className="text-green-600">A partir de R${item.price}</p>
              </CardFooter>
            </Card>
          </ItemModalToCart>
        ))
      ) : (
        <span className="text-black">Não há items aqui</span>
      )}
    </div>
  );
}
