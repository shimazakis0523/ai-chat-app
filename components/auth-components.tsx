"use client";

import React from "react";
import { Button } from "./ui/button";
import { handleSignIn, handleSignOut } from "@/app/actions";

export function SignIn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form action={() => handleSignIn(provider)}>
      <Button 
        className="w-32 bg-purple-600 hover:bg-purple-500 text-white font-semibold shadow-[0_0_15px_rgba(147,51,234,0.5)] hover:shadow-[0_0_30px_rgba(147,51,234,0.8)] transition-all"
        {...props}
      >
        Get Started
      </Button>
    </form>
  );
}

export function SignOut({
  ...props
}: React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form action={handleSignOut} className="w-full">
      <Button 
        variant="ghost" 
        className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/50 transition-all"
        {...props}
      >
        Logout
      </Button>
    </form>
  );
}
