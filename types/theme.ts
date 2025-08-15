// Theme interface for shared components
export interface ThemeClasses {
  gradientStart: string;
  gradientEnd: string;
  accent: string;
  accentBg: string;
  accentHover: string;
  primary: string;
  primaryHover: string;
  primaryBg: string;
  secondary: string;
  secondaryHover: string;
  gradient: string;
  gradientHover: string;
  border: string;
  glow: string;
}

export interface Theme {
  primary: Record<number, string>;
  secondary: Record<number, string>;
  classes: ThemeClasses;
}

// Theme context for shared components
export interface ThemeContextType {
  theme: Theme;
}