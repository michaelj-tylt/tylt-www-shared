// AutoTester Theme Configuration
export const theme = {
  primary: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7', 
    400: '#34d399', // primary
    500: '#10b981',
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
  },
  secondary: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf', // secondary (teal)
    500: '#14b8a6', 
    600: '#0d9488',
    700: '#0f766e',
    800: '#115e59',
    900: '#134e4a',
  },
  // Tailwind class mappings
  classes: {
    gradientStart: 'emerald-500',    // Main gradient start
    gradientEnd: 'teal-400',         // Main gradient end  
    accent: 'text-orange-300',       // High contrast accent for text
    accentBg: 'bg-orange-300',       // High contrast accent for backgrounds
    accentHover: 'hover:text-orange-100',
    primary: 'text-orange-400',      // Primary interactive elements
    primaryHover: 'hover:text-orange-300', // Primary hover state
    primaryBg: 'bg-orange-400',      // Primary background
    secondary: 'teal-400',           // Secondary elements
    secondaryHover: 'teal-300',      // Secondary hover state
    gradient: 'from-orange-600 to-orange-400',
    gradientHover: 'from-orange-700/20 to-orange-500/20',
    border: 'border-orange-400/50',
    glow: 'from-orange-500/10 to-orange-400/10'
  }
};

export default theme;