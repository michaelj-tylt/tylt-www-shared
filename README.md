# Tylt WWW Shared Components

This repository contains shared components, styles, and utilities used across all Tylt marketing websites.

## Structure

- `components/` - React components shared across all apps
- `styles/` - Global CSS and theme files  
- `lib/` - Utility functions and helpers
- `types/` - TypeScript type definitions
- `config/` - Build and linting configurations
- `assets/` - Fonts and other static assets

## Usage as Git Submodule

This repository is designed to be used as a git submodule in each Tylt app:

```bash
# Add submodule to an app
git submodule add <repo-url> shared-components

# Update submodule
git submodule update --remote
```

## Theme System

Each app should provide its own `theme.ts` file that follows the theme interface defined in this repository. The shared components will use the theme via import.

## Apps Using This Repository

- Sidekick (sidekick.gotylt.com) - Browser automation
- WebTester (webtester.gotylt.com) - Web testing platform  
- AutoTester (autotester.gotylt.com) - Automated testing
- Tylt Main (gotylt.com) - Company website