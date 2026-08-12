export type Severity = "Critical" | "High" | "Medium" | "Low";
export type ThreatType =
  | "Credential Phishing"
  | "Brand Impersonation"
  | "Malware Delivery"
  | "Business Email Compromise"
  | "Scam";

export interface Threat {
  id: string;
  name: string;
  severity: Severity;
  type: ThreatType;
  detectedAt: string; // ISO date
  confidence: number; // 0-100
  status: "Open" | "Investigating" | "Mitigated" | "Closed";
  description: string;
  indicators: {
    domains: string[];
    urls: string[];
    subjects: string[];
    senderDomains: string[];
  };
  signals: string[];
  recommendedActions: string[];
}

export const mockThreats: Threat[] = [
  {
    id: "t-001",
    name: "Microsoft Credential Harvesting Campaign",
    severity: "Critical",
    type: "Credential Phishing",
    detectedAt: "2026-08-09T11:24:00Z",
    confidence: 94,
    status: "Open",
    description:
      "Phishing campaign impersonating Microsoft prompting users to reset credentials via a fake login page. Targets enterprise users with urgent language.",
    indicators: {
      domains: ["secure-microsoft-login.example", "ms-support-verify.example"],
      urls: ["https://secure-microsoft-login.example/login", "http://ms-support-verify.example/confirm"],
      subjects: ["URGENT: Verify Your Account", "Action required: Office 365 access"],
      senderDomains: ["urgent-verify.net", "ms-support.example"],
    },
    signals: ["Urgency language", "Credential harvesting", "Brand impersonation", "Suspicious links"],
    recommendedActions: ["Block domains", "Warn users", "Investigate mailboxes"],
  },
  {
    id: "t-002",
    name: "Banking Brand Impersonation - Nationwide Bank",
    severity: "High",
    type: "Brand Impersonation",
    detectedAt: "2026-08-07T08:12:00Z",
    confidence: 88,
    status: "Investigating",
    description:
      "Campaign impersonating a major bank requesting verification of recent transactions. Uses convincing HTML templates and spoofed sender domains.",
    indicators: {
      domains: ["verify-nationwide.example", "secure-bank-example.example"],
      urls: ["https://verify-nationwide.example/secure"],
      subjects: ["Unusual activity on your account"],
      senderDomains: ["nationwide-alerts.example"],
    },
    signals: ["Brand impersonation", "Suspicious links", "Sender mismatch"],
    recommendedActions: ["Block domains", "Warn users"],
  },
  {
    id: "t-003",
    name: "AWS Fake Login Campaign",
    severity: "Critical",
    type: "Credential Phishing",
    detectedAt: "2026-08-05T14:03:00Z",
    confidence: 91,
    status: "Open",
    description:
      "Targets dev teams with fake AWS console links to capture credentials. Links use typosquatted domains and short-lived redirects.",
    indicators: {
      domains: ["aws-console-login.example", "console-aws-login.example"],
      urls: ["https://console-aws-login.example/"],
      subjects: ["Activate your AWS account"],
      senderDomains: ["no-reply-aws.example"],
    },
    signals: ["Credential harvesting", "Typosquatting", "Suspicious links"],
    recommendedActions: ["Block domains", "Investigate mailboxes", "Reset credentials"],
  },
  {
    id: "t-004",
    name: "HR Interview Scam - Fake Recruiter",
    severity: "Medium",
    type: "Scam",
    detectedAt: "2026-07-28T09:45:00Z",
    confidence: 73,
    status: "Mitigated",
    description:
      "Scam messages posing as recruiters requesting personal info for fake interviews. May include malicious attachments.",
    indicators: {
      domains: ["recruiting-hr.example"],
      urls: ["https://recruiting-hr.example/candidate"],
      subjects: ["Interview Invitation - Immediate Response Required"],
      senderDomains: ["jobs-hr.example"],
    },
    signals: ["Social engineering", "Attachment risk"],
    recommendedActions: ["Warn users", "Investigate mailboxes"],
  },
  {
    id: "t-005",
    name: "Invoice Fraud - Supplier Change",
    severity: "High",
    type: "Business Email Compromise",
    detectedAt: "2026-07-22T12:30:00Z",
    confidence: 85,
    status: "Investigating",
    description:
      "Email thread compromise attempting to change supplier payment details. Requests fund transfers to new bank accounts.",
    indicators: {
      domains: ["billing-update.example"],
      urls: ["https://billing-update.example/invoice"],
      subjects: ["Updated invoice and payment instructions"],
      senderDomains: ["finance-supplier.example"],
    },
    signals: ["Business Email Compromise", "Payment instruction change", "Sender mismatch"],
    recommendedActions: ["Investigate mailboxes", "Warn users"],
  },
  {
    id: "t-006",
    name: "Package Delivery Scam",
    severity: "Low",
    type: "Scam",
    detectedAt: "2026-07-18T16:50:00Z",
    confidence: 61,
    status: "Closed",
    description:
      "Generic package delivery scam messages asking users to confirm shipments or pay customs fees via external links.",
    indicators: {
      domains: ["track-shipment.example"],
      urls: ["https://track-shipment.example/confirm"],
      subjects: ["Your package requires attention"],
      senderDomains: ["shipping-alerts.example"],
    },
    signals: ["Urgency language", "Suspicious links"],
    recommendedActions: ["Warn users"],
  },
  {
    id: "t-007",
    name: "Payroll Phishing - HR Impersonation",
    severity: "High",
    type: "Brand Impersonation",
    detectedAt: "2026-07-14T10:12:00Z",
    confidence: 82,
    status: "Open",
    description:
      "Phishing emails spoofing HR requesting payroll details. Often targeted to specific departments.",
    indicators: {
      domains: ["hr-payroll.example"],
      urls: ["https://hr-payroll.example/update"],
      subjects: ["Payroll update required"],
      senderDomains: ["hr-dept.example"],
    },
    signals: ["Brand impersonation", "Targeted"],
    recommendedActions: ["Investigate mailboxes", "Warn users"],
  },
  {
    id: "t-008",
    name: "Fake Holiday Voucher Scam",
    severity: "Low",
    type: "Scam",
    detectedAt: "2026-07-01T07:22:00Z",
    confidence: 59,
    status: "Closed",
    description: "Spammy voucher scams claiming free holidays or prizes to entice clicks.",
    indicators: {
      domains: ["holiday-offer.example"],
      urls: ["https://holiday-offer.example/claim"],
      subjects: ["You won a holiday!"],
      senderDomains: ["promos.example"],
    },
    signals: ["Suspicious links"],
    recommendedActions: ["Warn users"],
  },
  {
    id: "t-009",
    name: "Executive Impersonation - Payment Request",
    severity: "Critical",
    type: "Business Email Compromise",
    detectedAt: "2026-08-01T13:05:00Z",
    confidence: 92,
    status: "Investigating",
    description:
      "Impersonation of C-level executive requesting urgent wire transfers. High risk for finance teams.",
    indicators: {
      domains: ["exec-requests.example"],
      urls: ["https://exec-requests.example/approve"],
      subjects: ["Urgent payment instruction"],
      senderDomains: ["ceo-requests.example"],
    },
    signals: ["Executive impersonation", "Payment instruction change", "Sender mismatch"],
    recommendedActions: ["Investigate mailboxes", "Block domains", "Warn users"],
  },
  {
    id: "t-010",
    name: "Social Engineering - Internal Survey",
    severity: "Medium",
    type: "Scam",
    detectedAt: "2026-06-21T09:40:00Z",
    confidence: 69,
    status: "Mitigated",
    description:
      "Messages posing as internal IT requesting users to complete a survey and provide system access details.",
    indicators: {
      domains: ["it-survey.example"],
      urls: ["https://it-survey.example/participate"],
      subjects: ["Mandatory IT Survey"],
      senderDomains: ["it-support.example"],
    },
    signals: ["Social engineering", "Sender mismatch"],
    recommendedActions: ["Warn users"],
  },
  {
    id: "t-011",
    name: "Supply Chain Malware Delivery",
    severity: "High",
    type: "Malware Delivery",
    detectedAt: "2026-07-03T11:11:00Z",
    confidence: 86,
    status: "Open",
    description:
      "Malicious attachments delivered through supply-chain communications. Attachments contain obfuscated macros.",
    indicators: {
      domains: ["invoice-files.example"],
      urls: ["https://invoice-files.example/download"],
      subjects: ["Invoice attached - immediate review"],
      senderDomains: ["supplier-invoices.example"],
    },
    signals: ["Attachment risk", "Malware delivery"],
    recommendedActions: ["Investigate mailboxes", "Warn users"],
  },
  {
    id: "t-012",
    name: "Credential Harvesting - Legacy App",
    severity: "Medium",
    type: "Credential Phishing",
    detectedAt: "2026-06-10T15:00:00Z",
    confidence: 72,
    status: "Mitigated",
    description:
      "Phishing targeting legacy application users asking to re-enter credentials to migrate accounts.",
    indicators: {
      domains: ["legacy-login.example"],
      urls: ["https://legacy-login.example/migrate"],
      subjects: ["Action required: account migration"],
      senderDomains: ["legacy-support.example"],
    },
    signals: ["Credential harvesting", "Suspicious links"],
    recommendedActions: ["Warn users"],
  },
  {
    id: "t-013",
    name: "Phishing Wave - Retail Gift Cards",
    severity: "Low",
    type: "Scam",
    detectedAt: "2026-06-02T10:20:00Z",
    confidence: 58,
    status: "Closed",
    description: "Mass phishing wave offering gift cards to entice clicks and collect PII.",
    indicators: {
      domains: ["giftcard-offer.example"],
      urls: ["https://giftcard-offer.example/claim"],
      subjects: ["Claim your gift card now"],
      senderDomains: ["offers.example"],
    },
    signals: ["Mass phishing", "Suspicious links"],
    recommendedActions: ["Warn users"],
  },
  {
    id: "t-014",
    name: "Tax Refund Scam",
    severity: "Medium",
    type: "Scam",
    detectedAt: "2026-05-15T07:55:00Z",
    confidence: 65,
    status: "Open",
    description: "Scam messages claiming tax refunds; users asked to confirm bank details.",
    indicators: {
      domains: ["tax-refund.example"],
      urls: ["https://tax-refund.example/confirm"],
      subjects: ["Tax refund available - confirm details"],
      senderDomains: ["taxdept.example"],
    },
    signals: ["Social engineering", "Payment instruction change"],
    recommendedActions: ["Warn users"],
  },
  {
    id: "t-015",
    name: "Credential Harvesting - Doc Share",
    severity: "High",
    type: "Credential Phishing",
    detectedAt: "2026-05-02T12:12:00Z",
    confidence: 89,
    status: "Investigating",
    description: "Fake document sharing links that ask for sign-in to view. Often targets external collaborators.",
    indicators: {
      domains: ["doc-share.example", "quick-view.example"],
      urls: ["https://doc-share.example/view"],
      subjects: ["Document shared with you"],
      senderDomains: ["no-reply-docs.example"],
    },
    signals: ["Credential harvesting", "Suspicious links"],
    recommendedActions: ["Block domains", "Investigate mailboxes"],
  },
];
