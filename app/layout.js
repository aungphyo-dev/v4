import './globals.css'
import {Analytics} from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GeistSans } from 'geist/font/sans';
export const metadata = {
    title: 'Typle | Developer',
    description: 'Generate with Next 13',
    icons :[{ rel: 'icon', url: "/fav.png" }],
}
export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body className={`${GeistSans.className} w-full bg-slate-950`} suppressHydrationWarning>
            {children}
            <Analytics mode={'production'}/>
            <SpeedInsights />
            </body>
        </html>
    )
}
