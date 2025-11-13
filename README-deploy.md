# Deployment — GitHub Pages & Netlify

This file describes how to deploy this static portfolio to GitHub Pages or Netlify. The repo includes:

- .github/workflows/deploy-pages.yml — GitHub Actions workflow to publish to GitHub Pages on push to main.
- netlify.toml — Netlify config to publish the repo via Netlify's build.

Quick notes

1) GitHub Pages (recommended for simple static sites)
- Ensure your default branch is `main`.
- Push these files to the repository.
- In the repo Settings → Pages, the action will automatically publish the artifact created by the workflow. No further setup is required other than enabling Pages if asked.
- If you want a custom domain, add a CNAME file in the repo root containing your domain, or set it in Settings → Pages.

2) Netlify
- Create a new site on Netlify and connect your repository.
- Netlify will read netlify.toml. The build command populates the `out/` folder and Netlify publishes it.
- Add environment variables in Netlify UI if needed.
- If you use client-side routing (React/SPA), enable the redirect rule commented in netlify.toml.

Tips
- If you prefer GitHub Pages to publish from a specific folder (e.g., docs/), move your static files into `docs/` and adjust the workflow or Pages settings accordingly.
- For frameworks (Next.js, Gatsby) add the build steps to the workflow and set the upload path to the framework's output directory (e.g., `out/`, `public/`, or `.next` as applicable).
