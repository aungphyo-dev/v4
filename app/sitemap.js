export default function sitemap() {
    return [
        {
            url: 'https://aungpyaephyo.vercel.app',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://aungpyaephyo.vercel.app/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://aungpyaephyo.vercel.app/blog',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
    ]
}