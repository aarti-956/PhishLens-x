import { AlertTriangle } from "lucide-react";

import { cn } from "@/lib/utils";

interface ErrorStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
}

function ErrorState({ title = "Unable to load workspace", description = "A non-critical issue has interrupted the surface. Please try again in a moment.", className, ...props }: ErrorStateProps) {
  return (
    <div className={cn("rounded-[1.5rem] border border-[color:var(--destructive)]/30 bg-[color:var(--destructive)]/10 p-6 text-sm text-[color:var(--destructive)]", className)} {...props}>
      <div className="flex items-center gap-3">
        <AlertTriangle className="h-5 w-5" />
        <div>
          <p className="font-semibold">{title}</p>
          <p className="mt-1 text-[color:var(--destructive)]/80">{description}</p>
        </div>
      </div>
    </div>
  );
}

export { ErrorState };