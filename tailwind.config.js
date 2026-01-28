/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rfx: ['Russo One', 'sans-serif'],
        femmora: ['Fredoka', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
      },
      colors: {
        // --- PALET MEWAH (LUXURY PALETTE) ---
        // Base Background (Lebih gelap dan "dingin" dari hitam biasa)
        'luxury-black': '#050505',
        'luxury-dark': '#0a0a0c',
        
        // Brand Colors (Versi Elegan, bukan neon tajam)
        'rfx-primary': '#06b6d4',    // Cyan yang tetap pop tapi terkontrol
        'rfx-dim': 'rgba(6, 182, 212, 0.1)', // Untuk efek glass
        
        'fem-primary': '#ec4899',    // Pink Femmora
        'fem-dim': 'rgba(236, 72, 153, 0.1)',
        
        // Accent (Emas/Platinum untuk kesan mahal)
        'gold-accent': '#d4af37',
        'gold-glow': 'rgba(212, 175, 55, 0.3)',
        'silver-text': '#e2e8f0',
        'muted-text': '#94a3b8',
        
        // Glassmorphism Borders
        'glass-border': 'rgba(255, 255, 255, 0.08)',
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(to bottom, #050505, #0a0a0c)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'rfx-gradient': 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
        'fem-gradient': 'linear-gradient(135deg, #ec4899 0%, #a855f7 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        }
      }
    },
  },
  plugins: [],
}
