import { IBurguers } from "@/types/IBurguer";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function Burguers({ burguers }: { burguers: IBurguers[] }) {
  return (
    <div className="grid grid-cols-3 gap-10">
      {burguers &&
        burguers.map((burguer) => (
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-2xl">{burguer.name}</CardTitle>
              {/* <CardDescription>{}</CardDescription> */}
            </CardHeader>
            <CardContent>{/* <p> {burguer.price}</p> */}</CardContent>
            <CardFooter>
              <p>A partir de {burguer.price}</p>
            </CardFooter>
          </Card>
        ))}
    </div>
  );
}
