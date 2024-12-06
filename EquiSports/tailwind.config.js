/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bounceSlow: "bounceSlow 2s infinite",
        rgbCycle: 'rgbCycle 3s linear infinite',

      },
      keyframes: {
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(-10%)' },
          '50%': { transform: 'translateY(0)' },
        },
        rgbCycle: {
          '0%': { color: 'rgb(255, 0, 0)' }, // Red
          '25%': { color: 'rgb(0, 255, 0)' }, // Green
          '50%': { color: 'rgb(0, 0, 255)' }, // Blue
          '75%': { color: 'rgb(255, 255, 0)' }, // Yellow
          '100%': { color: 'rgb(255, 0, 0)' }, // Red
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
