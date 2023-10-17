"use client"
import './globals.css'
import {Inter} from "next/font/google";
import {Analytics} from "@vercel/analytics/react";
import {ProjectsContextProvider} from "@/components";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
const inter = Inter ({
    weight: ["400", "500", "700", "900"],
    subsets: ["latin"]
});
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false, // default: true
        },
    },
})
export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
            <title>Typle | Developer</title>
            <link rel="shortcut icon" href="/fav.png" />
            <meta name="title" content="Typle | Developer" />
            <meta name="description" content="Generate with Next JS................." />
        </head>
            <body className={`${inter.className} w-full bg-slate-900`} suppressHydrationWarning>
           <QueryClientProvider client={queryClient}>
               <ProjectsContextProvider>
                   {children}
               </ProjectsContextProvider>
           </QueryClientProvider>
            <Analytics mode={'production'}/>
            </body>
        </html>
    )
}
