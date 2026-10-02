// @ts-check
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const raiz = path.dirname(fileURLToPath(import.meta.url));

function urlsOcultasNoSitemap(dir, urlDe) {
  return fs
    .readdirSync(dir)
    .filter((nome) => nome.endsWith('.md'))
    .filter((nome) => {
      const texto = fs.readFileSync(path.join(dir, nome), 'utf8');
      const frente = texto.match(/^---\r?\n([\s\S]*?)\r?\n---/);
      const bloco = frente?.[1] ?? '';
      return !/^indexar:\s*true\s*$/m.test(bloco);
    })
    .map((nome) => urlDe(nome.slice(0, -3)));
}

const ocultasNoSitemap = new Set([
  ...urlsOcultasNoSitemap(
    path.join(raiz, 'src/content/categorias'),
    (id) => `https://depositojosemariafilho.com.br/produtos/${id}/`,
  ),
  ...urlsOcultasNoSitemap(
    path.join(raiz, 'src/content/paginas'),
    (id) => `https://depositojosemariafilho.com.br/${id}/`,
  ),
]);

// https://astro.build/config
export default defineConfig({
  site: 'https://depositojosemariafilho.com.br',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap({
      filter(pagina) {
        return !ocultasNoSitemap.has(pagina);
      },
    }),
  ],
  image: {
    dangerouslyProcessSVG: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
