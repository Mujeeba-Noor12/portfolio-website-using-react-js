// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./index.html"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS, JSX, TS, TSX files in the src folder
    "./index.html",                // Also scan index.html
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
