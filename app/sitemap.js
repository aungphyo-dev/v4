export default async function sitemap() {
    let routes = ['', '/projects'].map((route) => ({
        url: `https://aungpyaephyo.vercel.app${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }));

    return [...routes];
}
