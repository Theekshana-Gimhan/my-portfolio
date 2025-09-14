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

// Preload optimized assets so Vite knows to include files referenced only by
// the manifest at build time. This prevents 404s where the manifest points to
// files that were never statically imported.
// We use import.meta.glob to create a mapping from file path -> module loader.
// The glob path is rooted at the project and matches files under src/assets/optimized.
const optimizedModules = import.meta.glob('../assets/optimized/**', { as: 'url', eager: true }) as Record<string, string>;

// Helper to normalize manifest paths (which are relative to src/assets)
// into the keys used by import.meta.glob (which are relative to this file).
function globKeyFor(relPath: string): string {
  // relPath examples: optimized/profile_pic_800.webp
  // glob keys are like '../assets/optimized/profile_pic_800.webp'
  return `../assets/${relPath}`;
}

// Resolve a manifest path (e.g. "optimized/profile_pic_800.webp") to the
// Vite-bundled URL. Prefer the URL returned by import.meta.glob (ensures the
// file was included). Fall back to new URL(...) when not present.
function resolveAssetPath(relPath: string): string {
  const key = globKeyFor(relPath);
  const url = optimizedModules[key];
  if (url) return url;
  return new URL(`../assets/${relPath}`, import.meta.url).href;
}

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
  const srcsetWebp = webpVariants
    .map(v => `${resolveAssetPath(v.path)} ${v.width}w`)
    .join(', ');

  return {
    webp: resolveAssetPath(entry.preferred.webp),
    jpg: resolveAssetPath(entry.preferred.jpg),
    srcsetWebp,
  };
}

export default { readManifest, getPreferredAndSrcset };
