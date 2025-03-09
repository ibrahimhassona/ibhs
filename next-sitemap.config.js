module.exports = {
    siteUrl: "https://hassouna.vercel.app",
    generateRobotsTxt: true,
    sitemapSize: 5000,
    transform: async (config, path) => ({
      loc: path,
      lastmod: new Date().toISOString().split("T")[0], // تاريخ آخر تعديل
      changefreq: "monthly",
      priority: 0.8,
    }),
    additionalPaths: async (config) => [
      { loc: "/ar", lastmod: "2025-01-01" },
      { loc: "/en", lastmod: "2025-01-01" },
      { loc: "/ar/projects", lastmod: "2025-01-01" },
      { loc: "/en/projects", lastmod: "2025-01-01" },
      { loc: "/ar/skills", lastmod: "2025-01-01" },
      { loc: "/en/skills", lastmod: "2025-01-01" },
      { loc: "/ar/contact", lastmod: "2025-01-01" },
      { loc: "/en/contact", lastmod: "2025-01-01" },
    ],
  };
  