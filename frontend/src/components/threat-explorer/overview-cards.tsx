"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Threat } from "@/data/mock-threats";

interface OverviewCardsProps {
  threats: Threat[];
}

export function OverviewCards({ threats }: OverviewCardsProps) {
  const total = threats.length;
  const critical = threats.filter((t) => t.severity === "Critical").length;
  const domains = new Set<string>();
  const campaigns = new Set<string>();

  threats.forEach((t) => {
    t.indicators.domains.forEach((d) => domains.add(d));
    campaigns.add(t.type + "::" + t.name);
  });

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Card className="p-4">
        <p className="text-sm text-[color:var(--muted)]">Total threats</p>
        <div className="mt-2 flex items-center justify-between">
          <h3 className="text-2xl font-semibold text-foreground">{total}</h3>
          <Badge>Live</Badge>
        </div>
      </Card>
      <Card className="p-4">
        <p className="text-sm text-[color:var(--muted)]">Critical threats</p>
        <div className="mt-2 flex items-center justify-between">
          <h3 className="text-2xl font-semibold text-foreground">{critical}</h3>
          <Badge variant="destructive">Critical</Badge>
        </div>
      </Card>
      <Card className="p-4">
        <p className="text-sm text-[color:var(--muted)]">Suspicious domains</p>
        <div className="mt-2 flex items-center justify-between">
          <h3 className="text-2xl font-semibold text-foreground">{domains.size}</h3>
          <Badge variant="secondary">Domains</Badge>
        </div>
      </Card>
      <Card className="p-4">
        <p className="text-sm text-[color:var(--muted)]">Active campaigns</p>
        <div className="mt-2 flex items-center justify-between">
          <h3 className="text-2xl font-semibold text-foreground">{campaigns.size}</h3>
          <Badge variant="secondary">Campaigns</Badge>
        </div>
      </Card>
    </div>
  );
}
