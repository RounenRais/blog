"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../components/ui/ThemeToggle";
import ThemeImage from "../components/ThemeImage";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  return (
    <header
      className="
        sticky top-0 z-50 w-full
        dark:bg-zinc-900/1 bg-white
         dark:backdrop-blur-3xl
       
        transition-colors
      "
    >
      {/* DİKKAT: Burada ek blur veya bg yok */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-semibold">
          Yunus Aksu
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="hover:underline decoration-2">Home</Link>
          <Link href="/projects" className="hover:underline decoration-2">Works</Link>
          <Link href="/about" className="hover:underline decoration-2">About</Link>
          <Link href="/contact" className="hover:underline decoration-2">Contact</Link>
          <a
            href="https://github.com/RounenRais"
            className="flex gap-1 hover:underline decoration-2"
          >
            <ThemeImage width={20} height={7} alt="" />
            Source
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menüyü aç</span>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              sideOffset={8}
              className="w-56 bg-background text-foreground border border-border shadow-md"
            >
              <DropdownMenuItem asChild><Link href="/">Home</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link href="/projects">Projects</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link href="/about">About</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link href="/contact">Contact</Link></DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <a href="https://github.com/RounenRais" className="flex gap-1">
                  <ThemeImage width={20} height={7} alt="" />
                  Source
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
