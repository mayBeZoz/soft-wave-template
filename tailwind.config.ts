import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "light-purple":'#B372CF',
                "medium-purple":'#8C45FF',
                "dark-purple":"#43207A"
            },
            container:{
                center:true
            },
            backgroundImage:{
                "purple-bottom-gradient":'linear-gradient(to bottom, transparent, var(--medium-purple) 200%)',
            }
        },
    },
    plugins: [],
};
export default config;
