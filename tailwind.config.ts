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
    },
    // colors:{
      
    // },
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
     }
    },
  },
  plugins: [],
};
export default config;
