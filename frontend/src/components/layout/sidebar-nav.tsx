"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navigationItems } from "@/constants/navigation";
import { cn } from "@/lib/utils";

interface SidebarNavProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function SidebarNav({ collapsed, onToggle }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <aside className={cn(
      "flex h-full flex-col border-r border-white/10 bg-[rgba(5,8,22,0.82)] backdrop-blur-xl transition-all duration-300",
      collapsed ? "w-20" : "w-72",
    )}>
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
        <div className={cn("flex items-center gap-3", collapsed && "justify-center") }>
          <div className="rounded-full border border-[color:var(--accent)]/25 bg-[color:var(--accent)]/10 p-2 text-[color:var(--accent)]">
            <PanelLeftClose className="h-4 w-4" />
          </div>
          {!collapsed ? <div><p className="text-sm font-semibold">PhishLens X</p><p className="text-xs text-[color:var(--muted)]">Analyst Workspace</p></div> : null}
        </div>
        <Button variant="ghost" size="icon" onClick={onToggle} aria-label="Toggle sidebar">
          {collapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
        </Button>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-[1rem] px-3 py-3 text-sm font-medium transition-all duration-200",
                active
                  ? "bg-[color:var(--accent)]/15 text-[color:var(--accent)] shadow-[inset_0_0_0_1px_rgba(124,147,255,0.18)]"
                  : "text-[color:var(--muted)] hover:bg-white/5 hover:text-foreground",
                collapsed && "justify-center px-2",
              )}
            >
              <Icon className="h-4 w-4" />
              {!collapsed ? <span>{item.title}</span> : null}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 p-4 text-sm text-[color:var(--muted)]">
        {!collapsed ? (
          <div className="rounded-[1rem] border border-white/10 bg-white/[0.035] p-3">
            <p className="font-medium text-foreground">Threat readiness</p>
            <p className="mt-1 text-xs">Analyst queue is prepared for the next review.</p>
          </div>
        ) : null}
      </div>
    </aside>
  );
}
