import { practicalLessonSlugs } from '../data/practicalLessons.js';
import { advancedLessonSlugs } from '../data/advancedLessons.js';
import { platformGuideSlugs } from '../data/platformGuides.js';

export const prerender = true;

const origin = 'https://rythero.com';
const lastmod = '2026-09-17';
const localePrefixes = ['', '/es', '/pt-br'];
const fixedPaths = [
  '/',
  '/about',
  '/tools/song-studio',
  '/tools/prompt-builder',
  '/tools/signature-lab',
  '/learn',
  '/learn/ai-music-prompts',
  '/learn/ai-song-structure',
  '/learn/style-dna',
  '/learn/bpm-key-energy',
  '/learn/suno-v6',
  '/privacy',
  '/cookies'
];
const dynamicPaths = [...practicalLessonSlugs, ...advancedLessonSlugs, ...platformGuideSlugs]
  .map((slug) => `/learn/${slug}`);

function localize(prefix, path) {
  if (path === '/') return prefix ? `${prefix}/` : '/';
  return `${prefix}${path}`;
}

export function GET() {
  const paths = localePrefixes.flatMap((prefix) => [...fixedPaths, ...dynamicPaths].map((path) => localize(prefix, path)));
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((path) => `  <url><loc>${origin}${path}</loc><lastmod>${lastmod}</lastmod></url>`).join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
