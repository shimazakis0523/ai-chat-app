"use client";

import { Button } from "./ui/button";
import { useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { SignIn, SignOut } from "./auth-components";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function UserButton() {
  const { data: session } = useSession();
  
  if (!session?.user) return <SignIn />;

  return (
    <div className="flex gap-3 items-center">
      <span className="hidden text-base text-white sm:inline-flex">
        {session.user.email}
      </span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative w-12 h-12 rounded-full">
            <Avatar className="w-12 h-12">
              {session.user.image && (
                <AvatarImage
                  src={session.user.image}
                  alt={session.user.name ?? ""}
                />
              )}
              <AvatarFallback>{session.user.email?.[0]}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-72" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-base font-medium leading-none">
                {session.user.name}
              </p>
              <p className="text-sm leading-none text-muted-foreground">
                {session.user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuItem>
            <SignOut />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
