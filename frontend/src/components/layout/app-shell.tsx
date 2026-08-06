import { ShieldCheck, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LoadingState } from "@/components/ui/loading-state";
import { siteConfig } from "@/config/site";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(124,147,255,0.16),_transparent_35%),linear-gradient(135deg,#050816_0%,#060b1b_45%,#03040d_100%)] text-foreground">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-8 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="rounded-full border border-[color:var(--accent)]/30 bg-[color:var(--accent)]/10 p-2 text-[color:var(--accent)]">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-[color:var(--muted)] uppercase">
                {siteConfig.name}
              </p>
              <p className="text-sm text-[color:var(--muted)]">{siteConfig.tagline}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="secondary">Foundation Ready</Badge>
            <Button variant="secondary">Preview</Button>
          </div>
        </header>

        <main className="flex-1">
          <section className="mb-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <Card className="border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="flex items-center gap-2 text-sm font-medium text-[color:var(--accent)]">
                <Sparkles className="h-4 w-4" />
                Secure by design
              </div>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                A premium investigation experience for modern cyber teams.
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-[color:var(--muted)]">
                This foundation establishes the visual system, reusable building blocks, and scalable architecture for the upcoming PhishLens X product experience.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button>Explore UI System</Button>
                <Button variant="outline">Review Architecture</Button>
              </div>
            </Card>

            <Card className="border-white/10 bg-[rgba(7,13,32,0.72)] p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-[color:var(--muted)]">System status</p>
                  <p className="mt-1 text-2xl font-semibold text-foreground">Operational</p>
                </div>
                <Badge variant="success">Live</Badge>
              </div>
              <div className="mt-6 space-y-4">
                <LoadingState label="Initializing design tokens" />
                <div className="rounded-[1rem] border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-sm text-[color:var(--muted)]">Architecture ready for feature modules, providers, and shared services.</p>
                </div>
              </div>
            </Card>
          </section>

          {children}
        </main>
      </div>
    </div>
  );
}
