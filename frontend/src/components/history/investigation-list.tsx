"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { InvestigationRecord } from "@/data/mock-investigations";

interface InvestigationListProps {
  records: InvestigationRecord[];
  query: string;
  classification: string | "All";
  severity: string | "All";
  status: string | "All";
  selectedId?: string | null;
  onSelect: (id: string) => void;
}

export function InvestigationList({ records, query, classification, severity, status, selectedId, onSelect }: InvestigationListProps) {
  const filtered = records.filter((r) => {
    if (classification !== "All" && r.classification !== classification) return false;
    if (severity !== "All" && r.severity !== severity) return false;
    if (status !== "All" && r.status !== status) return false;
    const q = query.trim().toLowerCase();
    if (!q) return true;
    if (r.subject.toLowerCase().includes(q)) return true;
    if (r.sender.toLowerCase().includes(q)) return true;
    if (r.id.toLowerCase().includes(q)) return true;
    if (r.classification.toLowerCase().includes(q)) return true;
    return false;
  });

  return (
    <div className="space-y-3">
      {filtered.map((r) => (
        <Card
          key={r.id}
          className={`p-4 cursor-pointer transition ${selectedId === r.id ? "ring-2 ring-[color:var(--accent)]" : "hover:bg-white/3"}`}
          onClick={() => onSelect(r.id)}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs text-[color:var(--muted)]">{new Date(r.timestamp).toLocaleString()}</p>
              <h4 className="mt-1 text-lg font-semibold text-foreground">{r.subject}</h4>
              <p className="mt-1 text-sm text-[color:var(--muted)]">{r.sender}</p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <Badge variant={r.classification === "Phishing" ? "destructive" : r.classification === "Suspicious" ? "warning" : "default"}>{r.classification}</Badge>
              <div className="text-sm text-[color:var(--muted)]">Score: {r.score}</div>
              <div className="text-sm text-[color:var(--muted)]">{r.status}</div>
            </div>
          </div>
        </Card>
      ))}

      {filtered.length === 0 ? (
        <Card className="p-6 text-center">
          <p className="text-sm text-[color:var(--muted)]">No investigations found</p>
          <p className="mt-2 text-sm text-[color:var(--muted)]">Try changing your search or filters.</p>
        </Card>
      ) : null}
    </div>
  );
}
