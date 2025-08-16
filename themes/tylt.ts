// Tylt Theme Configuration
export const theme = {
  primary: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff', 
    300: '#d8b4fe',
    400: '#c084fc', // primary
    500: '#a855f7',
    600: '#9333ea',
    700: '#7c3aed',
    800: '#6b21a8',
    900: '#581c87',
  },
  secondary: {
    50: '#fdf4ff',
    100: '#fae8ff',
    200: '#f5d0fe',
    300: '#f0abfc', 
    400: '#e879f9', // secondary
    500: '#d946ef',
    600: '#c026d3',
    700: '#a21caf',
    800: '#86198f',
    900: '#701a75',
  },
  // Tailwind class mappings
  classes: {
    gradientStart: 'violet-600',     // Main gradient start
    gradientEnd: 'fuchsia-500',      // Main gradient end
    accent: 'text-purple-300',       // High contrast accent for text
    accentBg: 'bg-purple-300',       // High contrast accent for backgrounds
    accentHover: 'hover:text-purple-100',
    primary: 'text-purple-400',      // Primary interactive elements
    primaryHover: 'hover:text-purple-300', // Primary hover state
    primaryBg: 'bg-purple-400',      // Primary background
    secondary: 'fuchsia-400',        // Secondary elements
    secondaryHover: 'fuchsia-300',   // Secondary hover state
    gradient: 'from-purple-600 to-purple-400',
    gradientHover: 'from-purple-700/20 to-purple-500/20',
    border: 'border-purple-400/50',
    glow: 'from-purple-500/10 to-purple-400/10'
  }
};

export default theme;