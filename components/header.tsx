"use client";

import { MainNav } from "./main-nav";
import UserButton from "./user-button";
import { usePathname } from "next/navigation";

export function Header({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <header className={`h-14 bg-black border-b border-neutral-800 ${className || ''}`}>
      <div className="max-w-5xl mx-auto h-full flex items-center justify-between px-4">
        {pathname !== "/" && <MainNav />}
        {pathname === "/" && <div></div>}
        <UserButton />
      </div>
    </header>
  );
}
