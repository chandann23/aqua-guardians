// Assuming you have some sample data or fetching logic
// const sampleLakes = [
//   { id: 1, name: "Lake Superior", location: "North America", ph: 7.2, temperature: 4.2, tds: 63, turbidity: 0.5 },
//   { id: 2, name: "Lake Victoria", location: "Africa", ph: 8.1, temperature: 25.6, tds: 97, turbidity: 1.8 },
//   { id: 3, name: "Lake Baikal", location: "Russia", ph: 7.9, temperature: 3.8, tds: 96, turbidity: 0.8 },
//   { id: 4, name: "Lake Superior", location: "North America", ph: 7.2, temperature: 4.2, tds: 63, turbidity: 0.5 },
//   { id: 5, name: "Lake Victoria", location: "Africa", ph: 8.1, temperature: 25.6, tds: 97, turbidity: 1.8 },
//   { id: 6, name: "Lake Baikal", location: "Russia", ph: 7.9, temperature: 3.8, tds: 96, turbidity: 0.8 },
// ];
"use client"
import Link from "next/link";
import { LakeCardGrid } from "./_components/LakeCardGrid";
import { AddLakeDialog } from "./_components/AddlakeDialog";
import { buttonVariants } from "~/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { Lake } from "@prisma/client";


export default function LakesPage() {

  const { data: lakes } = useQuery({
    queryKey: ["lakes"],
    queryFn: async () => {
      const res = await axios.get("/api/lakes")
      return res.data as Lake[]
    }
  })

  return (
    <div className="flex flex-col items-center justify-center min-h-full p-4">
      <div className="flex items-center justify-between w-full max-w-4xl mb-8">
        <h1 className="text-4xl font-bold">Aqua Guardian</h1>
        <AddLakeDialog />
        <span className="sr-only">Add new lake</span>
      </div>
      {lakes?.length && lakes?.length > 0 &&
        <LakeCardGrid lakes={lakes} />
      }
      <Link className={buttonVariants({ variant: "default" })} href="/dashboard">Go to Dashboard</Link>
    </div>
  );
}
