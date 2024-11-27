import { IBurguers } from "@/types/IBurguer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function Burguers({ burguers }: { burguers: IBurguers[] }) {
  console.log(burguers);
  return (
    <div className="grid grid-cols-3 gap-10">
      {burguers ? (
        burguers.map((burguer) => (
          <Card className="w-full">
            <img src={burguer.imageUrl} />
            <CardHeader>
              <CardTitle className="text-2xl">{burguer.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="line-clamp-3">
                {burguer.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="mt-5">
              <p className="text-green-600">A partir de R${burguer.price}</p>
            </CardFooter>
          </Card>
        ))
      ) : (
        <span className="text-black">Não há items aqui</span>
      )}
    </div>
  );
}
