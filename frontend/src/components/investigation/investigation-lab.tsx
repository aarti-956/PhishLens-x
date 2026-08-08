"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { AnalysisProgress } from "@/components/investigation/analysis-progress";
import { EmailError } from "@/components/investigation/email-error";
import { EmailInput } from "@/components/investigation/email-input";
import { LoadedEmailReview } from "@/components/investigation/loaded-email-review";
import { ThreatResult } from "@/components/investigation/threat-result";
import { useInvestigation } from "@/components/investigation/investigation-context";
import { Card } from "@/components/ui/card";

const demoEmail = {
  sender: "security@urgent-verify.net",
  recipient: "analyst@company.internal",
  subject: "Urgent: Password reset required immediately",
  body: `Hello,

We detected unusual activity on your account and need you to verify your credentials immediately to prevent suspension.
Please click the secure link below and update your password right away.

https://reset-verify-account.example

This request is urgent and must be completed within 15 minutes.

Regards,
IT Security Team`,
};

export function InvestigationLab() {
  const { email, setEmail } = useInvestigation();
  const [stage, setStage] = useState<"input" | "analyzing" | "complete">("input");
  const [sender, setSender] = useState(email?.sender ?? "");
  const [recipient, setRecipient] = useState(email?.recipient ?? "");
  const [subject, setSubject] = useState(email?.subject ?? "");
  const [body, setBody] = useState(email?.content ?? email?.rawContent ?? "");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function handleAnalyze() {
    if (!email && !body.trim()) {
      setErrorMessage("No email content is available to analyze yet.");
      return;
    }
    setErrorMessage(null);
    setStage("analyzing");
    window.setTimeout(() => setStage("complete"), 1000);
  }

  function handleUseDemo() {
    setSender(demoEmail.sender);
    setRecipient(demoEmail.recipient);
    setSubject(demoEmail.subject);
    setBody(demoEmail.body);
    setEmail({
      sender: demoEmail.sender,
      recipient: demoEmail.recipient,
      subject: demoEmail.subject,
      content: demoEmail.body,
      source: "demo",
      rawContent: demoEmail.body,
    });
    setErrorMessage(null);
    setStage("input");
  }

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
        <Card className="border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl sm:p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">Investigation Lab</p>
          <h1 className="mt-2 text-3xl font-semibold text-foreground">Email → Investigation → Threat Assessment</h1>
          <p className="mt-3 max-w-3xl text-base leading-8 text-[color:var(--muted)]">
            This workspace demonstrates how PhishLens X will guide analysts through a structured review of suspicious email activity using a mock frontend workflow.
          </p>
        </Card>
      </motion.div>

      {stage === "input" ? (
        <>
          {errorMessage ? <EmailError message={errorMessage} /> : null}
          {email ? <LoadedEmailReview email={email} /> : null}
          <EmailInput
            sender={sender}
            recipient={recipient}
            subject={subject}
            body={body}
            onSenderChange={setSender}
            onRecipientChange={setRecipient}
            onSubjectChange={setSubject}
            onBodyChange={setBody}
            onAnalyze={handleAnalyze}
            onUseDemo={handleUseDemo}
          />
        </>
      ) : null}

      {stage === "analyzing" ? <AnalysisProgress /> : null}

      {stage === "complete" ? <ThreatResult /> : null}
    </div>
  );
}
