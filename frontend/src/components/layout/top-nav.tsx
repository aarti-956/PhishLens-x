"use client";

import { Search, SunMoon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function TopNav() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-[rgba(5,8,22,0.72)] px-4 py-3 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-[color:var(--muted)]">
          <Search className="h-4 w-4" />
          <Input className="h-8 w-56 border-none bg-transparent px-0 text-sm shadow-none focus:ring-0" placeholder="Search investigations" />
        </div>
        <Badge variant="secondary">Live Workspace</Badge>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" aria-label="Toggle theme">
          <SunMoon className="h-4 w-4" />
        </Button>
        <Button variant="secondary" className="gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--accent)]/15 text-sm font-semibold text-[color:var(--accent)]">
            AJ
          </div>
          <span className="hidden sm:block">Aarti Jadhav</span>
        </Button>
      </div>
    </header>
  );
}
