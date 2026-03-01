/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Lora'", 'Georgia', "'Times New Roman'", 'serif'],
        sans: ["'DM Sans'", "'Segoe UI'", 'system-ui', 'sans-serif'],
      },
      colors: {
        /* Backgrounds */
        background: 'var(--bg)',
        card: 'var(--bg-card)',
        muted: 'var(--bg-muted)',

        /* Text */
        text: {
          DEFAULT: 'var(--text)',
          muted: 'var(--text-muted)',
          'on-dark': 'var(--text-on-dark)',
        },

        /* Institutional Colors */
        primary: 'var(--primary)',
        blue: 'var(--blue)',
        emerald: 'var(--emerald)',
        amber: 'var(--amber)',
        rose: 'var(--rose)',
        cyan: 'var(--cyan)',
        violet: 'var(--violet)',
        teal: 'var(--teal)',
        gold: 'var(--gold)',

        /* Borders */
        border: 'var(--border)',
        ring: 'var(--ring)',
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'elegant': 'var(--shadow-elegant)',
        'glow': 'var(--shadow-glow)',
      },
      borderRadius: {
        'card': '16px',
        'card-lg': '20px',
      },
      maxWidth: {
        'reading': '640px',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      transitionTimingFunction: {
        'natural': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
