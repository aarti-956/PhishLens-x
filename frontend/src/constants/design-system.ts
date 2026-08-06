export const designTokens = {
  colors: {
    background: "#050816",
    foreground: "#f5f7ff",
    card: "rgba(7, 13, 32, 0.86)",
    muted: "#8da0cf",
    accent: "#7c93ff",
    success: "#2ed3a3",
    warning: "#ffb84d",
    destructive: "#ff617d",
  },
  radius: {
    sm: "0.5rem",
    md: "0.8rem",
    lg: "1rem",
    xl: "1.5rem",
  },
  spacing: {
    xs: "0.375rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
  },
  shadows: {
    soft: "0 18px 50px rgba(2, 6, 23, 0.35)",
    glow: "0 0 0 1px rgba(124, 147, 255, 0.2), 0 28px 60px rgba(72, 99, 255, 0.16)",
  },
  transitions: {
    fast: "150ms ease",
    standard: "220ms ease",
    slow: "320ms ease",
  },
} as const;

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
} as const;
