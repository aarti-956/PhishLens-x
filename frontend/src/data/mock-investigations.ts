export type Severity = "Critical" | "High" | "Medium" | "Low";
export type Classification = "Phishing" | "Suspicious" | "Safe";
export type InvestigationStatus = "Completed" | "In Review";

export interface InvestigationRecord {
  id: string;
  subject: string;
  sender: string;
  timestamp: string; // ISO
  score: number; // 0-100
  classification: Classification;
  severity: Severity;
  status: InvestigationStatus;
  findings: string[];
  explanation: string;
  recommendation: string;
}

export const mockInvestigations: InvestigationRecord[] = [
  {
    id: "INV-20260809-001",
    subject: "URGENT: Verify Your Account",
    sender: "security-alert@example.com",
    timestamp: "2026-08-09T11:24:00Z",
    score: 92,
    classification: "Phishing",
    severity: "Critical",
    status: "Completed",
    findings: ["Suspicious sender", "Credential harvesting", "Urgency language"],
    explanation:
      "Message uses urgent account suspension language and links to a typosquatted domain that captures credentials. Sender domain mismatches display name.",
    recommendation: "Block domains, warn users, investigate affected mailboxes",
  },
  {
    id: "INV-20260807-002",
    subject: "Invoice Payment Confirmation",
    sender: "billing@example.com",
    timestamp: "2026-08-07T08:12:00Z",
    score: 68,
    classification: "Suspicious",
    severity: "High",
    status: "Completed",
    findings: ["Sender mismatch", "Payment instruction change"],
    explanation:
      "Thread shows an updated payment request from an unrecognized domain. The link redirects through several short-lived hosts.",
    recommendation: "Investigate mailboxes, confirm with supplier via known channels",
  },
  {
    id: "INV-20260801-003",
    subject: "Weekly Project Meeting",
    sender: "hr@example.com",
    timestamp: "2026-08-01T09:00:00Z",
    score: 8,
    classification: "Safe",
    severity: "Low",
    status: "Completed",
    findings: ["No suspicious indicators"],
    explanation: "Internal HR calendar invite with valid sender and expected content.",
    recommendation: "No action required",
  },
  {
    id: "INV-20260728-004",
    subject: "Interview Invitation - Immediate Response Required",
    sender: "jobs-hr@example.com",
    timestamp: "2026-07-28T09:45:00Z",
    score: 74,
    classification: "Phishing",
    severity: "Medium",
    status: "Completed",
    findings: ["Attachment risk", "Spoofed recruiter domain"],
    explanation: "Recruiter template includes an attachment with macros and originates from a recently registered domain.",
    recommendation: "Warn users, investigate attachments",
  },
  {
    id: "INV-20260722-005",
    subject: "Updated invoice and payment instructions",
    sender: "finance-supplier@example.com",
    timestamp: "2026-07-22T12:30:00Z",
    score: 81,
    classification: "Phishing",
    severity: "High",
    status: "In Review",
    findings: ["Business Email Compromise", "Payment instruction change"],
    explanation: "Invoice thread appears to have been intercepted and modified to change banking details.",
    recommendation: "Hold payment, confirm via phone, investigate mailboxes",
  },
  {
    id: "INV-20260718-006",
    subject: "Your package requires attention",
    sender: "shipping-alerts@example.com",
    timestamp: "2026-07-18T16:50:00Z",
    score: 22,
    classification: "Suspicious",
    severity: "Low",
    status: "Completed",
    findings: ["Urgency language", "Suspicious links"],
    explanation: "Generic shipping notification with links to external tracking site; low confidence of credential theft.",
    recommendation: "Warn users",
  },
  {
    id: "INV-20260714-007",
    subject: "Payroll update required",
    sender: "hr-dept@example.com",
    timestamp: "2026-07-14T10:12:00Z",
    score: 83,
    classification: "Phishing",
    severity: "High",
    status: "In Review",
    findings: ["Brand impersonation", "Targeted"],
    explanation: "Targeted message aimed at finance department requesting payroll information using a spoofed HR template.",
    recommendation: "Investigate mailboxes, warn users",
  },
  {
    id: "INV-20260703-008",
    subject: "Invoice attached - immediate review",
    sender: "supplier-invoices@example.com",
    timestamp: "2026-07-03T11:11:00Z",
    score: 86,
    classification: "Phishing",
    severity: "High",
    status: "Completed",
    findings: ["Attachment risk", "Malware delivery"],
    explanation: "Attachment contains obfuscated macro code consistent with commodity malware distribution.",
    recommendation: "Isolate affected hosts, investigate attachments",
  },
  {
    id: "INV-20260621-009",
    subject: "Mandatory IT Survey",
    sender: "it-support@example.com",
    timestamp: "2026-06-21T09:40:00Z",
    score: 30,
    classification: "Suspicious",
    severity: "Medium",
    status: "Completed",
    findings: ["Social engineering", "Sender mismatch"],
    explanation: "Survey request originates from an external mail provider and requests credentials in the form.",
    recommendation: "Warn users",
  },
  {
    id: "INV-20260515-010",
    subject: "Tax refund available - confirm details",
    sender: "taxdept@example.com",
    timestamp: "2026-05-15T07:55:00Z",
    score: 60,
    classification: "Suspicious",
    severity: "Medium",
    status: "Completed",
    findings: ["Social engineering", "Payment instruction change"],
    explanation: "Tax-related message asking for bank details via external form; appears to be a common scam variant.",
    recommendation: "Warn users",
  },
];
