// Sidekick Theme Configuration
export const theme = {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe', 
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa', // primary
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  secondary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd', 
    300: '#7dd3fc',
    400: '#38bdf8', // secondary
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },
  // Tailwind class mappings
  classes: {
    gradientStart: 'blue-600',       // Main gradient start
    gradientEnd: 'cyan-500',         // Main gradient end
    accent: 'text-amber-300',        // High contrast accent for text
    accentBg: 'bg-amber-300',        // High contrast accent for backgrounds
    accentHover: 'hover:text-amber-100',
    primary: 'text-amber-400',       // Primary interactive elements
    primaryHover: 'hover:text-amber-300', // Primary hover state
    primaryBg: 'bg-amber-400',       // Primary background
    secondary: 'cyan-400',           // Secondary elements  
    secondaryHover: 'cyan-300',      // Secondary hover state
    gradient: 'from-amber-600 to-amber-400',
    gradientHover: 'from-amber-700/20 to-amber-500/20',
    border: 'border-amber-400/50',
    glow: 'from-amber-500/10 to-amber-400/10'
  }
};

export default theme;