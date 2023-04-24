/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#54bfbd",

          secondary: "#831843",

          accent: "#fef8da",

          neutral: "#382541",

          "base-100": "#F4F5F5",

          info: "#67e8f9",

          success: "#31D8AB",

          warning: "#fdba74",

          error: "#dc2626",
        },
      },
    ],
  },
};
