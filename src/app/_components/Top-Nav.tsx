import { Droplets } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold border-b border-gray-500">
      <Link href="/">
        <div className="flex items-center gap-2">
          <Droplets className="h-6 w-6" />
          Aqua Guardians
        </div></Link>
      <div className="flex flex-row gap-4">
        <Button>
          SIgn In
        </Button>
      </div>

    </nav>

  )
}
