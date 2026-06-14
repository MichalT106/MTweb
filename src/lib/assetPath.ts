export const BASE_URL = import.meta.env.BASE_URL;

export function assetPath(path: string): string {
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  return `${BASE_URL}${normalized}`;
}

export const SITE_URL = 'https://michalt106.github.io/MTweb';
