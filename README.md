# Fondeka Web (Next.js + Tailwind, JS, /src)

Inspired by the clarity of Wise/TransferWise, adapted to Fondeka's brand.

## Quickstart
```bash
npm i
npm run dev
```
This repo uses the App Router and `/src` directory. JS only (no TS).

## Google Tag
Set `NEXT_PUBLIC_GOOGLE_TAG_IDS` to your Google tag IDs before building or deploying the site.

```bash
NEXT_PUBLIC_GOOGLE_TAG_IDS=AW-123456789,GT-ABCDEFGH
```

Use a comma-separated list if you need to load more than one Google tag. For Google Ads, the important ID is typically your `AW-...` tag.

## Customize
- Edit `src/lib/brand.js` for colors and strings.
- Sections live in `src/app/page.js` and `src/components/*`.
- Replace placeholder images in `/public` with real app mockups.

## Smart Deep Link Route
- Route: `/open`
- Example:
```text
https://www.fondeka.com/open?target=transaction/3459&source=push&transactionId=3459
```
- Behavior:
  - iOS: attempts `fondeka://<target>?...`, then falls back to App Store.
  - Android: attempts Intent/App scheme, then falls back to Google Play.
  - Desktop: shows QR + explicit store CTAs.
- Attribution:
  - Query params are forwarded to app-open attempts.
  - Query params are forwarded to store fallback links where supported (Play `referrer`, App Store `ct`).
- Backend/admin link generation for app-intent journeys should use `/open?...` links, not raw web paths.
