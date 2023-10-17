import './globals.css'
import {Inter} from "next/font/google";
import {Analytics} from "@vercel/analytics/react";
const inter = Inter ({
    weight: ["400", "500", "700", "900"],
    subsets: ["latin"]
});

export const metadata = {
    title: 'Typle | Developer',
    description: 'Generate with Next 13',
    icons :[{ rel: 'icon', url: "/fav.png" }],
}
export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body className={`${inter.className} w-full bg-slate-900`} suppressHydrationWarning>
            {children}
            <Analytics mode={'production'}/>
            </body>
        </html>
    )
}
