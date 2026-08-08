"use client";

import { BadgeCheck, FileText, Link2, ShieldAlert, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const findings = [
  {
    title: "Sender Analysis",
    status: "Detected",
    description: "The sender domain closely resembles an impersonation pattern and does not align with the organization’s expected infrastructure.",
    icon: ShieldAlert,
  },
  {
    title: "URL Analysis",
    status: "Suspicious",
    description: "Embedded links point to newly registered domains with inconsistent TLS identity and low trust indicators.",
    icon: Link2,
  },
  {
    title: "Content Analysis",
    status: "Detected",
    description: "The email uses urgency, fear, and credential requests to pressure the recipient into acting immediately.",
    icon: Sparkles,
  },
  {
    title: "Attachment Analysis",
    status: "Unknown",
    description: "The attachment could not be verified locally and should be treated as potentially risky until inspected further.",
    icon: FileText,
  },
];

export function ThreatResult() {
  return (
    <div className="space-y-6">
      <Card className="border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">Threat Assessment</p>
            <h2 className="mt-2 text-2xl font-semibold text-foreground">Mock investigation result</h2>
          </div>
          <Badge variant="destructive">Critical</Badge>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-[1rem] border border-white/10 bg-[rgba(7,13,32,0.7)] p-4">
            <p className="text-sm text-[color:var(--muted)]">Threat Score</p>
            <p className="mt-2 text-2xl font-semibold text-foreground">92/100</p>
          </div>
          <div className="rounded-[1rem] border border-white/10 bg-[rgba(7,13,32,0.7)] p-4">
            <p className="text-sm text-[color:var(--muted)]">Risk Level</p>
            <p className="mt-2 text-2xl font-semibold text-foreground">Critical</p>
          </div>
          <div className="rounded-[1rem] border border-white/10 bg-[rgba(7,13,32,0.7)] p-4">
            <p className="text-sm text-[color:var(--muted)]">Classification</p>
            <p className="mt-2 text-2xl font-semibold text-foreground">Phishing</p>
          </div>
        </div>
      </Card>

      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <Card className="border-white/10 bg-[rgba(7,13,32,0.72)] p-6 backdrop-blur-xl">
          <div className="flex items-center gap-2 text-[color:var(--accent)]">
            <Sparkles className="h-4 w-4" />
            <p className="text-sm font-medium">AI Analysis</p>
          </div>
          <p className="mt-4 text-base leading-8 text-[color:var(--muted)]">
            This mock analysis is intended to demonstrate the product experience. The message appears to impersonate a trusted organization, creates artificial urgency, and requests credentials through a suspicious link.
          </p>
          <div className="mt-6 rounded-[1rem] border border-white/10 bg-white/[0.035] p-4">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <BadgeCheck className="h-4 w-4 text-[color:var(--success)]" />
              Recommended Action
            </div>
            <p className="mt-2 text-sm text-[color:var(--muted)]">Do not click links or provide credentials. Verify the sender through an independent trusted channel.</p>
          </div>
        </Card>

        <Card className="border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">Findings</p>
          <div className="mt-4 space-y-3">
            {findings.map((finding) => {
              const Icon = finding.icon;
              return (
                <div key={finding.title} className="rounded-[1rem] border border-white/10 bg-[rgba(7,13,32,0.7)] p-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-[color:var(--accent)]/10 p-2 text-[color:var(--accent)]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="font-medium text-foreground">{finding.title}</h3>
                        <Badge variant={finding.status === "Detected" ? "destructive" : finding.status === "Suspicious" ? "warning" : "secondary"}>{finding.status}</Badge>
                      </div>
                      <p className="mt-2 text-sm text-[color:var(--muted)]">{finding.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
}
