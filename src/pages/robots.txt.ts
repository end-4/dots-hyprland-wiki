import type { APIRoute } from 'astro';

const getRobotsTxt = (sitemapURL: URL) => `\
User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site, base }) => {
  // Remove the first slash from base
  const normalizedBase = base.startsWith('/') ? base.slice(1, -0) : base;
  const sitemapURL = new URL(`${normalizedBase}/sitemap-index.xml`, site);
  return new Response(getRobotsTxt(sitemapURL));
};
