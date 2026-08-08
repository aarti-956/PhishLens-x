"use client";

import { motion } from "framer-motion";
import { Activity, ScanLine, ShieldCheck, Sparkles } from "lucide-react";

import { Card } from "@/components/ui/card";

const steps = [
  "Scanning email",
  "Analyzing sender",
  "Inspecting URLs",
  "Evaluating content",
  "Generating threat assessment",
];

export function AnalysisProgress() {
  return (
    <Card className="border-white/10 bg-[rgba(7,13,32,0.72)] p-6 backdrop-blur-xl">
      <div className="flex items-center gap-2 text-[color:var(--accent)]">
        <Activity className="h-4 w-4" />
        <p className="text-sm font-medium">Mock analysis in progress</p>
      </div>
      <div className="mt-6 space-y-3">
        {steps.map((step, index) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between rounded-[1rem] border border-white/10 bg-white/[0.035] px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-[color:var(--accent)]/10 p-2 text-[color:var(--accent)]">
                {index === steps.length - 1 ? <ShieldCheck className="h-4 w-4" /> : <ScanLine className="h-4 w-4" />}
              </div>
              <span className="text-sm text-foreground">{step}</span>
            </div>
            <Sparkles className="h-4 w-4 text-[color:var(--muted)]" />
          </motion.div>
        ))}
      </div>
    </Card>
  );
}
