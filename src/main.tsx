import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'


/**
 * Entry point
 * -----------
 * This file boots the React application by mounting the root `App`
 * component into the DOM. `StrictMode` is enabled to help surface
 * potential problems during development (double-invokes lifecycle
 * methods, highlights deprecated APIs, etc.).
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
