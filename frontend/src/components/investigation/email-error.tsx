"use client";

import { AlertTriangle } from "lucide-react";

import { Card } from "@/components/ui/card";

interface EmailErrorProps {
  message: string;
}

export function EmailError({ message }: EmailErrorProps) {
  return (
    <Card className="border-[color:var(--destructive)]/25 bg-[color:var(--destructive)]/10 p-4 text-sm text-[color:var(--destructive)]">
      <div className="flex items-center gap-2">
        <AlertTriangle className="h-4 w-4" />
        <span>{message}</span>
      </div>
    </Card>
  );
}
