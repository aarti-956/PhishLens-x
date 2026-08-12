"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import type { Severity, Classification } from "@/data/mock-investigations";

interface SearchFiltersProps {
  onSearch: (q: string) => void;
  onClassificationChange: (c: Classification | "All") => void;
  onSeverityChange: (s: Severity | "All") => void;
  onStatusChange: (st: string | "All") => void;
  onReset: () => void;
}

export function HistorySearchFilters({ onSearch, onClassificationChange, onSeverityChange, onStatusChange, onReset }: SearchFiltersProps) {
  const [q, setQ] = useState("");
  const classifications: (Classification | "All")[] = ["All", "Phishing", "Suspicious", "Safe"];
  const severities: (Severity | "All")[] = ["All", "Critical", "High", "Medium", "Low"];
  const statuses = ["All", "Completed", "In Review"];

  return (
    <Card className="p-4">
      <div className="flex flex-col gap-3">
        <Input
          placeholder="Search by subject, sender, classification, or ID"
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            onSearch(e.target.value);
          }}
        />

        <div className="flex flex-wrap items-center gap-2">
          <div className="flex gap-2">
            {classifications.map((c) => (
              <button
                key={c}
                className="rounded-full border px-3 py-1 text-sm text-[color:var(--muted)] hover:bg-white/5"
                onClick={() => onClassificationChange(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            {severities.map((s) => (
              <button
                key={s}
                className="rounded-full border px-3 py-1 text-sm text-[color:var(--muted)] hover:bg-white/5"
                onClick={() => onSeverityChange(s)}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            {statuses.map((st) => (
              <button
                key={st}
                className="rounded-full border px-3 py-1 text-sm text-[color:var(--muted)] hover:bg-white/5"
                onClick={() => onStatusChange(st)}
              >
                {st}
              </button>
            ))}
          </div>

          <div className="ml-auto">
            <Button variant="ghost" onClick={onReset}>
              Reset
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
