import { MainNav } from "./main-nav";
import UserButton from "./user-button";
import { auth } from "@/auth";

export function Header({ className }: { className?: string }) {
  return (
    <header className={`h-14 bg-black border-b border-neutral-800 ${className || ''}`}>
      <div className="max-w-5xl mx-auto h-full flex items-center justify-between px-4">
        <MainNav />
        <UserButton />
      </div>
    </header>
  );
}
