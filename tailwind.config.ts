import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
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
            }
        }
    },
    plugins: [],
    corePlugins: {
        preflight: false // <== disable this!
    },
    safelist: ["bg-[#877750]", "bg-[#FAF9F5]", "bg-[#403826]", "bg-[#F0ECE3]", "text-[#646261]"]
};
export default config;
