

// Assuming you have some sample data or fetching logic
// const sampleLakes = [
//   { id: 1, name: "Lake Superior", location: "North America", ph: 7.2, temperature: 4.2, tds: 63, turbidity: 0.5 },
//   { id: 2, name: "Lake Victoria", location: "Africa", ph: 8.1, temperature: 25.6, tds: 97, turbidity: 1.8 },
//   { id: 3, name: "Lake Baikal", location: "Russia", ph: 7.9, temperature: 3.8, tds: 96, turbidity: 0.8 },
//   { id: 4, name: "Lake Superior", location: "North America", ph: 7.2, temperature: 4.2, tds: 63, turbidity: 0.5 },
//   { id: 5, name: "Lake Victoria", location: "Africa", ph: 8.1, temperature: 25.6, tds: 97, turbidity: 1.8 },
//   { id: 6, name: "Lake Baikal", location: "Russia", ph: 7.9, temperature: 3.8, tds: 96, turbidity: 0.8 },
// ];

import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { db } from "~/server/db";
import { LakeCardGrid } from "./_components/LakeCardGrid";
import { AddLakeDialog } from "./_components/AddlakeDialog";





export default async function LakesPage() {
  const lakes = await db.lake.findMany();
  console.log(lakes);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="flex items-center justify-between w-full max-w-4xl mb-8">
        <h1 className="text-4xl font-bold">Aqua Guardian</h1>
        <Button asChild size="icon">
          <Link href="">
            <AddLakeDialog/>
            <span className="sr-only">Add new lake</span>
          </Link>
        </Button>
      </div>
      <LakeCardGrid lakes={lakes} />
      <Button asChild className="mt-8">
        <Link href="/dashboard">Go to Dashboard</Link>
      </Button>
    </div>
  );
}