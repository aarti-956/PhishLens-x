import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-[color:var(--accent)] text-[color:var(--accent-foreground)]",
        secondary: "border-white/10 bg-white/5 text-[color:var(--muted)]",
        accent: "border-transparent bg-[color:var(--accent)]/15 text-[color:var(--accent)]",
        success: "border-transparent bg-[color:var(--success)]/15 text-[color:var(--success)]",
        warning: "border-transparent bg-[color:var(--warning)]/15 text-[color:var(--warning)]",
        destructive: "border-transparent bg-[color:var(--destructive)]/15 text-[color:var(--destructive)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends VariantProps<typeof badgeVariants> {
  className?: string;
  children: React.ReactNode;
}

function Badge({ className, variant, children }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)}>{children}</div>;
}

export { Badge, badgeVariants };
