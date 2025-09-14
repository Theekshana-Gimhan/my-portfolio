import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './router'


/**
 * App
 * ----
 * Top-level application component. Responsible for setting up the
 * React Router `BrowserRouter` with the correct `basename` so that the
 * app works when hosted under a subpath (GitHub Pages project site).
 *
 * Note: `__BASE_PATH__` is injected at build time from `vite.config.ts`.
 * This keeps routing correct whether running locally ("/") or on
 * GitHub Pages ("/my-portfolio/").
 */
function App() {
  return (
    // BrowserRouter handles client-side routing. basename ensures all
    // route links are correctly prefixed when the app is served from a
    // subdirectory (common on GitHub Pages project sites).
    <BrowserRouter basename={__BASE_PATH__}>
      {/* AppRoutes mounts the application's route tree */}
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App