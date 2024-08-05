import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "#F2F1EF",
        background2: "#20262E",
        textOrange: "#F7744A",
      },
      fontSize: {
        "custom-10": "clamp(9px,0.5208333333333334vw,10px)",
        "custom-12": "clamp(12px,0.625vw,12px)",
        "custom-13": "clamp(12px,0.6770833333333334vw,13px)",
        "custom-14": "clamp(12px,0.7291666666666666vw,14px)",
        "custom-16": "clamp(13px,0.8333333333333334vw,16px)",
        "custom-18": "clamp(16px,0.9375vw,18px)",
        "custom-20": "clamp(18px,1.0416666666666667vw,20px)",
        "custom-22": "clamp(18px,1.1458333333333333vw,22px)",
        "custom-24": "clamp(20px,1.25vw,24px)",
        "custom-26": "clamp(24px,1.3541666666666667vw,26px)",
        "custom-28": "clamp(26px,1.4583333333333333vw,28px)",
        "custom-30": "clamp(28px,1.5625vw,30px)",
        "custom-32": "clamp(30px,1.6666666666666667vw,32px)",
        "custom-34": "clamp(32px,1.7708333333333333vw,34px)",
        "custom-36": "clamp(34px,1.875vw,36px)",
        "custom-38": "clamp(36px,1.9791666666666667vw,38px)",
      },
    },
  },
  plugins: [],
};
export default config;
