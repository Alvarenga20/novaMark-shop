import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'grayshade-50':'#999999',
        'grayshade-100':'#4D4D4D',
        'grayshade-200':'#333333',
        'grayshade-300':'#262626',
        'grayshade-400':'#1A1A1A',
        'grayshade-500':'#141414',
        "lightColor-100":'#FCFCFC',
        "lightColor-200":'#F7F7F7',
        "lightColor-300":'#F3F3F3',
      },
    },
  },
  plugins: [],
} satisfies Config;
