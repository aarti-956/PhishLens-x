import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

import { AppShell } from "@/components/layout/app-shell";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { InvestigationWorkspace } from "@/components/layout/investigation-workspace";

const summaryCards = [
  { label: "Emails Scanned Today", value: "2,430", tone: "default" as const },
  { label: "Threats Detected", value: "18", tone: "warning" as const },
  { label: "Safe Emails", value: "2,392", tone: "success" as const },
  { label: "Pending Investigations", value: "11", tone: "secondary" as const },
];

export default function Home() {
  return (
    <AppShell>
      <div className="space-y-6">
        <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <Card className="border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8">
            <div className="flex items-center gap-2 text-sm font-medium text-[color:var(--accent)]">
              <Sparkles className="h-4 w-4" />
              Mission Control
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Detect and investigate phishing emails with AI-assisted clarity.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-[color:var(--muted)]">
              PhishLens X helps analysts review suspicious messages, evaluate trust signals, and assess risk in a calm, modern workspace.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/investigation/demo">
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--accent)] px-4 py-2 text-sm font-medium text-[color:var(--accent-foreground)] transition hover:opacity-90">
                  Start New Investigation
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
              <button className="inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-4 py-2 text-sm font-medium text-foreground transition hover:bg-white/5">
                View Sample Report
              </button>
            </div>
          </Card>

          <Card className="border-white/10 bg-[rgba(7,13,32,0.72)] p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">Daily posture</p>
                <p className="mt-2 text-2xl font-semibold text-foreground">Threats contained</p>
              </div>
              <Badge variant="success">Stable</Badge>
            </div>
            <div className="mt-6 space-y-4">
              <div className="rounded-[1rem] border border-white/10 bg-white/[0.035] p-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full border border-[color:var(--accent)]/20 bg-[color:var(--accent)]/10 p-2 text-[color:var(--accent)]">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Analyst queue is healthy</p>
                    <p className="mt-1 text-sm text-[color:var(--muted)]">No critical disruptions detected across the current review pipeline.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-[1rem] border border-white/10 bg-white/[0.035] p-4 text-sm text-[color:var(--muted)]">
                Next recommended action: validate newly surfaced impersonation signals.
              </div>
            </div>
          </Card>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {summaryCards.map((card) => (
            <Card key={card.label} className="border-white/10 bg-[rgba(7,13,32,0.68)] p-5 backdrop-blur-xl">
              <p className="text-sm text-[color:var(--muted)]">{card.label}</p>
              <div className="mt-3 flex items-center justify-between">
                <p className="text-2xl font-semibold text-foreground">{card.value}</p>
                <Badge variant={card.tone}>{card.tone === "default" ? "Live" : card.tone === "warning" ? "Watch" : card.tone === "success" ? "Safe" : "Open"}</Badge>
              </div>
            </Card>
          ))}
        </section>

        <InvestigationWorkspace />
      </div>
    </AppShell>
  );
}
