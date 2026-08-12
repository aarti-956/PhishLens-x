"use client";

import { useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Threat } from "@/data/mock-threats";

interface ThreatListProps {
  threats: Threat[];
  searchQuery: string;
  severities: string[];
  types: string[];
  selectedId?: string | null;
  onSelect: (id: string) => void;
}

export function ThreatList({ threats, searchQuery, severities, types, selectedId, onSelect }: ThreatListProps) {
  const filtered = useMemo(() => {
    return threats.filter((t) => {
      if (severities.length > 0 && !severities.includes(t.severity)) return false;
      if (types.length > 0 && !types.includes(t.type)) return false;
      const q = searchQuery.trim().toLowerCase();
      if (!q) return true;
      const found =
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.indicators.domains.join(" ").toLowerCase().includes(q) ||
        t.indicators.subjects.join(" ").toLowerCase().includes(q);
      return found;
    });
  }, [threats, searchQuery, severities, types]);

  return (
    <div className="space-y-3">
      {filtered.map((t) => (
        <Card
          key={t.id}
          className={`p-4 cursor-pointer transition ${selectedId === t.id ? "ring-2 ring-[color:var(--accent)]" : "hover:bg-white/3"}`}
          onClick={() => onSelect(t.id)}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm text-[color:var(--muted)]">{t.detectedAt.split("T")[0]}</p>
              <h4 className="mt-1 text-lg font-semibold text-foreground">{t.name}</h4>
              <p className="mt-1 text-sm text-[color:var(--muted)]">{t.type}</p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <Badge variant={t.severity === "Critical" ? "destructive" : t.severity === "High" ? "warning" : "default"}>{t.severity}</Badge>
              <div className="text-sm text-[color:var(--muted)]">Confidence: {t.confidence}%</div>
            </div>
          </div>
        </Card>
      ))}

      {filtered.length === 0 ? <p className="text-sm text-[color:var(--muted)]">No threats match your filters.</p> : null}
    </div>
  );
}
