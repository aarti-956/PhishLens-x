"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export interface InvestigationEmailData {
  fileName?: string;
  fileType?: string;
  fileSize?: number;
  sender?: string;
  recipient?: string;
  subject?: string;
  content?: string;
  source: "upload" | "paste" | "demo";
  rawContent?: string;
}

interface InvestigationContextValue {
  email: InvestigationEmailData | null;
  setEmail: (email: InvestigationEmailData | null) => void;
}

const InvestigationContext = createContext<InvestigationContextValue | undefined>(undefined);

export function InvestigationProvider({ children }: { children: ReactNode }) {
  const [email, setEmail] = useState<InvestigationEmailData | null>(null);

  const value = useMemo(() => ({ email, setEmail }), [email]);

  return <InvestigationContext.Provider value={value}>{children}</InvestigationContext.Provider>;
}

export function useInvestigation() {
  const context = useContext(InvestigationContext);
  if (!context) {
    throw new Error("useInvestigation must be used within an InvestigationProvider");
  }
  return context;
}
