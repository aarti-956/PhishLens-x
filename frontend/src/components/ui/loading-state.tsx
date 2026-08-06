import { LoaderCircle } from "lucide-react";

import { cn } from "@/lib/utils";

interface LoadingStateProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

function LoadingState({ label = "Preparing secure workspace", className, ...props }: LoadingStateProps) {
  return (
    <div className={cn("flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-[color:var(--muted)]", className)} {...props}>
      <LoaderCircle className="h-4 w-4 animate-spin text-[color:var(--accent)]" />
      {label}
    </div>
  );
}

export { LoadingState };