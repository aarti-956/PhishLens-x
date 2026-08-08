"use client";

import { Card } from "@/components/ui/card";
import type { InvestigationEmailData } from "@/components/investigation/investigation-context";

interface LoadedEmailReviewProps {
  email: InvestigationEmailData;
}

export function LoadedEmailReview({ email }: LoadedEmailReviewProps) {
  return (
    <Card className="border-white/10 bg-[rgba(7,13,32,0.72)] p-5 backdrop-blur-xl sm:p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">Loaded Email</p>
      <h2 className="mt-2 text-xl font-semibold text-foreground">Review the captured email content</h2>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="rounded-[1rem] border border-white/10 bg-white/[0.035] p-4">
          <p className="text-sm text-[color:var(--muted)]">Source</p>
          <p className="mt-2 font-medium text-foreground">{email.fileName ?? email.source}</p>
          {email.fileType ? <p className="mt-1 text-sm text-[color:var(--muted)]">{email.fileType}</p> : null}
        </div>
        <div className="rounded-[1rem] border border-white/10 bg-white/[0.035] p-4">
          <p className="text-sm text-[color:var(--muted)]">Sender</p>
          <p className="mt-2 font-medium text-foreground">{email.sender ?? "Unavailable"}</p>
        </div>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="rounded-[1rem] border border-white/10 bg-white/[0.035] p-4">
          <p className="text-sm text-[color:var(--muted)]">Recipient</p>
          <p className="mt-2 font-medium text-foreground">{email.recipient ?? "Unavailable"}</p>
        </div>
        <div className="rounded-[1rem] border border-white/10 bg-white/[0.035] p-4">
          <p className="text-sm text-[color:var(--muted)]">Subject</p>
          <p className="mt-2 font-medium text-foreground">{email.subject ?? "Untitled"}</p>
        </div>
      </div>

      <div className="mt-4 rounded-[1rem] border border-white/10 bg-white/[0.035] p-4">
        <p className="text-sm text-[color:var(--muted)]">Email content</p>
        <div className="mt-3 max-h-72 overflow-auto rounded-[0.9rem] border border-white/10 bg-[rgba(5,8,22,0.65)] p-4 text-sm leading-7 text-[color:var(--muted)]">
          {email.content ?? email.rawContent ?? "No content available."}
        </div>
      </div>
    </Card>
  );
}
