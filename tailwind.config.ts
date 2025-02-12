import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist)"],
        inter: ["var(--font-inter)"],
      },
      colors: {
        "main-light": "#EAEDFF",
        "main-dark": "#1F202B",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "opacity-up": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "opacity-down": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        "scale-up": {
          from: { transform: "scale(0.9)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
        "scale-down": {
          from: { transform: "scale(1)", opacity: "1" },
          to: { transform: "scale(0.9)", opacity: "0" },
        },
        "shift-right-in": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0%)" },
        },
        "shift-right-out": {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(100%)" },
        },
        "shift-left-in": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0%)" },
        },
        "shift-left-out": {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-100%)" },
        },
        splash: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        skeleton: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(100%)" },
        },
        "progress-bar-stripes": {
          from: { backgroundPosition: "1rem 0" },
          to: { backgroundPosition: "0 0" },
        },
        pulse: {
          "0%": {
            transform: "scale(0)",
            opacity: "0.5",
          },
          "50%": {
            transform: "scale(1)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(0)",
            opacity: "0.5",
          },
        },
        bounce: {
          from: { transform: "translateY(-10px)" },
          to: { transform: "translateY(10px)" },
        },
        fade: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        scale: {
          "0%": {
            transform: "scaleY(0.4)",
          },
          "20%": {
            transform: "scaleY(1)",
          },
          "40%": {
            transform: "scaleY(0.4)",
          },
          "100%": {
            transform: "scaleY(0.4)",
          },
        },
        "clip-loader": {
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        "clip-circle": {
          "0%": {
            strokeDasharray: "1,200",
            strokeDashoffset: "0",
          },
          "50%": {
            strokeDasharray: "90,200",
            strokeDashoffset: "-35px",
          },
          "100%": {
            strokeDashoffset: "-125px",
          },
        },
        "toast-in": {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "toast-out": {
          from: { opacity: "1", transform: "scale(1)" },
          to: { opacity: "0", transform: "scale(0.9)" },
        },
        "scale-in": {
          from: { transform: "scale(0)" },
          to: { transform: "scale(1)" },
        },
        "scale-out": {
          from: { transform: "scale(1)" },
          to: { transform: "scale(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "opacity-up": "opacity-up 0.15s ease-in-out",
        "opacity-down": "opacity-down 0.15s ease-in-out",
        "scale-up": "scale-up 0.15s ease-in-out",
        "scale-down": "scale-down 0.15s ease-in-out",
        "shift-right-in": "shift-right-in 0.15s ease-in-out",
        "shift-right-out": "shift-right-out 0.15s ease-in-out",
        "shift-left-in": "shift-left-in 0.15s ease-in-out",
        "shift-left-out": "shift-left-out 0.15s ease-in-out",
        splash: "splash 0.15s ease-in-out",
        skeleton: "skeleton 2s infinite",
        "progress-bar-stripes": "progress-bar-stripes 1s linear infinite",
        pulse: "pulse 1.111s ease-in-out infinite",
        bounce: "bounce 0.5s ease-in infinite alternate",
        fade: "fade 1s infinite linear",
        scale: "scale 0.9s ease-in-out infinite",
        "clip-loader": "clip-loader 2s linear infinite",
        "clip-circle": "clip-circle 1.5s ease-in-out infinite",
        "toast-in": "toast-in 0.15s ease-in-out",
        "toast-out": "toast-out 0.15s ease-in-out",
        "scale-in": "scale-in",
        "scale-out": "scale-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar-hide")],
} satisfies Config;
