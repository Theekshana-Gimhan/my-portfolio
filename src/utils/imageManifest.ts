// This helper imports the generated image manifest at build time. Vite will
// bundle `src/assets/image-manifest.json` as a JSON module, so we can import
// it directly without using Node fs/path APIs. This keeps the helper working
// both in dev and in the browser-ready build.

type Variant = { width: number; format: string; path: string };
type ManifestEntry = { source: string; variants: Variant[]; preferred: { webp: string; jpg: string } };
type Manifest = Record<string, ManifestEntry>;

// Import the manifest JSON. The manifest is committed and updated by the
// optimize-images script. Use `assert { type: 'json' }` for ESM-aware bundlers.
// Vite supports plain JSON imports, so the import below will be resolved.
import manifestJson from '../assets/image-manifest.json';

const manifest = manifestJson as Manifest;

/**
 * Return the entire manifest object.
 */
export function readManifest(): Manifest {
  return manifest;
}

/**
 * Given a source filename (as used in the manifest), return the preferred
 * image sources and a constructed srcset for the webp format.
 *
 * Returns null when the source is not found.
 */
export function getPreferredAndSrcset(source: string): { webp: string; jpg: string; srcsetWebp: string } | null {
  const entry = manifest[source];
  if (!entry) return null;

  const webpVariants = entry.variants.filter(v => v.format === 'webp');
  const srcsetWebp = webpVariants.map(v => `${v.path} ${v.width}w`).join(', ');

  return {
    webp: entry.preferred.webp,
    jpg: entry.preferred.jpg,
    srcsetWebp,
  };
}

export default { readManifest, getPreferredAndSrcset };
