// Tylt Main Theme Configuration
export const theme = {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd', 
    300: '#7dd3fc',
    400: '#38bdf8', // primary
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },
  secondary: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc', // secondary
    500: '#a855f7',
    600: '#9333ea',
    700: '#7c3aed',
    800: '#6b21a8',
    900: '#581c87',
  },
  // Tailwind class mappings
  classes: {
    gradientStart: 'blue-600',       // Main gradient start
    gradientEnd: 'purple-500',       // Main gradient end
    accent: 'text-blue-400',         // High contrast accent for text
    accentBg: 'bg-blue-400',         // High contrast accent for backgrounds
    accentHover: 'hover:text-blue-300',
    primary: 'text-blue-400',        // Primary interactive elements
    primaryHover: 'hover:text-blue-300', // Primary hover state
    primaryBg: 'bg-blue-400',        // Primary background
    secondary: 'purple-400',         // Secondary elements  
    secondaryHover: 'purple-300',    // Secondary hover state
    gradient: 'from-blue-600 to-purple-500',
    gradientHover: 'from-blue-700/20 to-purple-600/20',
    border: 'border-blue-400/50',
    glow: 'from-blue-500/10 to-purple-500/10'
  }
};

export default theme;