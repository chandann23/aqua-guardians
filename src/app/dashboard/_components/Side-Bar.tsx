import {
  Brain,
  CircleHelp,
  Home,
  Users,
  Waves,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <aside className="hidden border-r bg-muted/40 md:block md:w-[30%] max-w-[300px]">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              href="/"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link
              href="/chat"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Brain className="h-4 w-4" />
              Ask AI

            </Link>
            <Link
              href="/lakes"
              className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
            >
              <Waves className="h-4 w-4" />
              Lakes
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Users className="h-4 w-4" />
              Customers
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <CircleHelp className="h-4 w-4" />
              About Us
            </Link>
          </nav>
        </div>

      </div>
    </aside>
  );
}
