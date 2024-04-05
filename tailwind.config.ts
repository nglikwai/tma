import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/*{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: "#07c160",
                secondary: "#576b95"
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
            },
            screens: {
                xl: { max: "1272px" },
                lg: { max: "1023px" },
                md: { max: "767px" },
                sm: { max: "639px" }
            }
        }
    },
    plugins: [],
    corePlugins: {
        preflight: true // <== disable this!
    },
    safelist: ["bg-[#877750]", "text-[#62B4FF]", "text-[#000000]"]
};
export default config;
