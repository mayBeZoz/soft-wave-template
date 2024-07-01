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
                "dark-purple":'#9855FF'
            },
            container:{
                center:true
            },
            backgroundImage:{
                "dark-bottom-gradient":'linear-gradient(to bottom, transparent, black 65%)',
                "purple-bottom-gradient":'linear-gradient(to bottom, transparent, var(--dark-purple) 200%)'
            }
        },
    },
    plugins: [],
};
export default config;
