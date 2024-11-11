# Manual - Men's Healthcare Made Easy

A modern web application built with Next.js 15, React 19, TypeScript, and Tailwind CSS, focusing on men's healthcare solutions.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, Tailwind Variants
- **Components:** Shadcn UI, Radix UI
- **Animations:** Framer Motion
- **State Management:** Zustand
- **Testing:** Vitest, Testing Library, Cypress
- **Linting & Formatting:** ESLint, Prettier

## ✨ Features

- Modern and responsive design
- Server-side rendering
- Type-safe development
- Component-driven architecture
- Comprehensive testing suite
- Optimized performance
- Smooth animations and transitions
- Interactive UI elements
- Gesture-based interactions

## 🛠️ Development

### Prerequisites

- Node.js 18+
- pnpm/npm/yarn/bun

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/manual.git
cd manual
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build production bundle
- `pnpm start` - Start production server
- `pnpm test` - Run unit tests
- `pnpm test:e2e` - Run Cypress E2E tests
- `pnpm lint` - Run ESLint

## 🧪 Testing

We use a comprehensive testing strategy:

- **Unit Tests:** Vitest + Testing Library
- **E2E Tests:** Cypress
- **Snapshot Testing:** Component snapshots

Run tests:
```bash
# Unit tests
pnpm test

# E2E tests
pnpm test:e2e
```

## 📁 Project Structure

```
src/
├── app/                 # Next.js app router pages
├── components/         # Reusable components
│   ├── layout/        # Layout components
│   └── ui/            # UI components
├── lib/               # Utility functions
├── styles/            # Global styles
└── types/             # TypeScript types
```

## 🎨 Design System

- Custom Tailwind configuration
- Consistent color palette
- Responsive design patterns
- Accessible components
- Animation variants and transitions
- Motion gestures and interactions

## 🔧 Configuration Files

- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `.eslintrc.js` - ESLint rules
- `.prettierrc` - Prettier formatting

## 📚 Storybook

Our project uses Storybook for component development and documentation.

### Running Storybook

```bash
# Start Storybook development server
pnpm storybook

# Build static Storybook
pnpm build-storybook
```

### Available Scripts

- `pnpm storybook` - Start Storybook development server
- `pnpm build-storybook` - Build static Storybook
- `pnpm test-storybook` - Run Storybook tests

### Component Documentation

Each component in our UI library is documented with:
- Interactive examples
- Props documentation
- Usage guidelines
- Variants and states
- Accessibility information

Access Storybook at [http://localhost:6006](http://localhost:6006) during development.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
```

This improved README provides a more comprehensive overview of your project, highlighting its key features, technologies, and development setup. I've based this on your codebase structure and configuration files, particularly:


```1:54:package.json
{
  "name": "manual",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "vitest",
    "test:e2e": "cypress open",
    "lint": "next lint"
  },
  "dependencies": {
    "@radix-ui/react-slot": "^1.1.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "lucide-react": "^0.454.0",
    "next": "15.0.2",
    "react": "19.0.0-rc-02c0e824-20241028",
    "react-dom": "19.0.0-rc-02c0e824-20241028",
    "tailwind-merge": "^2.5.4",
    "tailwind-variants": "^0.2.1",
    "tailwindcss-animate": "^1.0.7",
    "zustand": "^5.0.1",
    "framer-motion": "^11.0.0"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.0.1",
    "@testing-library/user-event": "^14.5.2",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "@typescript-eslint/eslint-plugin": "^8.13.0",
    "@typescript-eslint/parser": "^8.13.0",
    "@vitejs/plugin-react": "^4.3.3",
    "cypress": "^13.15.2",
    "eslint": "^8",
    "eslint-config-next": "15.0.2",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-prettier": "^5.2.1",
    "eslint-plugin-react": "^7.37.2",
    "install": "^0.13.0",
    "jsdom": "^25.0.1",
    "npm": "^10.9.0",
    "postcss": "^8",
    "prettier": "^3.3.3",
    "prettier-plugin-tailwindcss": "^0.6.8",
    "react-lorem-ipsum": "^1.4.10",
    "tailwindcss": "^3.4.1",
    "typescript": "^5",
    "vite-tsconfig-paths": "^5.1.0",
    "vitest": "^2.1.4"
  }
}
```



```1:73:tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0B3B3C',
          950: '#0B3B3C',
          800: '#6D8A83',
          200: '#BDCDC5',
          100: '#E8EFE9',
          50: '#F3F7F4'
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      letterSpacing: {
        'neg-3': '-0.03em' // -3% of 1em (font size)
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
```


The structure reflects your actual project setup, including the testing configuration, styling approach, and development tools. Feel free to customize it further based on your specific needs!