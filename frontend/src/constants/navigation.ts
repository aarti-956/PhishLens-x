import {
  Compass,
  Eye,
  Flame,
  History,
  LifeBuoy,
  ScanEye,
  Settings,
  Shield,
} from "lucide-react";

export const navigationItems = [
  {
    title: "Mission Control",
    href: "/",
    icon: Shield,
  },
  {
    title: "Investigation Lab",
    href: "/investigation-lab",
    icon: ScanEye,
  },
  {
    title: "Threat Explorer",
    href: "/threat-explorer",
    icon: Compass,
  },
  {
    title: "Investigation History",
    href: "/history",
    icon: History,
  },
  {
    title: "Knowledge Center",
    href: "/knowledge",
    icon: LifeBuoy,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export const quickActions = [
  {
    title: "Scan Email",
    description: "Inspect a new message from your inbox.",
    icon: ScanEye,
  },
  {
    title: "Paste Email Content",
    description: "Analyze copied content in seconds.",
    icon: Eye,
  },
  {
    title: "Upload .eml File",
    description: "Drop in a captured phishing sample.",
    icon: Flame,
  },
  {
    title: "View Investigation History",
    description: "Review recent evidence and outcomes.",
    icon: History,
  },
];
