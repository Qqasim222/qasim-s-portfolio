/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0A1930", // Darker blue background
          light: "#112240",   // Lighter blue for cards
          dark: "#060F1E",    // Darker blue for contrast
        },
        secondary: {
          DEFAULT: "#64FFDA", // Bright mint
          dark: "#4CD5B5",    // Darker mint
          light: "#9EFFEA",   // Lighter mint
        },
        accent: {
          blue: "#58A7FF",    // Bright blue
          purple: "#BD34FE",  // Vibrant purple
          pink: "#FF3366",    // Vibrant pink
        },
        text: {
          primary: "#E6F1FF",   // Very light blue-white
          secondary: "#8892B0", // Light blue-gray
          accent: "#64FFDA",    // Same as secondary for consistency
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 