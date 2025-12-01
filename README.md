DBUG ADMIN
=============

Quick start and run instructions for this project (Windows / PowerShell).

Requirements
- Node.js (v18+ recommended)
- npm (bundled with Node)

Install

Open PowerShell in the project root (`c:\Users\dbugp\source\repos\admin0`) and run:

```powershell
npm.cmd install
```

Development

- Start the Vite dev server (the project `vite.config.ts` sets `port: 3000`):

```powershell
npm.cmd run dev
```

- Open the app in your browser at `http://localhost:3000`.

Production build

- Create an optimized production build (output in `dist/`):

```powershell
npm.cmd run build
```

- Preview the production build locally:

```powershell
npm.cmd run preview
```

Stopping servers

- Close the PowerShell window that is running the server, or stop Node processes:

```powershell
Get-Process node | Stop-Process -Force
```

Notes
- If PowerShell blocks `npm` scripts due to execution policy, using the `npm.cmd` shim (shown above) avoids that problem.
- Source files: `index.html`, `index.tsx`, `vite.config.ts`. Production output is under `dist/` after `npm run build`.
- To deploy, copy the `dist/` contents to any static hosting service (Netlify, Vercel, GitHub Pages, S3, etc.).

If you'd like, I can add a short `scripts` section to this README that includes commands for GitHub Actions or other CI/CD providers.
CI / GitHub Actions
-------------------

Below are two example GitHub Actions snippets you can copy into `.github/workflows/` in your repository.

- 1) Build on push (checks that the project builds):

```yaml
name: CI - Build

on:
   push:
      branches: [ main ]
   pull_request:
      branches: [ main ]

jobs:
   build:
      runs-on: ubuntu-latest
      steps:
         - uses: actions/checkout@v4
         - name: Use Node.js
            uses: actions/setup-node@v4
            with:
               node-version: '18'
         - name: Install
            run: npm ci
         - name: Build
            run: npm run build
         - name: Upload build artifacts
            uses: actions/upload-artifact@v4
            with:
               name: dist
               path: dist
```

- 2) Build and deploy to GitHub Pages (simple example using `peaceiris/actions-gh-pages`):

```yaml
name: Deploy

on:
   push:
      branches: [ main ]

jobs:
   deploy:
      runs-on: ubuntu-latest
      steps:
         - uses: actions/checkout@v4
         - name: Use Node.js
            uses: actions/setup-node@v4
            with:
               node-version: '18'
         - name: Install
            run: npm ci
         - name: Build
            run: npm run build
         - name: Deploy to GitHub Pages
            uses: peaceiris/actions-gh-pages@v3
            with:
               github_token: ${{ secrets.GITHUB_TOKEN }}
               publish_dir: ./dist
```

Notes
- Adjust `node-version` to match your environment.
- For other hosts (Netlify, Vercel, S3, Cloudflare Pages) replace the deploy step with the provider-specific action.

If you want, I can create these workflow files in `.github/workflows/` for you and commit them.

<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1GgexYCog6OHZ7O-EWe1bTPmw1CWhlw6C

## Run Locally

**Prerequisites:**  Node.js

node -v
npm -v

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
