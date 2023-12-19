export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
            },
        ],
        sitemap: 'https://aungpyaephyo.vercel.app/sitemap.xml',
        host: 'https://aungpyaephyo.vercel.app',
    };
}