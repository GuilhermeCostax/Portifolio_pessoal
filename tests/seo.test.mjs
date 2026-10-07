import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { generateSeo, renderMetadata } from '../scripts/generate-seo.mjs';
import { getPageMetadata, notFoundMetadata, pages, siteUrl } from '../src/data/seo.ts';

test('metadados não duplicam tags e preservam scripts da aplicação', () => {
  const input = '<html><head><title>Antigo</title><meta name="description" content="Antiga"/><meta property="og:title" content="Antigo"/><link rel="canonical" href="https://example.com"/><script src="/assets/app.js"></script></head><body><div id="root"></div></body></html>';
  const output = renderMetadata(input, '/servicos', pages['/servicos']);
  assert.equal((output.match(/<title>/g) || []).length, 1);
  assert.equal((output.match(/name="description"/g) || []).length, 1);
  assert.equal((output.match(/rel="canonical"/g) || []).length, 1);
  assert.ok(output.includes(`${siteUrl}/servicos`));
  assert.ok(output.includes('/assets/app.js'));
  assert.ok(output.includes('social-preview.png'));
});

test('build gera home, serviços, sitemap e robots com domínio oficial', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'portfolio-seo-'));
  try {
    await writeFile(join(directory, 'index.html'), '<html><head></head><body><div id="root"></div></body></html>');
    await generateSeo(directory);
    assert.ok((await readFile(join(directory, 'servicos/index.html'), 'utf8')).includes(pages['/servicos'].title));
    const sitemap = await readFile(join(directory, 'sitemap.xml'), 'utf8');
    assert.ok(sitemap.includes(`<loc>${siteUrl}/</loc>`));
    assert.ok(sitemap.includes(`<loc>${siteUrl}/servicos</loc>`));
    assert.equal((sitemap.match(/<url>/g) || []).length, 2);
    assert.ok((await readFile(join(directory, 'robots.txt'), 'utf8')).includes(`${siteUrl}/sitemap.xml`));
  } finally { await rm(directory, { recursive: true, force: true }); }
});

test('rotas desconhecidas não são indexáveis e barra final é normalizada', () => {
  assert.equal(getPageMetadata('/nao-existe').indexable, false);
  assert.equal(getPageMetadata('/servicos/').title, pages['/servicos'].title);
  const html = renderMetadata('<html><head></head></html>', '/nao-existe', notFoundMetadata);
  assert.ok(html.includes('content="noindex,follow"'));
  assert.ok(!html.includes('rel="canonical"'));
});
