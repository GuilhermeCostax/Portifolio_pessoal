import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { pages, siteUrl, socialImage } from '../src/data/seo.ts';

export const escapeHtml = value => value.replace(/[&<>"']/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[character]);

export function renderMetadata(html, pathname, metadata) {
  const url = `${siteUrl}${pathname === '/' ? '/' : pathname}`;
  const tags = [
    `<title>${escapeHtml(metadata.title)}</title>`,
    `<meta name="description" content="${escapeHtml(metadata.description)}" />`,
    `<meta name="robots" content="${metadata.indexable ? 'index,follow' : 'noindex,follow'}" />`,
    ...(metadata.indexable ? [`<link rel="canonical" href="${url}" />`] : []),
    '<meta property="og:type" content="website" />',
    '<meta property="og:locale" content="pt_BR" />',
    '<meta property="og:site_name" content="Guilherme Costa" />',
    `<meta property="og:title" content="${escapeHtml(metadata.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(metadata.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${socialImage}" />`,
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    '<meta property="og:image:alt" content="Guilherme Costa — Desenvolvimento Full Stack" />',
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escapeHtml(metadata.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(metadata.description)}" />`,
    `<meta name="twitter:image" content="${socialImage}" />`,
    '<meta name="twitter:image:alt" content="Guilherme Costa — Desenvolvimento Full Stack" />',
  ].join('\n    ');
  return html
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace(/\s*<meta\s+(?:name="(?:description|robots|twitter:[^"]+)"|property="og:[^"]+")[^>]*>/g, '')
    .replace(/\s*<link rel="canonical"[^>]*>/g, '')
    .replace('</head>', `    ${tags}\n  </head>`);
}

export async function generateSeo(directory = 'dist') {
  const template = await readFile(`${directory}/index.html`, 'utf8');
  for (const [pathname, metadata] of Object.entries(pages)) {
    const routeDirectory = pathname === '/' ? directory : `${directory}${pathname}`;
    await mkdir(routeDirectory, { recursive: true });
    await writeFile(`${routeDirectory}/index.html`, renderMetadata(template, pathname, metadata));
  }
  const urls = Object.keys(pages).map(pathname => `<url><loc>${siteUrl}${pathname === '/' ? '/' : pathname}</loc></url>`).join('\n  ');
  await writeFile(`${directory}/sitemap.xml`, `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  ${urls}\n</urlset>\n`);
  await writeFile(`${directory}/robots.txt`, `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
}

if (process.argv[1]?.endsWith('generate-seo.mjs')) await generateSeo();
