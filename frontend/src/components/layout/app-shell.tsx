"use client";

import { useState } from "react";

import { SidebarNav } from "@/components/layout/sidebar-nav";
import { TopNav } from "@/components/layout/top-nav";
import { PageTransition } from "@/components/layout/page-transition";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(124,147,255,0.16),_transparent_35%),linear-gradient(135deg,#050816_0%,#060b1b_45%,#03040d_100%)] text-foreground">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-3 py-3 sm:px-4 lg:px-5">
        <div className="flex min-h-[calc(100vh-1.5rem)] overflow-hidden rounded-[1.7rem] border border-white/10 bg-[rgba(4,8,20,0.88)] shadow-[0_30px_80px_rgba(1,6,18,0.55)] backdrop-blur-2xl">
          <SidebarNav collapsed={collapsed} onToggle={() => setCollapsed((value) => !value)} />
          <div className="flex min-w-0 flex-1 flex-col">
            <TopNav />
            <main className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
              <PageTransition>{children}</PageTransition>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
