import { Burguers } from "@/components/burguers";
import { useEffect, useState } from "react";
import { IBurguers } from "@/types/IBurguer";
import * as burguerService from "@/services/burguerService";

export function MainPage() {
  const [burguers, setBurguers] = useState<IBurguers[]>([]);

  useEffect(() => {
    const fetchBurguers = async () => {
      const response = await burguerService.getBurguers();
      setBurguers(response.burguers.data);
    };

    fetchBurguers();
  }, []);

  return (
    <main className="w-full  flex justify-center items-center ">
      <section className="w-full max-w-[1320px] mx-auto  ">
        <div className="flex flex-col gap-6">
          <h1 className="font-semibold text-2xl">Burguers</h1>
          <Burguers burguers={burguers} />
        </div>
      </section>
    </main>
  );
}
