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
    },
    staleTime : 2000,
    refetchInterval: 2000,
    refetchIntervalInBackground: true,
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
