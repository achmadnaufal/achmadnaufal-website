# Deploy to Cloudflare Pages

Static site, no build step. Should take under 15 minutes end to end.

## 1. Push to GitHub

```bash
cd /Users/achmadnaufal/free-living/website
git init
git add .
git commit -m "Initial site"
gh repo create achmadnaufal-website --public --source=. --remote=origin --push
```

If you don't use `gh` CLI, create the repo manually on github.com and push.

## 2. Connect to Cloudflare Pages

1. Go to dash.cloudflare.com → Workers & Pages → Create → Pages → Connect to Git.
2. Authorize GitHub, pick the `achmadnaufal-website` repo.
3. Build settings:
   - **Framework preset:** None
   - **Build command:** (leave empty)
   - **Build output directory:** `/`
4. Click **Save and Deploy**. Cloudflare gives you `achmadnaufal-website.pages.dev` within ~30 seconds.

## 3. Attach achmadnaufal.com

In the Pages project → Custom domains → Set up a custom domain.

- If your domain's DNS is already on Cloudflare: add `achmadnaufal.com` and `www.achmadnaufal.com`. Records are created automatically. Propagation is near-instant.
- If DNS is elsewhere (Namecheap, GoDaddy, etc.): Cloudflare gives you a CNAME target. Add it as a CNAME record at your registrar for both `@` (or `achmadnaufal.com`) and `www`.

Enable "Always Use HTTPS" in Cloudflare → SSL/TLS → Edge Certificates.

## 4. Iterate

Edit `index.html`, commit, push to main. Cloudflare auto-deploys in ~30 seconds.

---

## Later additions

- **Favicon:** add `favicon.svg` or `favicon.ico` in the root, add `<link rel="icon" href="/favicon.svg">` to `<head>`.
- **Headshot:** add `me.jpg` at the root, drop a small `<img src="/me.jpg" alt="Achmad Naufal" style="width:96px;border-radius:50%;margin-bottom:16px;">` into the About section for a trust signal.
- **Demo links:** when `kobo-me-dashboard` is deployed on Streamlit Cloud, add the live URL next to the GitHub link in Selected Work.
- **Analytics:** Cloudflare Web Analytics is free and privacy-friendly. Enable it in the Pages project settings, no code needed.
- **Blog / notes:** when you want one, add a `/notes/` folder with flat HTML files. Migrate to Astro when you outgrow that.

## Content to update before going live

1. Hero / services / about copy — read it once in your own voice, adjust any phrasing that feels off.
2. Selected Work — if `kobo-me-dashboard` isn't created yet, hide that block or reword to "in progress."
3. Contact email — confirm `achmadnaufal440@gmail.com` is the right one for client inquiries, or swap for a dedicated address.
