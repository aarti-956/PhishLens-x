"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
}

function Progress({ className, value = 0, max = 100, ...props }: ProgressProps) {
  const percent = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={cn("h-2 w-full overflow-hidden rounded-full bg-white/10", className)} {...props}>
      <div className="h-full rounded-full bg-[linear-gradient(90deg,var(--accent),#93a8ff)] transition-all" style={{ width: `${percent}%` }} />
    </div>
  );
}

export { Progress };
