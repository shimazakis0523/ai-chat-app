import React from "react";
import { Button } from "./ui/button";
import { signIn, signOut } from "@/auth";

export function SignIn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider);
      }}
    >
      <Button 
        className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all hover:shadow-[0_0_25px_rgba(6,182,212,0.65)]"
        {...props}
      >
        Sign In
      </Button>
    </form>
  );
}

export function SignOut({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
      className="w-full"
    >
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
