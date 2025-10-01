/** Tailwind CSS v4 Configuration
 *  Docs: https://tailwindcss.com/docs/configuration
 */

/** @type {import('@tailwindcss/postcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: "#164e63",
        },
      },
    },
  },
};
