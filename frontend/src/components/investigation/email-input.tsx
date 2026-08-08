"use client";

import { useRef } from "react";
import { FileUp, Keyboard, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface EmailInputProps {
  sender: string;
  recipient: string;
  subject: string;
  body: string;
  onSenderChange: (value: string) => void;
  onRecipientChange: (value: string) => void;
  onSubjectChange: (value: string) => void;
  onBodyChange: (value: string) => void;
  onAnalyze: () => void;
  onUseDemo: () => void;
}

export function EmailInput({
  sender,
  recipient,
  subject,
  body,
  onSenderChange,
  onRecipientChange,
  onSubjectChange,
  onBodyChange,
  onAnalyze,
  onUseDemo,
}: EmailInputProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="space-y-6">
      <Card className="border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">Provide Email</p>
            <h2 className="mt-2 text-xl font-semibold text-foreground">Capture the message for review</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="secondary" className="gap-2" onClick={() => fileInputRef.current?.click()}>
              <FileUp className="h-4 w-4" />
              Upload Email
            </Button>
            <Button variant="outline" className="gap-2" onClick={onUseDemo}>
              <Sparkles className="h-4 w-4" />
              Try Demo Email
            </Button>
          </div>
        </div>

        <input ref={fileInputRef} type="file" accept=".eml,.txt" className="hidden" />

        <div className="mt-5 rounded-[1.2rem] border border-dashed border-[color:var(--accent)]/25 bg-[rgba(124,147,255,0.05)] p-5 text-center">
          <p className="text-sm text-[color:var(--muted)]">Supported formats: .eml and .txt</p>
          <p className="mt-2 text-sm text-[color:var(--muted)]">Drop a suspicious email into the workspace or paste content manually to begin the investigation.</p>
        </div>
      </Card>

      <Card className="border-white/10 bg-[rgba(7,13,32,0.72)] p-5 backdrop-blur-xl sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">Paste Email</p>
            <h2 className="mt-1 text-xl font-semibold text-foreground">Enter the message details</h2>
          </div>
          <Button className="gap-2" onClick={onAnalyze}>
            <Keyboard className="h-4 w-4" />
            Analyze Email
          </Button>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm text-[color:var(--muted)]">Sender</label>
            <Input value={sender} onChange={(event) => onSenderChange(event.target.value)} placeholder="security@trusted-org.example" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-[color:var(--muted)]">Recipient</label>
            <Input value={recipient} onChange={(event) => onRecipientChange(event.target.value)} placeholder="analyst@company.example" />
          </div>
        </div>

        <div className="mt-4">
          <label className="mb-2 block text-sm text-[color:var(--muted)]">Subject</label>
          <Input value={subject} onChange={(event) => onSubjectChange(event.target.value)} placeholder="Urgent action required" />
        </div>

        <div className="mt-4">
          <label className="mb-2 block text-sm text-[color:var(--muted)]">Email content</label>
          <textarea
            value={body}
            onChange={(event) => onBodyChange(event.target.value)}
            className="min-h-48 w-full rounded-[1rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[color:var(--ring)]"
            placeholder="Paste the email body here..."
          />
        </div>
      </Card>
    </div>
  );
}
