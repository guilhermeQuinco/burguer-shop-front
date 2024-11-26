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
    <main className="w-full min-h-screen flex justify-center items-center ">
      <section className="w-full max-w-[1320px] mx-auto  ">
        <Burguers burguers={burguers} />
      </section>
    </main>
  );
}
