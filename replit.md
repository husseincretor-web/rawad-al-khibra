# Replit run notes

This project is a static Next.js site.

## Development

The configured `Start application` workflow runs:

```text
pnpm exec next dev --hostname 0.0.0.0 --port 5000
```

## Production

Build and serve the static-rendered site with:

```text
pnpm run build
pnpm exec next start --hostname 0.0.0.0 --port 5000
```

The optional `NEXT_PUBLIC_SITE_URL` environment variable controls the canonical URL, sitemap URL, robots URL, and structured-data URL. If it is not set, the existing site URL fallback is used.