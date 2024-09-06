/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      height: {
        bannerH: "75vh",
      },
      colors: {
        primary: "#000080",
        // secondary: '#1C0950',
        title: "#1C0950",
        desc: "#506690",
        // bgGradientPrimary: "background: linear-gradient(180deg,#7a74f0 0,#574fec)",
        green: "#6dbb30",
        warning: "#fbdd8b",
        otBg1: "#7a74f0",
        otBg2: "#574fec",
        otBg3: "#f0f2f2",
        otBg4: "#F1F0FD",
        // social media color,
        fb: "#3b5998",
        tw: "#1da1f2",
        in: "#007bb6",
        youtube: "#b00",
        // footer
        footer: "#454545",
        yellow: "#fad776",
        call_color: "#81e9f8",
      },
      fontSize: {
        h1: "56px",
        h2: "48px",
        h3: "32px",
        h4: "28px",
        h5: "24px",
        h6: "20px",
        p: "18px",
      },
    },
  },
  plugins: [],
};
