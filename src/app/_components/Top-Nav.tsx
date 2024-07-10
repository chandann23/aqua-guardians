import { Droplets } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "~/components/ui/button";
import { getAuthSession } from "~/lib/auth";

const TopNav = async () => {
  const session = await getAuthSession();

  return (
    <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold border-b border-gray-500">
      <Link href="/">
        <div className="flex items-center gap-2">
          <Droplets className="h-6 w-6" />
          Aqua Guardians
        </div>
      </Link>
      <div className="flex flex-row gap-4 mr-6">
        {session?.user?.id ? (
          <Link href="/dashboard" className={buttonVariants({ variant: "default" })}>
           Dashboard
          </Link>
        ) : (
          <Link href="/sign-in" className={buttonVariants({ variant: "outline" })}>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default TopNav;

