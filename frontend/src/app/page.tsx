import { Shield, Sparkles, Workflow, Layers3 } from "lucide-react";

import { AppShell } from "@/components/layout/app-shell";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

const foundationHighlights = [
  {
    title: "Design system",
    description: "Tokens, spacing, typography, and color primitives for a premium cyber product",
    icon: Layers3,
  },
  {
    title: "Composable UI",
    description: "Reusable primitives for cards, dialogs, tabs, loading, and empty states",
    icon: Workflow,
  },
  {
    title: "Runtime foundation",
    description: "Providers, app shell, and metadata set for future feature expansion",
    icon: Shield,
  },
];

export default function Home() {
  return (
    <AppShell>
      <div className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
        <Card className="border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
                Foundation pillars
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-foreground">
                Built for scale, clarity, and future product depth.
              </h2>
            </div>
            <Badge variant="accent">Phase 1</Badge>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {foundationHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[1rem] border border-white/10 bg-[rgba(7,13,32,0.7)] p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--accent)]/10 text-[color:var(--accent)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">{item.description}</p>
                </div>
              );
            })}
          </div>
        </Card>

        <Card className="border-white/10 bg-[rgba(7,13,32,0.72)] p-6 backdrop-blur-xl">
          <div className="flex items-center gap-2 text-[color:var(--accent)]">
            <Sparkles className="h-4 w-4" />
            <p className="text-sm font-medium">System readiness</p>
          </div>
          <div className="mt-4 space-y-4">
            <div>
              <div className="mb-2 flex items-center justify-between text-sm text-[color:var(--muted)]">
                <span>Theme configuration</span>
                <span>100%</span>
              </div>
              <Progress value={100} />
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between text-sm text-[color:var(--muted)]">
                <span>Component primitives</span>
                <span>98%</span>
              </div>
              <Progress value={98} />
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between text-sm text-[color:var(--muted)]">
                <span>App architecture</span>
                <span>96%</span>
              </div>
              <Progress value={96} />
            </div>
          </div>
          <Separator className="my-5" />
          <EmptyState
            title="Ready for feature modules"
            description="The next phase can build dashboards, threat investigation views, and AI workflows on top of this polished base."
          />
        </Card>
      </div>
    </AppShell>
  );
}
