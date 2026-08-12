"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { InvestigationRecord } from "@/data/mock-investigations";

interface DetailsProps {
  record?: InvestigationRecord | null;
}

export function InvestigationDetails({ record }: DetailsProps) {
  if (!record) {
    return (
      <Card className="p-6">
        <p className="text-sm text-[color:var(--muted)]">No investigation selected</p>
        <h3 className="mt-2 text-lg font-semibold text-foreground">Select an investigation to view details</h3>
      </Card>
    );
  }

  return (
    <Card className="p-6 space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-[color:var(--muted)]">{new Date(record.timestamp).toLocaleString()}</p>
          <h2 className="mt-1 text-2xl font-semibold text-foreground">{record.subject}</h2>
          <p className="mt-1 text-sm text-[color:var(--muted)]">{record.sender}</p>
          <p className="mt-2 text-xs text-[color:var(--muted)]">ID: {record.id}</p>
        </div>
        <div className="flex flex-col items-end gap-3">
          <Badge variant={record.classification === "Phishing" ? "destructive" : record.classification === "Suspicious" ? "warning" : "default"}>{record.classification}</Badge>
          <div className="text-sm text-[color:var(--muted)]">Severity: {record.severity}</div>
          <div className="text-sm text-[color:var(--muted)]">Score: {record.score}</div>
        </div>
      </div>

      <div>
        <p className="text-sm font-medium text-[color:var(--muted)]">Detection findings</p>
        <ul className="mt-2 list-inside list-disc text-sm text-[color:var(--muted)]">
          {record.findings.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-sm font-medium text-[color:var(--muted)]">AI explanation</p>
        <p className="mt-2 text-sm text-[color:var(--muted)] leading-7">{record.explanation}</p>
      </div>

      <div>
        <p className="text-sm font-medium text-[color:var(--muted)]">Recommended action</p>
        <p className="mt-2 text-sm text-[color:var(--muted)] leading-7">{record.recommendation}</p>
      </div>

      <div className="flex gap-2">
        <Link href={`/investigation/${record.id}`}>
          <Button>View Investigation</Button>
        </Link>
        <Button variant="outline">Export (disabled)</Button>
      </div>
    </Card>
  );
}
