// File: tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Kita definisikan font disini biar rapi
        rfx: ['Russo One', 'sans-serif'],
        femmora: ['Fredoka', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
      },
      colors: {
        // Persiapan palet warna mewah (akan kita update di Phase 3)
        slate: {
          950: '#020617', // Warna background saat ini
        }
      }
    },
  },
  plugins: [],
}
