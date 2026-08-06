export type VariantTone = "default" | "muted" | "accent" | "success" | "warning" | "destructive";

export interface DesignTokenSet {
  colors: Record<string, string>;
  radius: Record<string, string>;
  spacing: Record<string, string>;
  shadows: Record<string, string>;
  transitions: Record<string, string>;
}
