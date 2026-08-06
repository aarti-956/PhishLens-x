import { ShieldAlert } from "lucide-react";

import { cn } from "@/lib/utils";

interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

function EmptyState({ title, description, icon, className, ...props }: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex min-h-48 flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-white/10 bg-white/[0.03] p-10 text-center",
        className,
      )}
      {...props}
    >
      <div className="mb-4 rounded-full border border-white/10 bg-white/5 p-3 text-[color:var(--accent)]">
        {icon ?? <ShieldAlert className="h-5 w-5" />}
      </div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      {description ? <p className="mt-2 max-w-sm text-sm text-[color:var(--muted)]">{description}</p> : null}
    </div>
  );
}

export { EmptyState };