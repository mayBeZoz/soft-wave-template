import type { Metadata } from "next";
import "../globals.css";


export const metadata: Metadata = {
  title: "SoftWave - Web Template",
  description: "A Simple Web Template Built Using Next.js, TailwindCSS, Typescript and FramerMotion",
};

export default function RootLayout({children}:Children) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
            
        </html>
    );
}
