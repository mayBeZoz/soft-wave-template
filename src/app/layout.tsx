import type { Metadata } from "next";
import "../globals.css";
import Header from "./_layout/header/Header";


export const metadata: Metadata = {
  title: "SoftWave - Web Template",
  description: "A Simple Web Template Built Using Next.js, TailwindCSS, Typescript and FramerMotion",
};

export default function RootLayout({children}:Children) {
    return (
        <html lang="en">
            <body>
                <Header/>
                {children}
            </body>
            
        </html>
    );
}
