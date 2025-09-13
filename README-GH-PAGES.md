This project can be hosted on GitHub Pages using the provided GitHub Actions workflow.

Key points:

- The Vite build outputs to the `out` directory (configured in `vite.config.ts`).
- The workflow (`.github/workflows/deploy.yml`) builds the site with BASE_PATH set to `/my-portfolio/` and deploys `out` to the `gh-pages` branch.

How it works:

1. Push to the `master` branch.
2. GitHub Actions runs, builds the app into `out` and pushes the static site to `gh-pages`.
3. Enable GitHub Pages in the repository settings: set the source to the `gh-pages` branch and root folder.

Notes:

- If your repository uses the `main` branch, update the workflow `on.push.branches` accordingly.
- If you want the site to be served at the root of a custom domain or user site, adjust `BASE_PATH` in the workflow to `/` and update `vite.config.ts` or environment variables.
