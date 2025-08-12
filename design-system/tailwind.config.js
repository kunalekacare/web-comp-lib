/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./demo.tsx",
  ],
  theme: {
    extend: {
      colors: {
        // Map CSS variables to Tailwind color format
        background: "var(--color-neutral-100)",
        foreground: "var(--color-neutral-900)",
        primary: {
          DEFAULT: "var(--color-primary-500)",
          foreground: "var(--color-neutral-100)",
          50: "var(--color-primary-100)",
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-400)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-700)",
          700: "var(--color-primary-700)",
          800: "var(--color-primary-800)",
          900: "var(--color-primary-800)",
        },
        secondary: {
          DEFAULT: "var(--color-neutral-200)",
          foreground: "var(--color-neutral-900)",
        },
        muted: {
          DEFAULT: "var(--color-neutral-200)",
          foreground: "var(--color-neutral-700)",
        },
        accent: {
          DEFAULT: "var(--color-neutral-200)",
          foreground: "var(--color-neutral-900)",
        },
        destructive: {
          DEFAULT: "var(--color-danger-500)",
          foreground: "var(--color-neutral-100)",
        },
        border: "var(--color-neutral-300)",
        input: "var(--color-neutral-300)",
        ring: "var(--color-primary-500)",
        card: {
          DEFAULT: "var(--color-neutral-100)",
          foreground: "var(--color-neutral-900)",
        },
        popover: {
          DEFAULT: "var(--color-neutral-100)",
          foreground: "var(--color-neutral-900)",
        },
      },
      borderRadius: {
        lg: "var(--border-radius-l)",
        md: "var(--border-radius-m)",
        sm: "var(--border-radius-s)",
      },
      // Use actual spacing values for better Tailwind compatibility
      spacing: {
        1: "0.25rem",    // var(--spacing-xs)
        2: "0.5rem",     // var(--spacing-s)
        3: "1rem",       // var(--spacing-m)
        4: "1rem",       // var(--spacing-m)
        5: "1.5rem",     // var(--spacing-l)
        6: "1.5rem",     // var(--spacing-l)
        8: "2rem",       // var(--spacing-xl)
        10: "3rem",      // var(--spacing-xxl)
        12: "3rem",      // var(--spacing-xxl)
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.25" }],
        sm: ["0.875rem", { lineHeight: "1.5" }],
        base: ["1rem", { lineHeight: "1.5" }],
        lg: ["1.125rem", { lineHeight: "1.5" }],
        xl: ["1.25rem", { lineHeight: "1.25" }],
        "2xl": ["1.5rem", { lineHeight: "1.25" }],
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
    },
  },
  plugins: [],
}
