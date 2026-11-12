# hamza-baghdadi-website

Personal portfolio of Hamza Baghdadi, Frontend Developer. Built with Next.js (static export), Tailwind CSS and shadcn/ui.

## Editing content

Everything on the page comes from [`content/profile.ts`](content/profile.ts). Your photo is `public/hamza.webp` (the share image uses `content/og-photo.jpg`).

## Development

```bash
pnpm install
pnpm dev
```

```bash
pnpm build   # static site in ./out
```

## Deploying to GitHub Pages

This repo is meant to live at [HamzaBaghdadi/HamzaBaghdadi.github.io](https://github.com/HamzaBaghdadi/HamzaBaghdadi.github.io), which GitHub serves at https://hamzabaghdadi.github.io.

1. Push this project to that repository.
2. In the repo, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the static export and publishes it.
