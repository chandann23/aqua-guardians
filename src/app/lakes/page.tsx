
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { LakeCardGrid } from "./_components/LakeCardGrid";

// Assuming you have some sample data or fetching logic
const sampleLakes = [
  { id: 1, name: "Lake Superior", location: "North America", ph: 7.2, temperature: 4.2, tds: 63, turbidity: 0.5 },
  { id: 2, name: "Lake Victoria", location: "Africa", ph: 8.1, temperature: 25.6, tds: 97, turbidity: 1.8 },
  { id: 3, name: "Lake Baikal", location: "Russia", ph: 7.9, temperature: 3.8, tds: 96, turbidity: 0.8 },
  { id: 4, name: "Lake Superior", location: "North America", ph: 7.2, temperature: 4.2, tds: 63, turbidity: 0.5 },
  { id: 5, name: "Lake Victoria", location: "Africa", ph: 8.1, temperature: 25.6, tds: 97, turbidity: 1.8 },
  { id: 6, name: "Lake Baikal", location: "Russia", ph: 7.9, temperature: 3.8, tds: 96, turbidity: 0.8 },
];

export default function LakesPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-8">Aqua Guardian</h1>
      <LakeCardGrid lakes={sampleLakes} />
      <Button asChild className="mt-8">
        <Link href="/dashboard">Go to Dashboard</Link>
      </Button>
    </div>
  );
}