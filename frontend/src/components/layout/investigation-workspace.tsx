"use client";

import Link from "next/link";
import { ArrowRight, FileUp, Keyboard, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface InvestigationWorkspaceProps {
  onStart?: () => void;
}

export function InvestigationWorkspace({ onStart }: InvestigationWorkspaceProps) {
  return (
    <Card className="border-white/10 bg-[rgba(7,13,32,0.78)] p-6 backdrop-blur-xl sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">Start Investigation</p>
          <h2 className="mt-2 text-2xl font-semibold text-foreground">Begin a secure analysis workflow</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[color:var(--muted)]">
            Upload or paste an email to begin AI-powered phishing analysis. The system evaluates sender authenticity, suspicious links, email content, attachments, and behavioral indicators before generating a detailed threat assessment.
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-[1.4rem] border border-dashed border-[color:var(--accent)]/25 bg-[rgba(124,147,255,0.06)] p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[color:var(--accent)]/25 bg-[color:var(--accent)]/10 text-[color:var(--accent)]">
          <Upload className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-foreground">Drag and drop email evidence</h3>
        <p className="mt-2 text-sm text-[color:var(--muted)]">Drop an .eml file here or use one of the actions below.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button className="gap-2">
            <FileUp className="h-4 w-4" />
            Upload Email (.eml)
          </Button>
          <Button variant="secondary" className="gap-2">
            <Keyboard className="h-4 w-4" />
            Paste Email Content
          </Button>
          <Link href="/investigation/demo">
            <Button variant="outline" className="gap-2" onClick={onStart}>
              Try Demo Email
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
