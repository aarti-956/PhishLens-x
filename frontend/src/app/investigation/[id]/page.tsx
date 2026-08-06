"use client";

import Link from "next/link";
import { ArrowLeft, BadgeCheck, FileText, ShieldAlert, Sparkles, TriangleAlert } from "lucide-react";

import { AppShell } from "@/components/layout/app-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const findings = [
  {
    label: "Overall Threat Score",
    value: "94/100",
    detail: "High confidence phishing signal",
  },
  {
    label: "Risk Level",
    value: "Critical",
    detail: "Immediate review recommended",
  },
  {
    label: "Email Classification",
    value: "Credential Harvesting",
    detail: "Impersonation and urgency tactics detected",
  },
];

const sections = [
  {
    title: "Sender Analysis",
    description: "The sender domain closely resembles a known impersonation pattern. The display name and reply-to address do not align with the org’s expected infrastructure.",
    icon: ShieldAlert,
  },
  {
    title: "URL Analysis",
    description: "Two embedded links point to newly registered domains with inconsistent TLS identity and low reputation indicators.",
    icon: TriangleAlert,
  },
  {
    title: "Attachment Status",
    description: "A PDF attachment was flagged as a probable phishing payload due to macro-like behavior and suspicious metadata.",
    icon: FileText,
  },
];

export default function InvestigationResultsPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">Investigation Report</p>
            <h1 className="mt-2 text-3xl font-semibold text-foreground">Demo Email Assessment</h1>
          </div>
          <Link href="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to workspace
            </Button>
          </Link>
        </div>

        <Card className="border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-[color:var(--accent)]">Subject</p>
              <h2 className="mt-2 text-2xl font-semibold text-foreground">Urgent password reset required for your account</h2>
            </div>
            <Badge variant="destructive">High Confidence</Badge>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {findings.map((finding) => (
              <div key={finding.label} className="rounded-[1rem] border border-white/10 bg-[rgba(7,13,32,0.7)] p-4">
                <p className="text-sm text-[color:var(--muted)]">{finding.label}</p>
                <p className="mt-2 text-xl font-semibold text-foreground">{finding.value}</p>
                <p className="mt-1 text-sm text-[color:var(--muted)]">{finding.detail}</p>
              </div>
            ))}
          </div>
        </Card>

        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <Card className="border-white/10 bg-[rgba(7,13,32,0.72)] p-6 backdrop-blur-xl">
            <div className="flex items-center gap-2 text-[color:var(--accent)]">
              <Sparkles className="h-4 w-4" />
              <p className="text-sm font-medium">AI Explanation</p>
            </div>
            <p className="mt-4 text-lg leading-8 text-[color:var(--muted)]">
              The message presents a high-pressure scenario designed to trigger immediate action. It combines impersonation cues, suspicious links, and a likely malicious attachment. The analysis highlights strong indicators of credential theft intent.
            </p>
            <div className="mt-6 rounded-[1rem] border border-white/10 bg-white/[0.035] p-4">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <BadgeCheck className="h-4 w-4 text-[color:var(--success)]" />
                Recommended Action
              </div>
              <p className="mt-2 text-sm text-[color:var(--muted)]">Quarantine the email, notify the recipient, and block the related domains and sender infrastructure.</p>
            </div>
          </Card>

          <Card className="border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">Investigation Summary</p>
            <div className="mt-4 space-y-4">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <div key={section.title} className="rounded-[1rem] border border-white/10 bg-[rgba(7,13,32,0.7)] p-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-[color:var(--accent)]/10 p-2 text-[color:var(--accent)]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">{section.title}</h3>
                        <p className="mt-1 text-sm text-[color:var(--muted)]">{section.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
