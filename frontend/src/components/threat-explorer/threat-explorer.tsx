"use client";

import { useMemo, useState } from "react";
import { OverviewCards } from "@/components/threat-explorer/overview-cards";
import { SearchFilters } from "@/components/threat-explorer/search-filters";
import { ThreatList } from "@/components/threat-explorer/threat-list";
import { ThreatDetails } from "@/components/threat-explorer/threat-details";
import { mockThreats, type Threat } from "@/data/mock-threats";
import { motion } from "framer-motion";

export function ThreatExplorer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [severities, setSeverities] = useState<string[]>([]);
  const [types, setTypes] = useState<string[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(mockThreats[0]?.id ?? null);

  const threats = useMemo<Threat[]>(() => mockThreats, []);

  const selected = useMemo(() => threats.find((t) => t.id === selectedId) ?? null, [threats, selectedId]);

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.18 }}>
        <OverviewCards threats={threats} />
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-[0.45fr_0.55fr]">
        <div className="space-y-4">
          <SearchFilters onSearch={setSearchQuery} onSeverityChange={setSeverities} onTypeChange={setTypes} />
          <ThreatList threats={threats} searchQuery={searchQuery} severities={severities} types={types} selectedId={selectedId} onSelect={setSelectedId} />
        </div>
        <div>
          <ThreatDetails threat={selected} />
        </div>
      </div>
    </div>
  );
}
