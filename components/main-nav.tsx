"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { usePathname } from "next/navigation";

export function MainNav() {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-10">
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/"
            className={cn(
              "px-8 py-4 rounded-md transition-all text-xl font-medium",
              "bg-black text-white",
              pathname === "/" && "bg-purple-600 shadow-[0_0_15px_rgba(147,51,234,0.5)] text-white font-semibold"
            )}
          >
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
