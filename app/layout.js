import './globals.css'
import {Analytics} from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GeistSans } from 'geist/font/sans';
export const metadata = {
    metadataBase: new URL('https://aungpyaephyoe.vercel.app'),
    title: {
        default: 'Aung Pyae Phyo',
        template: '%s | Aung Pyae Phyo',
    },
    icons :[{ rel: 'icon', url: "/fav.png" }],
    description: 'Developer, writer, and creator.',
    openGraph: {
        title: 'Aung Pyae Phyo',
        description: 'Developer, writer, and creator.',
        url: 'https://aungpyaephyoe.vercel.app',
        siteName: 'Aung Pyae Phyo',
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    twitter: {
        title: 'Aung Pyae Phyo',
        card: 'summary_large_image',
    },
};

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
