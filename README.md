# Anup Sharma — Portfolio

A static, dependency-free portfolio site (plain HTML/CSS/JS) built for GitHub Pages.

## Structure

```text
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   │   └── og-image.png
│   └── icons/
│       └── favicon.svg
├── README.md
└── .github/
    └── workflows/
        └── deploy.yml   (optional — see Option B below)
```

No build step, no dependencies, no backend, no database, no secrets. It's plain HTML/CSS/JS, so the simplest deployment path (Option A) needs no workflow file at all.

## 1. Create the repository

1. Go to [github.com/new](https://github.com/new).
2. Name it either:
   - `<your-username>.github.io` — this deploys your site to the root URL `https://<your-username>.github.io/` (only works for one repo per account), **or**
   - any other name, e.g. `portfolio` — this deploys to `https://<your-username>.github.io/portfolio/`.
3. Leave it public, don't initialize with a README (you already have one here).

## 2. Push the code

From inside this folder:

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## 3. Enable GitHub Pages

### Option A — Deploy from branch (simplest, recommended for plain HTML)

1. In your repo, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Branch: `main`, folder: `/ (root)`. Save.
4. Wait 1–2 minutes. Your URL will appear at the top of that same Pages settings screen.

### Option B — GitHub Actions (the included workflow)

If you'd rather deploy via Actions (useful if you later add a build step):

1. In **Settings → Pages → Build and deployment → Source**, choose **GitHub Actions**.
2. The workflow at `.github/workflows/deploy.yml` will run automatically on every push to `main` and publish the site.

Only use one of Option A or B, not both.

## 4. Your live URL

- Repo named `<username>.github.io` → `https://<username>.github.io/`
- Any other repo name → `https://<username>.github.io/<repo-name>/`

## 5. Before/after you publish — update placeholders

This project ships with placeholder URLs since the real one depends on your repo name. Search for `YOUR-USERNAME` and `YOUR-REPO` in `index.html` and replace them with your actual GitHub Pages URL, in:

- `<link rel="canonical" ...>`
- `og:url`, `og:image`
- `twitter:image`
- the `url` field in the Person structured data (JSON-LD block)

## 6. Updating the site later

```bash
# edit index.html / css / js as needed
git add .
git commit -m "Update portfolio content"
git push
```

If you're on Option A, the live site updates within a minute or two of the push. If you're on Option B, check the **Actions** tab to watch the deployment run.

## Notes

- `assets/images/og-image.png` is a generated placeholder social-preview image. Swap it for your own 1200×630 image if you'd like a different look when the link is shared.
- All animations respect `prefers-reduced-motion` and are handled in `css/style.css` / `js/main.js`.
- No external JS dependencies — only Google Fonts are loaded remotely.
