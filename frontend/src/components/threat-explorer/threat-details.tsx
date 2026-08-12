"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Threat } from "@/data/mock-threats";

interface ThreatDetailsProps {
  threat?: Threat | null;
}

export function ThreatDetails({ threat }: ThreatDetailsProps) {
  if (!threat) {
    return (
      <Card className="p-6">
        <p className="text-sm text-[color:var(--muted)]">No threat selected</p>
        <h3 className="mt-2 text-lg font-semibold text-foreground">Select a threat to view details</h3>
      </Card>
    );
  }

  return (
    <Card className="p-6 space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-[color:var(--muted)]">{threat.detectedAt.split("T")[0]}</p>
          <h2 className="mt-1 text-2xl font-semibold text-foreground">{threat.name}</h2>
          <p className="mt-1 text-sm text-[color:var(--muted)]">{threat.type}</p>
        </div>
        <div className="flex flex-col items-end gap-3">
          <Badge variant={threat.severity === "Critical" ? "destructive" : threat.severity === "High" ? "warning" : "default"}>{threat.severity}</Badge>
          <div className="text-sm text-[color:var(--muted)]">Confidence: {threat.confidence}%</div>
        </div>
      </div>

      <div>
        <p className="text-sm font-medium text-[color:var(--muted)]">Description</p>
        <p className="mt-2 text-sm text-[color:var(--muted)] leading-7">{threat.description}</p>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <p className="text-sm font-medium text-[color:var(--muted)]">Indicators</p>
          <div className="mt-2 space-y-2">
            <div>
              <p className="text-xs text-[color:var(--muted)]">Suspicious domains</p>
              <div className="mt-1 flex flex-wrap gap-2">
                {threat.indicators.domains.map((d) => (
                  <span key={d} className="rounded-full border px-3 py-1 text-sm text-[color:var(--muted)] bg-white/2">
                    {d}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs text-[color:var(--muted)]">URLs</p>
              <div className="mt-1 flex flex-wrap gap-2">
                {threat.indicators.urls.map((u) => (
                  <a key={u} href={u} className="rounded-full border px-3 py-1 text-sm text-[color:var(--accent)] hover:underline" target="_blank" rel="noreferrer">
                    {u}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-[color:var(--muted)]">Other indicators</p>
          <div className="mt-2 space-y-2">
            <div>
              <p className="text-xs text-[color:var(--muted)]">Email subjects</p>
              <div className="mt-1 flex flex-wrap gap-2">
                {threat.indicators.subjects.map((s) => (
                  <span key={s} className="rounded-full border px-3 py-1 text-sm text-[color:var(--muted)] bg-white/2">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs text-[color:var(--muted)]">Sender domains</p>
              <div className="mt-1 flex flex-wrap gap-2">
                {threat.indicators.senderDomains.map((s) => (
                  <span key={s} className="rounded-full border px-3 py-1 text-sm text-[color:var(--muted)] bg-white/2">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="text-sm font-medium text-[color:var(--muted)]">Detection signals</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {threat.signals.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-medium text-[color:var(--muted)]">Recommended actions</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {threat.recommendedActions.map((a) => (
            <Button key={a} variant="outline" className="gap-2">
              {a}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
}
