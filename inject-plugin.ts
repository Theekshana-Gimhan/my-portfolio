import { readFileSync, writeFileSync } from "fs";

const PREVIEW_SCRIPT =
  '<script type="module" src="/preview-inject/index.ts"></script>';
export const injectPreviewScript = (usePreviewScript: boolean) => {
  let html = readFileSync("./index.html", "utf-8");
  const flag = '<script type="module" src="/src/main.tsx"></script>';
  if (usePreviewScript) {
    html = html.replace(PREVIEW_SCRIPT, "");
    html = html.replace(flag, `${flag}${PREVIEW_SCRIPT}`);
  } else {
    html = html.replace(PREVIEW_SCRIPT, "");
  }
  writeFileSync("./index.html", html);
};
