import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../../../components/ui/sheet";
import { Button } from "../../../components/ui/button";
import {
  Brain,
  CircleHelp,
  Droplets,
  Home,
  Menu,

  Users,
  Waves,
} from "lucide-react";
import Link from "next/link";


export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <nav className="grid gap-2 text-lg font-medium">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <Droplets className="h-6 w-6" />
            <span className="sr-only">Aqua Guardians</span>
          </Link>
          <Link
            href="/dashboard"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
          >
            <Home className="h-5 w-5" />
            Dashboard
          </Link>
          <Link
            href="/chat"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
          >
            <Brain className="h-5 w-5" />
            Ask AI
          </Link>
          <Link
            href="/lakes"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
          >
            <Waves className="h-5 w-5" />
            Lakes
          </Link>
          <Link
            href="/customers"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
          >
            <Users className="h-5 w-5" />
            Customers
          </Link>
          <Link
            href="#"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
          >
            <CircleHelp className="h-5 w-5" />
            About Us
          </Link>
        </nav>

      </SheetContent>
    </Sheet>
  );
}