import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container:{
      center:true,
      padding:"15px 5px",
    }
    ,
    screens:{
      sm: "640px",
      md: "780px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
     fontFamily:{
      poppins : ["var(--poppins)","sans-serf"],
      roboto : ["var(--roboto)","sans-serf"],
     },
     colors: {
      primary: "rgb(16 185 129)",  // emerald-500
      "light_primary": "rgb(167 243 208)", // emerald-200
    }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss-animated")
  ],
};
export default config;
