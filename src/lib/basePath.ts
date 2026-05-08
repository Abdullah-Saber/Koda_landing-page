/**
 * Returns the public base path for assets.
 * On GitHub Pages this will be '/Koda_landing-page', locally it will be ''.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/**
 * Prepends the base path to a public asset path.
 * e.g. imgSrc('/hero.png') => '/Koda_landing-page/hero.png' on GitHub Pages
 */
export function imgSrc(path: string): string {
  return `${basePath}${path}`;
}
