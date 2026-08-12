"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

import type { Severity, ThreatType } from "@/data/mock-threats";

interface SearchFiltersProps {
  onSearch: (q: string) => void;
  onSeverityChange: (s: Severity[]) => void;
  onTypeChange: (t: ThreatType[]) => void;
}

const severityOptions: Severity[] = ["Critical", "High", "Medium", "Low"];
const typeOptions: ThreatType[] = [
  "Credential Phishing",
  "Brand Impersonation",
  "Malware Delivery",
  "Business Email Compromise",
  "Scam",
];

export function SearchFilters({ onSearch, onSeverityChange, onTypeChange }: SearchFiltersProps) {
  const [query, setQuery] = useState("");
  const [selectedSeverities, setSelectedSeverities] = useState<Severity[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<ThreatType[]>([]);

  function toggleSeverity(s: Severity) {
    const next = selectedSeverities.includes(s) ? selectedSeverities.filter((x) => x !== s) : [...selectedSeverities, s];
    setSelectedSeverities(next);
    onSeverityChange(next);
  }

  function toggleType(t: ThreatType) {
    const next = selectedTypes.includes(t) ? selectedTypes.filter((x) => x !== t) : [...selectedTypes, t];
    setSelectedTypes(next);
    onTypeChange(next);
  }

  return (
    <Card className="p-4">
      <div className="flex flex-col gap-4">
        <Input
          placeholder="Search threats, indicators, subjects..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            onSearch(e.target.value);
          }}
        />

        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <p className="text-sm text-[color:var(--muted)]">Severity</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {severityOptions.map((s) => (
                <button
                  key={s}
                  className={`rounded-full border px-3 py-1 text-sm ${selectedSeverities.includes(s) ? "bg-[color:var(--accent)] text-white" : "bg-transparent text-[color:var(--muted)]"}`}
                  onClick={() => toggleSeverity(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm text-[color:var(--muted)]">Threat type</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {typeOptions.map((t) => (
                <button
                  key={t}
                  className={`rounded-full border px-3 py-1 text-sm ${selectedTypes.includes(t) ? "bg-[color:var(--accent)] text-white" : "bg-transparent text-[color:var(--muted)]"}`}
                  onClick={() => toggleType(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
