'use client'
import {
  Brain,
  CircleHelp,
  Home,
  Users,
  Waves,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { cn } from "~/lib/utils";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden border-r bg-muted/40 md:block md:w-[30%] max-w-[300px]">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              href="/"
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                { "bg-muted text-primary": pathname === "/" }
              )}
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link
              href="/chat"
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                { "bg-muted text-primary": pathname === "/chat" }
              )}
            >
              <Brain className="h-4 w-4" />
              Ask AI
            </Link>
            <Link
              href="/lakes"
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                { "bg-muted text-primary": pathname === "/lakes" }
              )}
            >
              <Waves className="h-4 w-4" />
              Lakes
            </Link>
            <Link
              href="/about"
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                { "bg-muted text-primary": pathname === "/about" }
              )}
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

