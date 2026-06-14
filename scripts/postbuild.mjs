import { copyFileSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dist = join(process.cwd(), 'dist');
const indexPath = join(dist, 'index.html');
const notFoundPath = join(dist, '404.html');

copyFileSync(indexPath, notFoundPath);

let html = readFileSync(notFoundPath, 'utf8');
const spaScript = `<script>(function(l){if(l.search[1]){var d=l.search.slice(1).split('&').map(function(s){return s.replace(/~and~/g,'&')}).join('?');window.history.replaceState(null,null,l.pathname.slice(0,-1)+d+l.hash)}}(window.location))</script>`;
html = html.replace('<head>', `<head>${spaScript}`);
writeFileSync(notFoundPath, html);

console.log('Created dist/404.html for GitHub Pages SPA routing');
