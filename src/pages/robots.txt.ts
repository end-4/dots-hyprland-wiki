import type { APIRoute } from 'astro';

const getRobotsTxt = (sitemapURL: URL) => `\
User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL;
  // Ensure base does not start with "//" or missing slash.
  const sitemapPath = `${base.replace(/\/$/, '')}/sitemap-index.xml`;
  const sitemapURL = site
    ? new URL(sitemapPath, site)
    : new URL(sitemapPath, 'http://localhost');
  return new Response(getRobotsTxt(sitemapURL));
};
