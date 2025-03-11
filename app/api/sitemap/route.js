import { SitemapStream, streamToPromise } from 'sitemap';

export async function GET() {
    try {
        const hostname = 'https://hassouna.vercel.app'; 

        const locales = ['ar', 'en'];
        const smStream = new SitemapStream({ hostname });

        const staticPages = [
            { path: '/', changefreq: 'daily', priority: 1.0 },
            { path: '/projects', changefreq: 'monthly', priority: 0.8 },
            { path: '/skills', changefreq: 'monthly', priority: 0.8 },
            { path: '/contact', changefreq: 'monthly', priority: 0.8 },
        ];

        staticPages.forEach(({ path, changefreq, priority }) => {
            locales.forEach((locale) => {
                smStream.write({
                    url: `/${locale}${path}`,
                    changefreq,
                    priority,
                });
            });
        });

        smStream.end();
        const sitemapXml = (await streamToPromise(smStream)).toString();

        return new Response(sitemapXml, {
            headers: {
                'Content-Type': 'application/xml',
                'Cache-Control': 'public, max-age=3600, stale-while-revalidate=1800',
            },
        });
    } catch (error) {
        console.error('❌ خطأ أثناء توليد السايت ماب:', error);
        return new Response(`❌ خطأ أثناء توليد السايت ماب: ${error.message}`, { status: 500 });
    }
}
