"use client";

import { useMemo, useState } from "react";
import { HistorySearchFilters } from "@/components/history/search-filters";
import { InvestigationList } from "@/components/history/investigation-list";
import { InvestigationDetails } from "@/components/history/investigation-details";
import { mockInvestigations, type InvestigationRecord } from "@/data/mock-investigations";

export function InvestigationHistory() {
  const [query, setQuery] = useState("");
  const [classification, setClassification] = useState<string | "All">("All");
  const [severity, setSeverity] = useState<string | "All">("All");
  const [status, setStatus] = useState<string | "All">("All");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const records = useMemo<InvestigationRecord[]>(() => mockInvestigations, []);
  const selected = useMemo(() => records.find((r) => r.id === selectedId) ?? null, [records, selectedId]);

  function handleReset() {
    setQuery("");
    setClassification("All");
    setSeverity("All");
    setStatus("All");
    setSelectedId(null);
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-foreground">Investigation History</h1>
        <p className="mt-1 text-sm text-[color:var(--muted)]">Review previous email investigations and their threat assessments.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.45fr_0.55fr]">
        <div className="space-y-4">
          <HistorySearchFilters
            onSearch={setQuery}
            onClassificationChange={(c) => setClassification(c)}
            onSeverityChange={(s) => setSeverity(s)}
            onStatusChange={(st) => setStatus(st)}
            onReset={handleReset}
          />

          <InvestigationList records={records} query={query} classification={classification} severity={severity} status={status} selectedId={selectedId} onSelect={setSelectedId} />
        </div>

        <div>
          <InvestigationDetails record={selected} />
        </div>
      </div>
    </div>
  );
}
